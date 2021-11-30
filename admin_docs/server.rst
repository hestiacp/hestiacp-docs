#######################################
General server settings
#######################################

In rare cases the network service might be slower than Apache2 and or Nginx. In that case Nginx or Apache2 will refuse to start up successfully start.

.. code-block:: bash

  systemctl status nginx
  
Will create the error an error

.. code-block bash 

    nginx: [emerg] bind to x.x.x.x:80 failed (99: cannot assign requested address)
    
or in case of Aapche2

.. code-block bash 

    (99)Cannot assign requested address: AH00072: make_sock: could not bind to address x.x.x.x:8443
    
The following command should allow services to assign to non existing ip addresses

.. code-block bash 
    
    sysctl -w net.ipv4.ip_nonlocal_bind=1 
    
