###############################
DNS Management / DNS server
###############################

************************************************
How to setup a DNS Cluster
************************************************

If you are looking for the options to minimize DNS-related downtime or the way to manage dns across all server you have, you might consider to set up dns cluster.

.. note::
    Ensure that your master server's IP is whitelisted in *Configure Server* -> *Security* -> *Allowed IP addresses for API*, otherwise you will get an error when adding the slave server to the cluster.

#. Create user **dns-cluster** on a server which will be used as dns slave
#. Run following command on a master

.. code-block:: bash

    v-add-remote-dns-host slave.yourhost.com 8083 admin p4sw0rd

Password and host name should be replaced with relevant data of course.

Alternatively you can run on the slave server the following command

.. code-block:: bash

    v-generate-api-key 

This will generate an API key. Replace the username "admin" with the generated key. This will keep the ability to change the admin password without issues in the future.
   
.. code-block:: bash   

    v-add-remote-dns-host slave.yourhost.com 8083 api_key

This way you can set up master->slave or master-master-master cluster. There is no limitation on how to chain dns servers.

************************************************
Can I separate DNS accounts by users 
************************************************

Yes you can just supply the user variable behind the command. 

.. code-block:: bash

    v-add-remote-dns-host slave.yourhost.com 8083 admin p4sw0rd useraccount

Or 

.. code-block:: bash   

    v-add-remote-dns-host slave.yourhost.com 8083 api_key '' useraccount
    
************************************************
I am not able to add a server as DNS host 
************************************************

When trying to add a DNS server for a cluster I get the following error

.. code-block:: bash 

    /usr/local/hestia/func/remote.sh: line 43: return: Error:: numeric argument required
    Error: api connection to slave.domain.com failed

By default API access to has been disabled for not local ip adresses. Please add you ip adress to the "Allowed ip adresses for API" in the settings 