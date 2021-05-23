#######################################
Email and mail server
#######################################

***************************************
I am unable to send email.
***************************************

Check first if the port 25 is open for outgoing traffic. A lot of providers close port 25 on default as a security measurement to combat spam.

Run the following command in commad line:

.. code-block:: bash

    telnet ASPMX.L.GOOGLE.COM 25
    
If the connection was successfull you will see:

.. code-block:: bash

    Trying 2a00:1450:400c:c00::1b...
    Connected to ASPMX.L.GOOGLE.COM.
    Escape character is '^]'.
    220 mx.google.com ESMTP a7si1253985wrr.455 - gsmtp
    
If not you have 2 options: 
    1. Contact you provider and ask them to open port 25 for outgoing traffic.
    2. Setup a mail relay under the mail domain settings or set it up generally for the server in system settings. For this you to use an SMTP relay service like: 
        - https://aws.amazon.com/ses/
        - https://www.smtp2go.com


***************************************
I am unable to receive email.
***************************************

If yo are unable to receive email make sure you have setup your DNS propperly. If you are using Cloudflare disable the use of the proxy for the mail domain. 

When you are done you can check via https://mxtoolbox.com/MXLookup.aspx.

***************************************
How to install Rainloop
***************************************

You can install rainloop via the following command

.. code-block:: bash

    v-add-sys-rainloop
    
*****************************************
Can I login into the backend of Rainloop
*****************************************

In the root folder is an file located called .rainloop containing the username and password

.. code-block:: bash
    
    Username: admin_f0e5a5aa
    Password: D0ung4naLOptuaa
    Secret key: admin_f0e5a5aa
    
You can access the admin via https://webmail.domain.com/?admin_f0e5a5aa

And use the data supplied above. When not needed feel free to remove this file.

