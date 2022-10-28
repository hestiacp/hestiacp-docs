# Backups

To manage your backups, you will need to navigate to the **Backups <i class="fas fa-fw fa-file-archive"></i>** tab.

## Manually creating a backup

Click the **<i class="fas fa-fw fa-plus-circle"></i> Create backup** button.

A popup will be show with the message:

`Task has been added to the queue. You will receive an email notification when your backup is ready for download.`

## Downloading a backup

Click on the **<i class="fas fa-file-download"></i>** button. When the backup is stored on a remote server. The file is first downloaded to the server locally and you will get notified by email when the download is avaible

## Restoring a backup

Click on the **<i class="fas fa-undo"></i>** icon or on the backup file name. 

A page will show up with the options to restore only some parts for example only one web domain. 

## Deleting a backup

 Click on the **<i class="fas fa-trash"></i>**

## Excluding files from backups

Click on the **<i class="fas fa-folder-minus"></i>** Backup Exclusion** button and then click on the **<i class="fas fa-pencil-alt"></i> Edit backup exclusions**

### Exclude a domain

Enter in "Web Domains" the domain your want to exclude.  For example:
`hestiacp.xyz`

If you want to excude a folder from a specific domain:

`hestiacp.xyz:public_html/wp-content/uploads:public_html/cache`

This will excude both: /public_html/wp-content/uploads/ and public_html/cache/ folder from that domain

If you want to exclude all domains use the `*`

### Exclude a mail domain

If you want to exclude 1 domain use: 
`hestiacp.xyz`

If you want to exclude only one or multiple mail account use: `hestiacp.xyz:info:support`

This will excude both `info@hestiacp.com` and `support@hestiacp.com`

### Exclude a database

Type full database name, one per line. To exclude all databases use *

### Exclude an user directory

Type directory name, one per line. To exlude all dirs use *

## How to increase the number of backups

1.  Log into HestiaCP as admin user
2.  Click on "Packages" button
3.  On the displayed list, hover the mouse pointer above the "default" package and click on the "Copy" button
4.  A "default-copy" package will be created. Hover the mouse pointer above the newly created package and click on the "Edit Package" button
5.  On the "Package Name" field, type the name you whish to give to the new package, and then in the "Backups" field type the number of backups you would like to set, then click on the "Save" button
6.  Click on the "USERS" menu
7.  Now hover the mouse pointer above the user to which you would like to assign the newly created package, and then click on "Edit User" button
8.  In the "Package" field select with the drop-down menu the name of the newly created package and finally click on the "Save" button.
