#############################
Backups / Restore
#############################

************************************************
What kind of backups are able to be restored 
************************************************

Currently HestiaCP only support the backup of:

#. HestiaCP
#. VestaCP

************************************************
How to increase the number of backups
************************************************

************************************************
What is the difference between zstd and gzip
************************************************

************************************************
What is the optimal compression ratio
************************************************

************************************************
What kind of protocols are currently supported
************************************************

Currently suported backup protocols are:

- FTP
- SFTP
- Backblaze / B2 Protocol

************************************************
How to setup a (S)FTP Backup server
************************************************

Login on a server as root and run following command

.. code-block:: bash

    v-add-backup-ftp-host remote.ftp-host.ltd backup-user p4ssw0rd [/path-backups/] [port]

For SFTP

.. code-block:: bash

    v-add-backup-sftp-host remote.ftp-host.ltd backup-user p4ssw0rd [/path-backups/] [port]
    
Arguments between brackets [] may be omitted

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
