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
    

    
