# Packages

To manage packages, you will need to be logged in as an **administrator** and navigate to the **Users <i class="fas fa-fw fa-users"></i>** tab.

## Adding a new package

1. Click the **<i class="fas fa-fw fa-plus-circle"></i> Add Package** button.
2. Provide package name
3. Setup the package as you wish. When clicking on **<i class="fas fa-infinity"></i>** button the limits will be set to unlimited
4. Click on save

::: tip
  Some option might be not available depending on your setup!
:::

### General settings

#### Quota 
Total available storage space including the websites, email accounts, databases and the home folder. When you have enabled "File Quotas" during install this value enforcing the quota limit on websites, email accounts and the home folder. Mysql databases are excluded

#### Bandwidth
Allotted bandwidth to this account. Only outgoing traffic over web is accounted for. Only currently no methods like auto suspending is currently available for it. 

#### Backups
Number of backups a user can make

### Web domains

#### Web domains
Number of DNS domains a user can add.

#### Aliases
Number of aliases the user can add per domain

#### Proxy Template
Default proxy template the new domain get assigned

#### Web Template
Default wen template the new domain get assigned

### DNS

#### Dns Template
Default DNS template that get assigned on domain creation. 

#### Dns Domains 
Number of DNS domains a user can add.

#### Dns records 
Number of DNS records a user can add per domain

#### Name Servers
Default name servers to be used by the user. Up to 8 different name servers can be added. 

### Mail

#### Mail Domains 
Number of mail domains a user can add.

#### Mail accounts 
Number of DNS records a user can add per domain

#### Rate limit
Number email accounts that can be send by the user in a hour

### Databases

Number of databases the user can add 

### System

#### Cronjobs

Number of cronjobs a user can add

#### Shell access

Enable ssh access when set to nologin ssh access is disabled but sftp access is still allowed!

## Edit an package

To edit a package click on on the  **<i class="fas fa-pencil-alt"></i>** icon.

The system package can't be changed or renamed.


## Importing existing packages from a different server

Packages are stored in  `/usr/local/hestia/data/packages` as `package-name.pkg` 

You are able to copy the packages to the your server. 
