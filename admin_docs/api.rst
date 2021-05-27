##################################
Rest Api
##################################

The Hestia WEB API is available to perform core functions of the Control Panel. We use it internaly to synchronyze DNS clusters, to integrate WHMCS billing system  The API can be used as well to create new user accounts, domains, databases or even to build an alternative web interface.

This reference provides php code samples demonstrating how you can seamlessly integrate API into your application or script. However you can use other languages to communicate with API.

.. toctree::
  :maxdepth: 2
  :glob:
  
  api/rest_api.rst
  
************************************************
Unable to connect to the api
************************************************
   
With the release of 1.4 Hestia has decided it was needed to tighten the security. If you connect from a remote server to the api. You are required to enter the ip address into the white. By default 127.0.0.1 is always allowed. If you need multiple ip addresses separate them with an enter.
   
.. image:: ../images/api/api-1.png
    :width: 600px
    :align: center
    :height: 376px
    :alt: Api settings
    
************************************************
Can I disable the api
************************************************
   
Disable the api via the settings. The file will be deleted from the server and all connections will get ignored. Please note some functions may not work without the api enabled.
     
************************************************
Return Codes
************************************************

.. list-table::
   :header-rows: 1

   *  - VALUE
      - NAME
      - COMMENT
   *  - 0
      - OK
      - Command has been successfuly performed
   *  - 1
      - E_ARGS
      - Not enough arguments provided
   *  - 2
      - E_INVALID
      - Object or atgument is not valid
   *  - 3
      - E_NOTEXIST
      - Object doesn't exist
   *  - 4
      - E_EXISTS
      - Object already exists
   *  - 5
      - E_SUSPENDED
      - Object already exists
   *  - 6
      - E_UNSUSPENDED
      - Object is already unsuspended
   *  - 7
      - E_INUSE
      - Object can't be deleted because it is used by another object
   *  - 8
      - E_LIMIT
      - Object cannot be created because of hosting package limits
   *  - 9
      - E_PASSWORD
      - Wrong password
   *  - 10
      - E_FORBIDEN
      - Object cannot be accessed by this user
   *  - 11
      - E_DISABLED
      - Subsystem is disabled
   *  - 12
      - E_PARSING
      - Configuration is broken
   *  - 13
      - E_DISK
      - Not enough disk space to complete the action
   *  - 14
      - E_LA
      - Server is to busy to complete the action
   *  - 15
      - E_CONNECT
      - Connection failed. Host is unreachable
   *  - 16
      - E_FTP
      - FTP server is not responding
   *  - 17
      - E_DB
      - Database server is not responding
   *  - 18
      - E_RRD
      - RRDtool failed to update the database
   *  - 19
      - E_UPDATE
      - Update operation failed
   *  - 20
      - E_RESTART
      - Service restart failed
 