###############################
Database
###############################

.. toctree::
  :maxdepth: 2
  :glob:
  
  database/phpmyadmin-sso.rst

************************************************
How to setup a remote database server
************************************************

#.  It is assumed you already have your second server up and running
#.  On your Hestia Server run the following command

.. code-block:: bash

   v-add-database-host mysql new-server.com root password

MySQL may be replaced by the PostgreSQL

#. To make sure database has been added run following command

.. code-block:: bash

    v-list-database-hosts
    
***************************************************************
Why I can't use :samp:`http://ip/phpmyadmin/`
***************************************************************

For security reasons we have decided to disable this option.

Please use :samp:`https://host.domain.tld/phpmyadmin/`
    
***************************************************************
How can I enable access to :samp:`http://ip/phpmyadmin/`
***************************************************************

For Apache2

.. code-block:: bash

   nano /etc/apache2/conf.d/ip.conf
   
   # And add the code before both </VirtualHost>
   IncludeOptional /etc/apache2/conf.d/*.inc
   
   # Restart apache2
   systemctl restart apache2 
   
   # Or add in /etc/apache2.conf 
   IncludeOptional /etc/apache2/conf.d/*.inc

For Nginx

.. code-block:: bash

   nano /etc/nginx/conf.d/ip.conf
   
   # replace 
   location /phpmyadmin/ {
         alias /var/www/document_errors/;
         return 404;
     }
   location /phppgadmin/ {
         alias /var/www/document_errors/;
         return 404;
     }
   
   # with 
   include     /etc/nginx/conf.d/phpmyadmin.inc*;
   include     /etc/nginx/conf.d/phppgadmin.inc*;
   
***************************************************************
How can I connect from a remote location to the database
***************************************************************

By default connections are disabled open port 3306 in the firewall. Open port 3306 in the firewall 

.. image:: ../images/ipset/ipset-3.png
    :width: 350
    :align: center
    :height: 391px
    :alt: Add Firewall rule

Then edit /etc/mysql/mariadb.conf.d/50-server.cnf

.. code-block:: bash

   nano /etc/mysql/mariadb.conf.d/50-server.cnf

And set bind-address = 0.0.0.0 or bind-address = "your.server.ip.address"
