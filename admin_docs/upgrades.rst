#######################################
Upgrading Operating systems
#######################################

*********************************************************
General
*********************************************************

..note::

    Make sure to verify MariaDB is running on a supported version for the new operating system If that is not the case please update MariaDB version to a supported version!

Before you start with upgrading your operating system make sure to make a backup

After a backup has been made update Hestia / Operating system to the last supported version

.. code-block:: bash

    apt update && apt upgrade
    
Follow system instructions to upgrade your Operating system

When done make sure to check if the files in /etc/apt/sources.list.d are not hashed out. If so remove the hash and run apt update && apt upgrade again.

*********************************************************
Debian 10 Buster to Debian 11 Bullseye
*********************************************************

If you want to use sha512 Password encryption 

.. code-block:: bash

    sed -i "s/obscure yescrypt/obscure sha512/g" /etc/pam.d/common-password


If you have Exim4 installed

.. code-block:: bash

    rm -f /etc/exim4/exim4.conf.template 
    cp -f /usr/local/hestia/install/deb/exim/exim4.conf.4.94.template /etc/exim4/exim4.conf.template

If you have ProFTPD installed

Comment out line 29 in 

.. code-block:: bash
    
    /etc/profpd/prodtpd.conf 

https://github.com/hestiacp/hestiacp/blob/1ff8a4e5207aae1e241954a83b7e8070bcdca788/install/deb/proftpd/proftpd.conf#L29

*********************************************************
Debian 9 Stretch to Debian 10 Buster
*********************************************************

No issues have been found in the past

*********************************************************
Ubuntu 20.04 Focal to Ubuntu 22.04 Jammy
*********************************************************

..note::

    Verify that MariaDB is running at least 10.6. If not upgrade first to this version in your current operating system!
    After that comment out the line in /etc/apt/sources.list.d/mariadb.list and upgrade operating system

If you want to use sha512 Password encryption 

.. code-block:: bash

    sed -i "s/obscure yescrypt/obscure sha512/g" /etc/pam.d/common-password


If you have Exim4 installed

.. code-block:: bash

    rm -f /etc/exim4/exim4.conf.template 
    cp -f /usr/local/hestia/install/deb/exim/exim4.conf.4.94.template /etc/exim4/exim4.conf.template
    
If you use sieve

.. code-block:: bash

   # Exim4
   sed -i "s/\stransport = dovecot_virtual_delivery/ transport = local_delivery/" /etc/exim4/exim4.conf.template
   sed -i "s/dovecot_virtual_delivery:\n  driver = pipe\n  command = \/usr\/lib\/dovecot\/dovecot-lda -e -d \$local_part@\$domain -f \$sender_address -a \$original_local_part@\$original_domain\n  delivery_date_add\n  envelope_to_add\n  return_path_add\n  log_output = true\n  log_defer_output = true\n  user = \${extract{2}{:}{\${lookup{\$local_part}lsearch{\/etc\/exim4\/domains\/\${lookup{\$domain}dsearch{\/etc\/exim4\/domains\/}}\/passwd}}}}\n  group = mail\n  return_output\n//g" /etc/exim4/exim4.conf.template
        
If you have ProFTPD installed

Comment out line 29 in 

.. code-block:: bash
    
    /etc/profpd/prodtpd.conf 

https://github.com/hestiacp/hestiacp/blob/1ff8a4e5207aae1e241954a83b7e8070bcdca788/install/deb/proftpd/proftpd.conf#L29

*********************************************************
Ubuntu 18.04 Bionic to Ubuntu 20.04 Focal
*********************************************************

No issues have been found in the past

*********************************************************
Older versions
*********************************************************

We haven't tested a upgrade path from Ubuntu 16.04 to Ubuntu 20.04 or Debian 8 Jessy to Debian 10
