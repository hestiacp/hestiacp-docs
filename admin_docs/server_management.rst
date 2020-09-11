###############################
Server management 
###############################

************************************************
How to setup a DNS Cluster
************************************************

If you are looking for the options to minimize DNS-related downtime or the way to manage dns across all server you have, you might consider to set up dns cluster.

#. Create user **dns-cluster** on a server which will be used as dns slave
#. Run following command on a master

.. code-block:: bash

    v-add-remote-dns-host slave.yourhost.com 8083 admin p4sw0rd

Password and host name should be replaced with relevant data of course.

This way you can set up master->slave or master-master-master cluster. There is no limitation on how to chain dns servers.

************************************************
How to setup a (S)FTP Backup server
************************************************

Login on a server as root and run following command

.. code-block:: bash

    v-add-backup-ftp-host remote.ftp-host.ltd backup-user p4ssw0rd [/path-backups/] [port]

For SFTP

.. code-block:: bash

    v-add-backup-sftp-host remote.ftp-host.ltd backup-user p4ssw0rd [/path-backups/] [port]
    
Arguments between brackets [] may be omitted

************************************************
How to setup a remote database server
************************************************

#.  It is assumed you already have your second server up and running
#.  On your Hestia Server run the following command

.. code-block:: bash

   v-add-database-host mysql new-server.com root password

Mysql maybe replaced by the PostgreSQL

#. To make sure database has been added run following command

.. code-block:: bash

    v-list-database-hosts


************************************************
How do Web templates work?
************************************************

.. warning::
    Modifying templates could cause errors on the server and services that are not able to reload or start.
    
Every time you will rebuild the user or domain the config files of the domain will be over written by the new templates. This is done by default during update of HestiaCP or it can be initiated by the admin or by modifying settings by the user.

The templates can be found in the /data/templates/ directory in the install folder 

.. list-table:: Template locations
   :widths: 25 75
   :header-rows: 1
   
   * - Service
     - Location
   * - Nginx (Proxy)
     - /usr/local/hestia/data/templates/web/nginx/
   * - Nginx - PHP FPM
     - /usr/local/hestia/data/templates/web/nginx/php-fpm/
   * - Apache2 (Legacy / mod-php )
     - /usr/local/hestia/data/templates/web/apache2/
   * - Apache2 - PHP FPM
     - /usr/local/hestia/data/templates/web/apache2/php-fpm/
   * - PHP-FPM
     - /usr/local/hestia/data/templates/web/php-fpm/
     
When editing it is the best practice to copy the template before editing. As the default templates will reset after update of HestiaCP

.. code-block:: bash

    cp original.tpl new.tpl
    cp original.stpl new.stpl
    cp original.sh new.sh

.. note::
    Modifying any default templates can cause issues in the future as there are commonly overwritten during updates.    
    
When you are done modifying enable the template with the selected domain from the control panel. 

After modifying existing template you need to rebuild user configuration. This can be done using v-rebuild-user command or bulk operation in the web interface (drop down list on a "User" page). 

-------------------
Available variables
-------------------

.. list-table:: Variables
   :widths: 20 30 50 
   :header-rows: 1
   
   * - Name
     - Example
     - Description  
   * - %ip%
     - 123.123.123.123
     - IP Address of Server
   * - %proxy_port%
     - 80
     - Port of Proxy
   * - %proxy_port_ssl%
     - 443
     - Port of Proxy (SSL)
   * - %web_port%
     - 80 or 8080
     - Port of Webserver
   * - %web_port_ssl%
     - 443 or 8443
     - Port of Webserver (SSL)   
   * - %web_port_ssl%
     - 443 or 8443
     - Port of Webserver (SSL)   
   * - %domain%
     - domain.tld
     - Domain
   * - %domain_idn%
     - domain.tld
     - Domain (Internationalised)   
   * - %alias_idn%
     - alias.domain.tld
     - Alias Domain (Internationalised)   
   * - %docroot%
     - /home/username/web/public_html/
     - Document root of domain      
   * - %sdocroot%
     - /home/username/web/public_shtml/
     - Private root of domain 
   * - %ssl_pem%
     - /usr/local/hestia/data/user/username/ssl
     - Location of SSL Certificate    
   * - %ssl_key%
     - /usr/local/hestia/data/user/username/ssl
     - Location of SSL Key   
   * - %web_system%
     - Nginx / Apache
     - Software used as Webserver
   * - %home%
     - /home
     - Default home directory
   * - %user%
     - username
     - Username of user
   * - %user%
     - username
     - Username of user
   * - %backend_lsnr%
     - proxy:fcgi://127.0.0.1:9000
     - Your default FPM Server
   * - %proxy_extentions%
     - List of extensions
     - All extension that should be handled by the proxy server  
  
       
%sdocroot% can also be set to %docroot% with settings
     
************************************************
How can I change settings for a specific domain
************************************************

With the switch to PHP-FPM there are currently 2 different ways.

1# Using user.ini in the directory
2# Via PHP-FPM pool config 

Config templates for the PHP pool can be found in

.. list-table:: Template locations
   :widths: 25 75
   :header-rows: 1
   
   * - Service
     - Location
   * - PHP-FPM
     - /usr/local/hestia/data/templates/web/php-fpm/

Due to the fact we use multi PHP we need to recognise the PHP version to be used. There for we follow the following naming.

.. code-block:: bash

    YOURNAME-PHP-X_Y.tpl
    
There X_Y is your PHP version

************************************************
How do DNS templates work?
************************************************

DNS templates can be found in 

.. list-table:: Templates locations
   :widths: 25 75
   :header-rows: 1
   
   * - Service
     - Location
   * - DNS
     - /usr/local/hestia/data/templates/dns/
     
     
Variables that can be used are

.. list-table:: Available variables
   :widths: 25 25 50
   :header-rows: 1
   
   * - Name
     - Example
     - Description
   * - %ns1%
     - ns1.nameserver.tld
     - Name server 1
   * - %ns2%
     - ns2.nameserver.tld
     - Name server 2
   * - %ip%
     - 123.123.123.123
     - Ip address of the server or Dedicated ip
   * - %domain%
     - domain.tld
     - Domain of the user
   * - %time%
     - 12:00:00
     - Time of creation
   * - %date%
     - 01-01-2020
     - Time of creation
   
Templates can support up to 8 name servers with with %nsx% x could be up to maximum of 8

*********************************************************
Where can I find more information about the config files
*********************************************************

A good starting point for every software check the creator

* For Nginx `NGINX Docs <https://nginx.org/en/docs/>`_
* For Apache2 `Apache Docs <http://httpd.apache.org/docs/2.4/>`_
* For PHP FPM `PHP Docs <https://www.php.net/manual/en/install.fpm.configuration.php>`_

You could also try `our Forum <https://forum.hestiacp.com>`_

***************************************************************
How to install additional PHP packages / Modules 
***************************************************************

.. code-block:: bash

    apt-get install php-package-name


For example 

.. code-block:: bash

    apt-get install php-memcached php-redis 
    
Will install php-memcached and php-redis including the required additional packages for PHP.

Incase you use PHP-FPM you don't have to do anything. 

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

************************************************
Can I use HestiaCP behind Cloudflare CDN?
************************************************

By default  `Cloudflare <https://support.cloudflare.com/hc/en-us/articles/200169156-Identifying-network-ports-compatible-with-Cloudflare-s-proxy>`_ supports only a limited number of ports

To change the port you can run the command

.. code-block:: bash

    v-change-sys-port 2083

Or you can disable the proxy of Cloudflare


***************************************************************
Why I can't use :samp:`http://my.ip.adress/phpmyadmin/`
***************************************************************

For security reason we have decided to disable this option

Please use :samp:`http://mydomain.com/phpmyadmin/`

***************************************************************
How can I enable / Disable the filemanager
***************************************************************

By an new install the filemanager will be enabled by default

For updates please run the following command

.. code-block:: bash

    v-add-sys-filemanager
    
To disable the file manager please run 

.. code-block:: bash

    v-delete-sys-filemanager

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

    /usr/local/hestia/web/rrd/net/*
    systemctl restart hestia
    

    