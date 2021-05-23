###############################
Database
###############################

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
    
***************************************************************
Why I can't use :samp:`http://ip/phpmyadmin/`
***************************************************************

For security reason we have decided to disable this option

Please use :samp:`https://host.domain.tld/phpmyadmin/`
    

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

And set bind-address = 0.0.0.0 or bind-address = "your.server.ip.address"
