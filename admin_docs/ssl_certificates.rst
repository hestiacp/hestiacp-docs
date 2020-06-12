##################################
SSL Certifcates and Let's Encrypt
##################################


************************************************
How to setup Let's Encrypt for the control panel
************************************************

Make sure the hostname of the server is pointed to the ip address and you set the hostname correctly.

If not done use the command

.. code-block:: bash

     v-change-sys-hostname myhostname.com
     
Then run the following command

.. code-block:: bash

    v-add-letsencrypt-host
    
************************************************
Common errors using Lets Encrypt
************************************************

If you are experiencing any problems.

Common errors are that are

.. note::
  Due to changes in the code the error message has been changed. The following list will be extended in the futere.


================    ==================================================================================
Error               Message
rateLimited         The Rate limit of the maximum requests have been passed.
                        Please check https://crt.sh for how active certificates you have.
================    ==================================================================================      
 
     
************************************************
Can I request a SSL Certificate with LE?
************************************************

Yes you can!

#. Disable Cloudflare proxy of you domain.
#. Wait Approx 5 min due to caches by several name servers
#. Request a Certificate via Control pannel or use the CLI command
#. Enable proxy
#. Switch over to Full (strict) (Go to SSL/TLS Tab)

And enjoy

****************************************************************
Can I use a  Cloudflare Origin SSL Certificate with Cloudflare
****************************************************************

Yes you can!

#. Please follow the following steps https://support.cloudflare.com/hc/en-us/articles/115000479507
#. When you complete Step 1.
#. You can enter your SSL keys in "Edit Web Domain" page.
#. You still need to enter the intermediate certificate this one can be found here. https://support.cloudflare.com/hc/en-us/articles/115000479507#h_30cc332c-8f6e-42d8-9c59-6c1f06650639
#. Switch over to Full (strict) (Go to SSL/TLS Tab)
