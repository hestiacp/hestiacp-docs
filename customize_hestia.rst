Customizing Hestia
==================

******************************
Can I customize HestiaCP
******************************
Currently we only support changing the layout via CSS. Changes to the HTML file are currently no supported as they break during update procedures. 

*************************
How can I add a new theme
*************************

Create a new file 

.. code-block:: bash
    touch /root/mycss.css
    
Make your changes to CSS file. 

.. code-block:: bash
    .body-login, .body-reset {
        height: auto;
        padding-top: 10%;
        background: rgb(231, 102, 194) !important;
        background: radial-gradient(circle, rgba(231, 102, 197, 1), rgba(174, 43, 177, 1)) !important;
        }


Run the following command 

.. code-block:: bash
    v-add-sys-theme mycss local
    Please enter the full path to the CSS file to import: /root/mycss.css
    
*********************************
How can I customize a default theme
*********************************

Changes to the default supplied themes are always over written during updates. How ever via the :ref:`v-add-sys-theme` you can create a new theme.

When we want to change the dark theme

 .. code-block:: bash
    cp $HESTIA/install/deb/themes/dark.css /root/mycss.css
    
Apply your changes and    


******************************
Can I change any html template
******************************

Changes to any html will be reset during upgrades this also applies for installing 3rd party software that changes the html pages.