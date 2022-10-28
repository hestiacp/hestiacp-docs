# Rest API

The Hestia WEB API is available to perform core functions of the Control
Panel. We use it internally to synchronise DNS clusters, to integrate
WHMCS billing system The API can be used as well to create new user
accounts, domains, databases or even to build an alternative web
interface.

This reference provides php code samples demonstrating how you can
seamlessly integrate API into your application or script. However you
can use other languages to communicate with API.

With the release of Hestia v1.6.0 we have introduced a more advanced api
system and it will allow "standard" users to use specific commands.

## Unable to connect to the api

With the release of 1.4 Hestia has decided it was needed to tighten the
security. If you connect from a remote server to the api. You are
required to enter the ip address into the white. If you need multiple ip
addresses separate them with an enter.

![Api settings](/images/api/api-1.png)

## Can I disable the api

Disable the api via the settings. The file will be deleted from the
server and all connections will get ignored. Please note some functions
may not work with the api disabled.

## API Key vs Password vs Access Key

Advantages Access key vs API key vs Password

### Password

- Only to be used by de admin user
- Loose the possibility to change your password unless you also update the locations
- User is allowed to run all commands

### API Key

- Only to be used by the admin user
- Allow the user to change the admin password
- User is allowed to run all commands

### Access keys

- Ability limited permissions that a user can do with an access key (For example v-pruge-nginx-cache only for 1 specific user)
- Ability to disable login via other methods but still allow the use of api keys
- Option to disable the use of access key by standard users
- Limited permissions that an access key can run. For example only DNS cluster command for sync-dns-cluster permissions

## Setup Access/Secret key authentication

Go to Edit user and "Access key" then click "Add Access key"

Fill the form and submit. If the software you are using already supports
the hash format use ACCESS_KEY:SECRET_KEY

Please note safe the SECRET_KEY well you are not able to retrieve it.

## Create a hash key 

::: warning
This method has been replace by Setup Access/Secret key authentication we do suggest to use the authentication method suggested above 
:::

Run in command line the command `v-generate-api-key`

## Return Codes

| Value                 | Name                    | Comment                                                      |
| --------------------- | ----------------------- | ------------------------------------------------------------ |
| 0                     | OK                      | Command has been successfuly performed                       |
| 1                     | E_ARGS                  | Not enough arguments provided                                |
| 2                     | E_INVALID               | Object or argument is not valid                              |
| 3                     | E_NOTEXIST              | Object doesn’t exist                                         |
| 4                     | E_EXISTS                | Object already exists                                        |
| 5                     | E_SUSPENDED             | Object is already suspended                                  |
| 6                     | E_UNSUSPENDED           | Object is already unsuspended                                |
| 7                     | E_INUSE                 | Object can’t be deleted because it is used by another object |
| 8                     | E_LIMIT                 | Object cannot be created because of hosting package limits   |
| 9                     | E_PASSWORD              | Wrong / Invalid password                                     |
| 10                    | E_FORBIDEN              | Object cannot be accessed by this user                       |
| 11                    | E_DISABLED              | Subsystem is disabled                                        |
| 12                    | E_PARSING               | configuration is broken                                      |
| 13                    | E_DISK                  | Not enough disk space to complete the action                 |
| 14                    | E_LA                    | Server is to busy to complete the action                     |
| 15                    | E_CONNECT               | Connection failed. Host is unreachable                       |
| 16                    | E_FTP                   | FTP server is not responding                                 |
| 17                    | E_DB                    | Database server is not responding                            |
| 18                    | E_RDD                   | RRDtool failed to update the database                        |
| 19                    | E_UPDATE                | Update operation failed                                      |
| 20                    | E_RESTART               | Service restart failed                                       |

