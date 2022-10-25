# Quick install app

The most requested feature is to add support Softaculous. How ever due to the required use of Ioncube in hestia-php and against the use of closed software we voted against using it.

As a replacement we have developed "Quick install app"

## Creating new apps

- Make a new folder `Example` in `//usr/local/hestia/web/src/app/WebApp/Installers/`
- Create a file named: `ExampleSetup.php`

```php
<?php

namespace Hestia\WebApp\Installers\Example;

use Hestia\System\Util;
use \Hestia\WebApp\Installers\BaseSetup as BaseSetup;

class ExampleSetup extends BaseSetup {

    protected $appInfo = [ 
        'name' => 'Example',
        'group' => 'cms',
        //keep always set to enabled. When PHP version isn't supported it will change it to no and disable it
        'enabled' => true,
        'version' => 'latest',
        'thumbnail' => 'example.png' //Max size is 300px by 300px 
    ];
    
    protected $appname = 'example';
    protected $config = [
        'form' => [
            //Note at least one input field is currently required
            'protocol' => [ 
                'type' => 'select',
                'options' => ['http','https'],
                'value' => 'https'
            ],
            'site_name' => ['type'=>'text', 'value'=>'Demo'],
            'username' => ['value'=>'Username'],
            'email' => 'text',
            'password' => 'password',
            ],
        'database' => true, 
        'resources' => [
            'archive'  => [ 'src' => 'https://download.example.com/example.version.tar.gz' ],
        ], 
        'server' => [
            'nginx' => [
                'template' => 'wordpress',
            ],
            'apache2' => [
                'template' => 'example',
            ],
            'php' => [
                'supported' => [ '7.4','8.0','8.1' ],
            ],
        ],
    ];
    
    public function install(array $options = null)
    {
            return ($status === 0);
    }
}
// When done upload the folder to /usr/local/hestia/web/src/app/WebApp/Installers
```

This will include the "Example" app in HestiaCP when you open the Quick install app.

## Code example

Example class can be found on [Example class](https://github.com/hestiacp/hestia-quick-install)

## Downloading an app 

Currently the following methods are supported:

- Download a archive from a website
- Via [Composer](https://getcomposer.org)
- Via [Wordpress CLI](https://wp-cli.org)

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

### Installing the web application

There are multiple ways to download the web app after it is has been downloaded

- Manipulation of config files
- Run commands for example drush to install [Drupal](https://github.com/hestiacp/hestiacp/blob/88598deb49cec6a39be4682beb8e9b8720d59c7b/web/src/app/WebApp/Installers/Drupal/DrupalSetup.php#L56-L65)
- Curl 

Also make sure to prevent any issues in the future that all commands are executed as the user. Instead the root user or admin user. All the commands that are supplied by HestiaCP do this by default.

Please be aware that the naming of your WebApp should follow the following regex: `[a-zA-Z][a-zA-Z0,9]` otherwise it will not register as a working app!

## Example

Example class can be found on [Example class](https://github.com/hestiacp/hestia-quick-install)

## Sharing

If you are done you can submit [a Pull Request](https://github.com/hestiacp/hestiacp/pulls) to HestiaCP and we will review the code and if it meeds our standaards we will include in the the next release.
