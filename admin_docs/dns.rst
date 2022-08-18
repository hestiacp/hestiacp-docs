###############################
DNS Management / DNS server
###############################

************************************************
How to setup a DNS Cluster
************************************************

If you are looking for an option to minimize DNS-related downtime or the way to manage dns across all servers you have, you might consider setting up a dns cluster.

.. note::
    Ensure that your master server's IP is whitelisted in *Configure Server* -> *Security* -> *Allowed IP addresses for API*, otherwise you will get an error when adding the slave server to the cluster.

#. Create the user **dns-cluster** on a server that will be used as dns slave
#. Run following command on a master

.. code-block:: bash

    v-add-remote-dns-host slave.yourhost.com 8083 admin p4sw0rd

Password and host name should be replaced with the admin credentials of the server that will be a slave.

Alternatively you can run on the slave server the following command

.. code-block:: bash

    v-generate-api-key 

This will generate an API key. Replace the username "admin" with the generated key. This will keep the ability to change the admin password without issues in the future.
   
.. code-block:: bash   

    v-add-remote-dns-host slave.yourhost.com 8083 api_key

With the new API system you can also replace api_key with access_key:secret_key 

Using this method, you can set up a master->slave or master-master-master cluster. There is no limitation on how to chain dns servers.

To create a master-master-master cluster, repeat the above steps for each node in the cluster, adding the other two nodes as slaves to the server being worked on. For example, server1 would have server2 and server3 as slaves, server2 would have server1 and server3 as slaves, and server3 would have server1 and server2 as slaves. 

If you navigate to *Configure Server* -> *DNS Server*, you should be able to see all hosts in your DNS cluster. 

.. note::
    Ensure that the proper glue records are configured for your nameserver's domain through the registrar. (Example: ns1.example.com resolves to your Hestia server in North America and ns2.example.com resolves to your Hestia server in Europe.) This can usually be achieved by the 'view registered nameservers' functionality at the domain registrar. 

When adding the DNS Zone to a server to propogate, select the *child-ns* bind template. It is also best practice to update your packages and set the namservers to the other hosts in the dns cluster to ensure the DNS redundancy is being utilized. 

************************************************
Can I separate DNS accounts by users 
************************************************

Yes you can just supply the user variable behind the command. 

.. code-block:: bash

    v-add-remote-dns-host slave.yourhost.com 8083 admin p4sw0rd api useraccount

Or 

.. code-block:: bash   

    v-add-remote-dns-host slave.yourhost.com 8083 api_key '' api useraccount

With the new API system you can also replace api_key with access_key:secret_key 

.. code-block:: bash   

    v-add-remote-dns-host slave.yourhost.com 8083 access_key:secret_key '' api useraccount

Please note that currently only the user **dns-user** is exempted from syncing to other servers. If you have a DNS cluster with multiple master slaves you might run in issues.
    
************************************************
I am not able to add a server as DNS host 
************************************************

When trying to add a DNS server for a cluster I get the following error

.. code-block:: bash 

    /usr/local/hestia/func/remote.sh: line 43: return: Error:: numeric argument required
    Error: api connection to slave.domain.com failed

By default API access to a new Hestia install has been disabled for non-local ip adresses. Please add youe ip address to the "Allowed ip adresses for API" field in the settings in *Configure Server* -> *Security* -> *Allowed IP addresses for API*
