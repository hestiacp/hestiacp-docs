##################################
Rest Api
##################################

The Hestia WEB API is available to perform core functions of the Control Panel. We use it internally to synchronise DNS clusters, to integrate WHMCS billing system  The API can be used as well to create new user accounts, domains, databases or even to build an alternative web interface.

This reference provides php code samples demonstrating how you can seamlessly integrate API into your application or script. However you can use other languages to communicate with API.

With the release of Hestia 1.6.0 we have introduced a more advanced api system and it will allow "standard" users to use specific commands.

.. toctree::
  :maxdepth: 2
  :glob:
  
  api/rest_api.rst
  
************************************************
Unable to connect to the api
************************************************
   
With the release of 1.4 Hestia has decided it was needed to tighten the security. If you connect from a remote server to the api. You are required to enter the ip address into the white. If you need multiple ip addresses separate them with an enter.
   
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
API Key vs Password vs Access Key
************************************************
  
  ########
  Password 
  ########
   
  - Only to be used by de admin user   
  - Loose the posiblity to change your password unless you also update the locations
  - User is allowed to run all commands 
  
  ########
  API Key
  ########
  
  - Only to be used by the admin user
  - Allow the user to change the admin password
  - User is allowed to run all commands 
  
  ################
  Access keys 
  ################
  
  - Ability limited permissions that a user can do with an access key (For example v-pruge-nginx-cache only for 1 specific user)
  - Ability to disable login via other methods but still allow the use of api keys
  - Option to disable the use of access key by standaard users
  - Limited permissions that an access key can run. For example only DNS cluster command for sync-dns-cluster permissions
  
************************************************
How to setup Access key 
************************************************

Go to Edit user and "Access key" then click "Add Access key"

Fill the form and submit. If the software you are using already supports the hash format use ACCESS_KEY:SECRET_KEY

Please note safe the SECRET_KEY well you are not able to retrieve it.

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
 