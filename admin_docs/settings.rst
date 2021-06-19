########################
Server setting / Config
########################

.. toctree::
  :maxdepth: 2
  :glob:
  
  settings/filemanager.rst
  settings/firewall.rst


*********************************************************
Where can I find more information about the config files
*********************************************************

A good starting point for every software check the creator

* For Nginx `NGINX Docs <https://nginx.org/en/docs/>`_
* For Apache2 `Apache Docs <http://httpd.apache.org/docs/2.4/>`_
* For PHP FPM `PHP Docs <https://www.php.net/manual/en/install.fpm.configuration.php>`_

You could also try `our Forum <https://forum.hestiacp.com>`_



************************************************
Can I use HestiaCP behind Cloudflare CDN?
************************************************

By default  `Cloudflare <https://support.cloudflare.com/hc/en-us/articles/200169156-Identifying-network-ports-compatible-with-Cloudflare-s-proxy>`_ supports only a limited number of ports

To change the port you can run the command

.. code-block:: bash

    v-change-sys-port 2083

Or you can disable the proxy of Cloudflare


***************************************************************
How to remove unused ethernet ports from RRD
***************************************************************

.. code-block:: bash

    nano /usr/local/hestia/conf/hestia.conf
    
Add the following line:

.. code-block:: bash

    RRD_IFACE_EXCLUDE='lo'
    
Add a other network port as comma separated list

.. code-block:: bash

    rm /usr/local/hestia/web/rrd/net/*
    systemctl restart hestia
    
***************************************************************
What does the policy "Enforce subdomain ownership" mean
***************************************************************

In Hestia 1.3.5 and Vesta it was possible for "User Bob" to create an subdomain (bob.alice.com) of alice.com even the User Alice is a different user.  This could cause "Security" issues and therefor we have decided to add a policy to disable / enable this behaviour. By default the policy is enabled. 

To turn the the policy off for only one domain. For example that has been used for "testing"

.. code-block:: bash

    # to enable 
    v-add-web-domain-allow-users user domain.com
    # to disable 
    v-delete-web-domain-allow-users user domain.com
    
***************************************************************
Can I restrict access to the "Admin" account
***************************************************************

In 1.3 we have added the function in Hestia to give an other user Administrator  access for 1.4 we have decided to give system administrators the options to limit access to the main "system administrator" account to improve security. 


