###############################
Server management 
###############################

************************************************
How to setup Let's Encrypt for the control panel
************************************************

Make sure the hostname of the server is pointed to the ip adress

Then run the following command

.. code-block:: bash

    v-add-letsencrypt-host

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
How do templates work?
************************************************

.. warning::
    Modifying templates could cause errors on the server and services that are not able to reload or start.
    
Every time you will rebuild the user or domain the config files of the domain will be over written by the new templates. This is done by default during update of HestiaCP or it can be initiated by the admin or by modifying settings by the user.

The templates can be found in the /data/templates/ directory in the install folder 

.. list-table:: Templates locations
   :widths: 25 75
   :header-rows: 1
   
   * - Service
     - Location
   * - Nginx
     - /usr/local/hestia/data/templates/web/nginx/
   * - Nginx - PHP FPM
     - /usr/local/hestia/data/templates/web/nginx/php-fpm/
   * - Apache2
     - /usr/local/hestia/data/templates/web/apache2/
   * - Apache2 - PHP FPM
     - /usr/local/hestia/data/templates/web/apache2/php-fpm/
   * - PHP-FPM
     - /usr/local/hestia/data/templates/web/php-fpm/
   * - DNS
     - /usr/local/hestia/data/templates/dns
     
When editing it is the best practice to copy the template before editing. As the default templates will reset after update of HestiaCP

.. code-block:: bash

    cp original.tpl new.tpl
    cp original.stpl new.stpl
    cp original.sh new.sh
    
    
When you are done modifying enable the template with the selected domain from the control panel. 

After modifying existing template you need to rebuild user configuration. This can be done using v-rebuild-user command or bulk operation in the web interface (drop down list on a "User" page). 



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



