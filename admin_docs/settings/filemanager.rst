###############################
File manager
###############################

***************************************************************
How can I enable / Disable the file manager
***************************************************************

By an new install the filemanager will be enabled by default

For updates please run the following command

.. code-block:: bash

    v-add-sys-filemanager
    
To disable the file manager please run 

.. code-block:: bash

    v-delete-sys-filemanager
    
***************************************************************
File Manager gives "Unknown Error" message 
***************************************************************

File Manager gives an error message "Unknown Errror" (Hestia 1.2.0). Fresh Install except for modifications to /etc/ssh/sshd_config

This seems to occur specifically when the line Subsystem sftp /usr/lib/openssh/sftp-server is removed or changed in /etc/ssh/sshd_config in such a way that the install script cannot update it to Subsystem sftp internal-sftp

Short answer:
add Subsystem sftp internal-sftp to /etc/ssh/sshd_config:

Long answer:
Refer to the install script ./install/hst-install-debian.sh for all the changes made to /etc/ssh/sshd_config. For Debian, the changes can be summarized as follows:

.. code-block:: bash
    
    # HestiaCP Changes to the default /etc/ssh/sshd_config in Debian 10 Buster 

    # Forced default yes
    PasswordAuthentication yes
    
    # Changed from default 2m to 1m
    LoginGraceTime 1m 
    
    # Changed from default /usr/lib/openssh/sftp-server to internal-sftp
    Subsystem sftp internal-sftp
    
    # Changed from default yes
    DebianBanner no
    
    
Returning all of the other parameters to their defaults and also changing to PasswordAuthentication no did not reproduce the error, thus it would seem to be isolated to the Subsystem sftp internal-sftp parameter.

****************************************************************
Changed SSH Port and now I can not use the file manager any more
****************************************************************

SSH port is loaded in a PHP Session.

Logout and Login will reset the Sessions