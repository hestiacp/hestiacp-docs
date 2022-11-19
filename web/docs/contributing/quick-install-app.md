# Quick install app

The most requested feature is to add support Softaculous. How ever due to the required use of Ioncube in hestia-php and against the use of closed software we voted against using it.

As a replacement we have developed "Quick install app"

## Creating new apps

- Make a new folder `Example` in `/usr/local/hestia/web/src/app/WebApp/Installers/`
- Create a file named: `ExampleSetup.php`

[An example can be found here](https://github.com/hestiacp/hestia-quick-install/blob/main/Example/ExampleSetup.php)

This will include the "Example" app in HestiaCP when you open the Quick install app.

## Info

Following settings are required to display the info on the Quick install app list 

- Name: Name of the Application
- Group: Currently not used but might add it in the future. Currently used: cms, ecommerce, framework
- Enabled: Default set to yes
- Version: x.x.x or latest
- Thumbnail: Include in the same folder. Currently max size is used is 300px by 300px

## Settings

### Form fields

Follow fields are available

- Checkboxes
- Input field
- Radio fields
- Select boxes

Please check existing apps for examples

### Database

Flag to enable / disable databases. If enabled 4 fields are added to allow the user to specify a database user, database and password and a check box if a new database need to be created

### Downloading an app 

Currently the following methods are supported:

- Download a archive from a website
- Via [Composer](https://getcomposer.org)
- Via [Wordpress CLI](https://wp-cli.org)



### Server settings

As certain apps have certain requirements. For example certain apps require a specific template in Nginx or do only run on PHP8.0 or higher. 

- Nginx: Template used for Nginx + PHP-FPM setup
- Apache2: Template used for Apache2 setup can be usally be omitted.
- PHP version: Array of all supported php versions

## Installing the web application

There are multiple ways to download the web app after it is has been downloaded

- Manipulation of config files
- Run commands for example drush to install [Drupal](https://github.com/hestiacp/hestiacp/blob/88598deb49cec6a39be4682beb8e9b8720d59c7b/web/src/app/WebApp/Installers/Drupal/DrupalSetup.php#L56-L65)
- Curl 

Also make sure to prevent any issues in the future that all commands are executed as the user. Instead the root user or admin user. All the commands that are supplied by HestiaCP do this by default.

Please be aware that the naming of your WebApp should follow the following regex: `[a-zA-Z][a-zA-Z0,9]` otherwise it will not register as a working app!

## Sharing

If you are done you can submit [a Pull Request](https://github.com/hestiacp/hestiacp/pulls) to HestiaCP and we will review the code and if it meeds our standaards we will include in the the next release.

## More information

More information can be found in the [hestia-quick-install repo](https://github.com/hestiacp/hestia-quick-install/blob/main/Example/ExampleSetup.php)
