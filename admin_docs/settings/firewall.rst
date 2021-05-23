#############################
Firewall / Fail2ban / Ipset
#############################

***************************************************************
IPTables How can I allow/deny an IP to all ports
***************************************************************

By default after each restart Hestia will clear the current iptables

To allow an IP to all ports (Or block)

Use the following command

.. code-block:: bash

    v-add-firewall-rule ACTION IP PORT [PROTOCOL] [COMMENT] [RULE]
    
    v-add-firewall-rule 'accept' '123.123.123.123' '0' # Port 0 matches all ports
    
Also via interface it is possible just enter 0 as port number

****************************************
How do I setup ip set black / whitelist
****************************************

IPset are large lists of ip adresses / subnets. They can be used for black/white lists. 

Go to "Server" (Cogs icon) then click on Configure -> Firewall -> Manage IP set  and you will see the following page. 

.. image:: ../../images/ipset/ipset-1.png
    :width: 656px
    :align: center
    :height: 150px
    :alt: List IP List
    
Click on "Add IP list"

.. image:: ../../images/ipset/ipset-2.png
    :width: 350px
    :align: center
    :height: 303px
    :alt: Add IP List
    
Name provide a name for IP list
For data source you are able to us the following opions:

1. Url http://ipverse.net/ipblocks/data/countries/nl.zone (or https)
2. Script: script:/usr/local/hestia/install/deb/firewall/ipset/blacklist.sh If you use your own scripts make sure you chmod to 775.
3. File: file:/location/of/file

IP Version. Currently we only support ip v4 how ever a future release will include for ip v6.

Auto update Yes / No

And click on save.

The go to the "Firewall" and click on "Add Rule"

.. image:: ../../images/ipset/ipset-3.png
    :width: 350
    :align: center
    :height: 391px
    :alt: Add Firewall rule

Set action to block / allow depending on your needs. 
Protocol to the protocol you want to block/allow
Ports to the ports you want to block / allow. 
Ip Address / IP list Select the IP set you want to use 
You can also use ipset:name

And click on "Save".

*******************************************
My IP set doesn't work
*******************************************

An IP set must at least contain 10 IP / Ip ranges.

*******************************************
Can I combine multiple sources in one?
*******************************************
    
If you want to combine multiple ip sources together it can be done via de following script:

.. code-block:: bash

    #!/bin/bash
    
    BEL=(
      "http://ipverse.net/ipblocks/data/countries/be.zone"
      "http://ipverse.net/ipblocks/data/countries/nl.zone"
      "http://ipverse.net/ipblocks/data/countries/lu.zone" 
    )
    
    IP_BEL_TMP=$(mktemp)
    for i in "${BEL[@]}"; do
        IP_TMP=$(mktemp)
        (( HTTP_RC=$(curl -L --connect-timeout 10 --max-time 10 -o "$IP_TMP" -s -w "%{http_code}" "$i") ))
        if (( HTTP_RC == 200 || HTTP_RC == 302 || HTTP_RC == 0 )); then # "0" because file:/// returns 000
            command grep -Po '^(?:\d{1,3}\.){3}\d{1,3}(?:/\d{1,2})?' "$IP_TMP" | sed -r 's/^0*([0-9]+)\.0*([0-9]+)\.0*([0-9]+)\.0*([0-9]+)$/\1.\2.\3.\4/' >> "$IP_BEL_TMP"
        elif (( HTTP_RC == 503 )); then
            echo >&2 -e "\\nUnavailable (${HTTP_RC}): $i"
        else
            echo >&2 -e "\\nWarning: curl returned HTTP response code $HTTP_RC for URL $i"
        fi
        rm -f "$IP_TMP"
    done
    
    sed -r -e '/^(0\.0\.0\.0|10\.|127\.|172\.1[6-9]\.|172\.2[0-9]\.|172\.3[0-1]\.|192\.168\.|22[4-9]\.|23[0-9]\.)/d' "$IP_BEL_TMP"|sort -n|sort -mu
    rm -f "$IP_BEL_TMP"