***************************************************************
How to change default backup folder
***************************************************************

Due to security reasons, symlinks are not allowed. To change the default backup folder, you can do the following:

1. Make sure backup folder to set to /backup/
2. If it ever had something in it, delete and recreate it, using your FTP client or by typing "mkdir backup" in console. 
3. Mount desired folder to backup, using mount:

.. code-block:: bash

    mount --bind /path/to/new/backup/folder /backup
    
For a permanent fix  you should add a record to fstab, so this folder would load on your system boot:

1. Open /etc/fstab
2. Add the following line to the end:

.. code-block:: bash

    /path/to/new/backup/folder /backup none defaults,bind 0 0
    
3. Save the file.
