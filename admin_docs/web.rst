#################################
Web domains and SSL Certicates
#################################

.. toctree::
  :maxdepth: 2
  :glob:
  
  web/fastcgi.rst
  web/ssl_certificates.rst
  
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
   * - %web_ssl_port%
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

1. Using user.ini in the directory
2. Via PHP-FPM pool config 

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


