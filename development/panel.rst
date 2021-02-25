Developing/Contributing to Hestia Control Panel
================================================
.. note::
  This documentation has been community-written.

Folllow the currrent `guidelines <https://github.com/hestiacp/hestiacp/blob/main/CONTRIBUTING.md>`_

########
Checklist
########

Recommended:

- Exisiting previous Hestia installation (this will ensure everything is already installed)

Compiling
---------
Go into the ``src`` folder and run of these commands

.. tabs:: 

    .. code-tab:: c
        Compile and install

        ./hst_autocompile.sh --hestia --install '~localsrc'
    .. code-tab:: c 
        Compile but don't install

        ./hst_autocompile.sh --hestia --noinstall --keepbuild '~localsrc'