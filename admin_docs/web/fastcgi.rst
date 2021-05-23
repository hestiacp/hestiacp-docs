###############################################################
Nginx FastCGI Cache
###############################################################

FastCGI Cache is an option with in Nginx allowing to cache the out put of FastCGI (in this case php). There will be for a short moment an file created on your server with the contents of the output. If an other user requests the same page Nginx will check if the "age" of the cached file is still valid and if it is true it will send the cached file to to the user. 

FastCGI cache works best for sites get a lot of request and the pages doesn't change that often. (For example an news site). For an more dynamic sites there might be changes required to the configuration or even disabling is required. 

***************************************************************
Why does software package x and y not work with FastCGI cache
***************************************************************

As we have over 20 different templates and we don't use them al we have decided it to release the future and hope in the future the comuntity helps improving the templates with a pull request. 

To disable the FastCGI cache for an certain template you can set the $no_cache variable to 1

.. code-block:: bash

    if ($http_cookie ~* "comment_author|wordpress_[a-f0-9]+|wp-postpass|wordpress_no_cache|wordpress_logged_in|woocommerce_items_in_cart|woocommerce_cart_hash|PHPSESSID") {
        set $no_cache 1;
    }
    
***************************************************************
How do I enable FastCGI cache for my custom template 
***************************************************************

Within the block where you call php / fastcgi pass 

.. code-block:: bash

    location ~ [^/]\.php(/|$) {
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        try_files $uri =404;
        fastcgi_pass    %backend_lsnr%;
        fastcgi_index   index.php;
        include         /etc/nginx/fastcgi_params;
    }

And add the following lines under the ``include         /etc/nginx/fastcgi_params;``

.. code-block:: bash

    include %home%/%user%/conf/web/%domain%/nginx.fastcgi_cache.conf*;
    
    if ($request_uri ~* "/path/with/exceptions/regex/whatever") {
        set $no_cache 1;
    }

***************************************************************
How can I see if FastCGI Cache is working 
***************************************************************

.. code-block:: bash

    v-add-fastcgi-cache user domain.tld 5m yes yes
    
It will add an X-STATUS header to the return data where it can be a miss, hit or bypass. 

- Hit  Requested file came out the cache
- Miss  Requested file was missing in the cache or was to old
- Bypass Cache was bypassed (no_cache) variable was set

***************************************************************
How can I clear the cache?
***************************************************************

When FastCGI cache is enabled an button is added to "Edit" Web where you can clear the cache or use the command:

.. code-block:: bash

    v-purge-nginx-cache user domain.tld

***************************************************************
Why do I don't have the option to use FastCGI cache
***************************************************************

FastCGI cache is an option for Nginx mode only. If you are using Nginx + Apache2 you can enable proxy caching template and proxy cache will enable. Functions almost the same. Proxy cache will also work in case you use a docker image or nodejs.