Developing/Contributing to Hestia Control Panel
================================================

Follow the current `guidelines <https://github.com/hestiacp/hestiacp/blob/main/CONTRIBUTING.md>`_

#####################
Checklist
#####################

Recommended:

- Existing previous Hestia installation (this will ensure everything is already installed)

####################
Compiling
####################

Go into the ``src`` folder and run of these commands.

.. note::
  For building hestia-nginx / hestia-php packages at least 2 GB memory is required! 

.. tabs:: 

    .. code-tab:: bash Compile and install

        ./hst_autocompile.sh --hestia --install '~localsrc'
        
        Compile Hestia + Hestia PHP / Hestia NGNIX and install
        
        ./hst_autocompile.sh --all --install '~localsrc'
        
    .. code-tab:: bash Compile but don't install

        ./hst_autocompile.sh --hestia --noinstall --keepbuild '~localsrc'
        
        Compile Hestia + Hestia PHP / Hestia NGNIX and install
        
        ./hst_autocompile.sh --all --noinstall --keepbuild '~localsrc'


##############################
Install Hestia from packages
##############################

.. code-block:: bash
    
    # Compile packages
    ./hst_autocompile.sh --all --noinstall --keepbuild '~localsrc'
    
    cd /install
    
    bash hst-install-{os}.sh --with-debs /tmp/hestiacp-src/deb/ 
    
Any option can be appended to the installer command. 

##############################
Update HestiaCP from Github
##############################

.. code-block:: bash
    
    v-update-sys-hestia-git username branch install
    
#############################
Automated testing
#############################

For automated testing we currently use Bats (Bash Automated Testing System)

Install
--------

.. code-block:: bash

    # Clone Hestia repo with testing submodules
    git clone --recurse-submodules https://github.com/hestiacp/hestiacp
    # Or on existing local repo with up to date master branch
    git submodule update --init --recursive
    
    # Install Bats 
    test/test_helper/bats-core/install.sh /usr/local
    
Run
------------------

.. warning::
    
    Do not run any testing script on an live server. It might cause issues or downtime!

.. code-block:: bash

    # Run Hestia tests
    test/test.bats
    