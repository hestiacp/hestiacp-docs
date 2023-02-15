Customising Hestia
==================

******************************
Can I customise HestiaCP?
******************************
Currently we only support changing the layout via CSS. Changes to the HTML file are currently not supported as they break during update procedures. 

**************************
How can I add a new theme?
**************************

Create a new theme in /usr/local/hestia/web/css/theme/custom/my_theme.css

.. code-block:: bash
    
    .body-login, .body-reset {
        height: auto;
        padding-top: 10%;
        background: rgb(231, 102, 194) !important;
        background: radial-gradient(circle, rgba(231, 102, 197, 1), rgba(174, 43, 177, 1)) !important;
        }
        
    
*************************************
How can I customise a default theme?
*************************************

Changes to the default supplied themes are always over written during updates. However via the v-add-sys-theme you can create a new theme.

When we want to change the dark theme

 .. code-block:: bash
    
    cp $HESTIA/install/deb/themes/dark.css /root/mycss.css
    
Apply your changes and follow the instructions above 

*******************************
Can I change any html template?
*******************************

Changes to any html will be reverted during upgrades. This also applies for installing 3rd party software that changes the html pages.

****************************************
How can I change domain not found page?
****************************************

The domain not fond page can be found in /var/www/html/index.html to edit it use: 

.. code-block:: bash
    
    nano /var/www/html/index.html


*****************************************************
How can I change the default page? 
*****************************************************

The default index.html when a page has been created is location in /usr/local/hestia/data/templates/web/skel/public_html

Currently after each update the templates are overwritten by the Hestia update routine. To prevent this issue we have introduced a process to create post/pre install hooks

*****************************************************
Can I run certain command before and after update?
***************************************************** 

With the release of Hestia 1.4.6,  we have added the pre / post install hooks. Examples for the usage are as as follows: 
- Disable and enable demo mode before and after an update. 
- Restore default skeleton 

To enable this feature, create a file in /etc/hestiacp/hooks/pre_install.sh and or /etc/hestiacp/hooks/post_install.sh

For example, to disable demo mode on pre install of a update: 

.. code-block:: bash

    #!/bin/bash
    sed -i "s|^DEMO_MODE=.*'|DEMO_MODE='no'|g" $HESTIA/conf/hestia.conf
    
After that chmod +x /etc/hestiacp/hooks/pre_install.sh 

For post install actions use the same example. Except replace /etc/hestiacp/hooks/pre_install.sh with /etc/hestiacp/hooks/post_install.sh

.. note:: 

    If you use custom error documents you still have to rebuild all websites again! 
