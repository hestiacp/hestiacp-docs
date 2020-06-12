###############################
User management 
###############################

************************************************
How to restore a user?
************************************************

The current restore function should accept both VestaCP and HestiaCP generated backups

#. Make user backup on the old server. In this example we will use admin as the reference.

.. code-block:: bash

    v-backup-user username

#. Copy tarball to the new server and place it in the /backup directory

.. code-block:: bash

    scp /home/backup/username.2020.01.01-00-00.tar new-server:/home/backup/

#. Restore backup on the new server

.. code-block:: bash

   v-restore-user username username.2020.01.01-00-00.tar
   
Want to restore a different user?

Use

.. code-block:: bash

   v-restore-user newusername username.2020.01.01-00-00.tar
   