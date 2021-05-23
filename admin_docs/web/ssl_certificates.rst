##################################
SSL Certificates and Let's Encrypt
##################################


************************************************
How to setup Let's Encrypt for the control panel
************************************************

Make sure the hostname of the server is pointed to the ip address and you set the hostname correctly.

If not done use the command

.. code-block:: bash

     v-change-sys-hostname host.domain.tld
     
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

**************************************************
Error: Let's Encrypt validation status 400.
**************************************************

When requesting an SSL certificate the following error is often seen:

Error: Let's Encrypt validation status 400. Details: Unable to update challenge :: authorization must be pending
means

It could mean multiple things:

1. Cloudflare proxy is enabled and SSL is set too strict. 
2. Nginx / Apache2 is not reloading / Issue with an template
3. IPv6 is setup. Disable IPV6 in DNS
4. Wrong / Incorrect template. 

In the future we hope to improve debugging but so far the easiest currently is:

Go to /var/log/hestia/ and when you run the command you will multiple log files:

``LE-{user}-{domain}-{date}-{time}.log``

Open this log file an go to "Step 5"

You will see something like. 

.. code-block:: bash

    ==[Step 5]==
    - status: 200
    - nonce: 0004EDQMty6_ZOb1BdRQSc-debiHXGXaXbZuyySFU2xoogk
    - validation: pending
    - details: 
    - answer: HTTP/2 200 
    server: nginx
    date: Wed, 21 Apr 2021 22:32:16 GMT
    content-type: application/json
    content-length: 186
    boulder-requester: 80260362
    cache-control: public, max-age=0, no-cache
    link: <https://acme-v02.api.letsencrypt.org/directory>;rel="index"
    link: <https://acme-v02.api.letsencrypt.org/acme/authz-v3/12520447717>;rel="up"
    location: https://acme-v02.api.letsencrypt.org/acme/chall-v3/12520447717/scDRXA
    replay-nonce: 0004EDQMty6_ZOb1BdRQSc-debiHXGXaXbZuyySFU2xoogk
    x-frame-options: DENY
    strict-transport-security: max-age=604800
    
    {
      "type": "http-01",
      "status": "pending",
      "url": "https://acme-v02.api.letsencrypt.org/acme/chall-v3/12520447717/scDRXA",
      "token": "9yriok5bpLtV__m-rZ8f2tQmrfeQli0tCxSj4iNkv2Y"
    }

If you follow https://acme-v02.api.letsencrypt.org/acme/chall-v3/12520447717/scDRXA

You will get more info what went wrong.


**************************************************
Can I request a SSL Certificate with Lets Encrypt
**************************************************

Yes, you are able to enable Lets Encrypt even with Cloudflare how ever it need some special steps

#. Disable Cloudflare proxy of you domain.
#. Wait Approx 5 min due to caches by several name servers
#. Request a Certificate via Control panel or use the CLI command
#. Enable proxy
#. Switch over to Full (strict) (Go to SSL/TLS Tab)

Updating should be no issue anymore. And updates are not effected anymore

****************************************************************
Can I use a  Cloudflare Origin SSL Certificate with Cloudflare
****************************************************************

#. Please follow the following steps https://support.cloudflare.com/hc/en-us/articles/115000479507
#. When you complete Step 1.
#. You can enter your SSL keys in "Edit Web Domain" page.
#. You still need to enter the intermediate certificate this one can be found here. https://support.cloudflare.com/hc/en-us/articles/115000479507#h_30cc332c-8f6e-42d8-9c59-6c1f06650639
#. Switch over to Full (strict) (Go to SSL/TLS Tab)
