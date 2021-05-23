###############################
DNS Management / DNS server
###############################

************************************************
How to setup a DNS Cluster
************************************************

If you are looking for the options to minimize DNS-related downtime or the way to manage dns across all server you have, you might consider to set up dns cluster.

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
Can I seperate DNS accounts by users 
************************************************

Yes you can just supply the user varibale behind the command. 

.. code-block:: bash

    v-add-remote-dns-host slave.yourhost.com 8083 admin p4sw0rd useraccount

Or 

.. code-block:: bash   

v-add-remote-dns-host slave.yourhost.com 8083 api_key '' useraccount