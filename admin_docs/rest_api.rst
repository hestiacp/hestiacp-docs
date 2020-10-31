##################################
REST API
##################################

The Hestia WEB API is available to perform core functions of the Control Panel. We use it internaly to synchronyze DNS clusters, to integrate WHMC billing system and to reset mail account passwords in Roundcube. The API can be used as well to create new user accounts, domains, databases or even to build an alternative web interface.

This reference provides php code samples demonstrating how you can seamlessly integrate API into your application or script. However you can use other languages to commmunicate with API.


************************************************
Create User Account
************************************************
.. tabs::
    .. code-tab:: php

        <?php

        // Server credentials
        $hst_hostname = 'server.hestiacp.com';
        $hst_port = '8083';
        $hst_username = 'admin';
        $hst_password = 'p4ssw0rd';
        $hst_returncode = 'yes';
        $hst_command = 'v-add-user';

        // New Account
        $username = 'demo';
        $password = 'd3m0p4ssw0rd';
        $email = 'demo@gmail.com';
        $package = 'default';
        $first_name = 'Rust';
        $last_name = 'Cohle';

        // Prepare POST query
        $postvars = array(
            'user' => $hst_username,
            'password' => $hst_password,
            'returncode' => $hst_returncode,
            'cmd' => $hst_command,
            'arg1' => $username,
            'arg2' => $password,
            'arg3' => $email,
            'arg4' => $package,
            'arg5' => $first_name,
            'arg6' => $last_name
        );
        $postdata = http_build_query($postvars);

        // Send POST query via cURL
        $postdata = http_build_query($postvars);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://' . $hst_hostname . ': ' . $hst_port . '/api/');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata);
        $answer = curl_exec($curl);

        // Check result
        if($answer == 0) {
            echo "User account has been successfuly created\n";
        } else {
            echo "Query returned error code: " .$answer. "\n";
        }
    .. code-tab:: js
    
        //NodeJS Script
        //You must have the axios module installed
        const axios = require('axios')
        const querystring = require('querystring');

        //Admin Credentials
        const hst_hostname = 'server.hestiacp.com'
        const hst_port = 8083
        const hst_username = 'admin'
        const hst_password = 'p4ssw0rd'
        const hst_returncode = 'yes'
        const hst_command = 'v-add-user'

        //New account details
        const username = 'demo';
        const password = 'd3m0p4ssw0rd';
        const email = 'demo@gmail.com';
        const package = 'default';
        const first_name = 'Rust';
        const last_name = 'Cohle';

        const data_json = {
        'user': hst_username,
        'password': hst_password,
        'returncode': hst_returncode,
        'cmd': hst_command,
        'arg1': username,
        'arg2': password,
        'arg3': email,
        'arg4': package,
        'arg5': first_name,
        'arg6': last_name
        }

        const data = querystring.stringify(data_json)

        axios.post('https://'+hst_hostname+':'+hst_port+'/api/', data)
        .then(function (response) {
            console.log(response.data);
            console.log("0 means successful")
        })
        .catch(function (error) {
            console.log(error);
        });

************************************************
Add Web/DNS/Mail Domain
************************************************
.. tabs::
    .. code-tab:: php

        <?php

        // Server credentials
        $hst_hostname = 'server.hestiacp.com';
        $hst_port = '8083';
        $hst_username = 'admin';
        $hst_password = 'p4ssw0rd';
        $hst_returncode = 'yes';
        $hst_command = 'v-add-domain';

        // New Account
        $username = 'demo';
        $domain = 'demo.hestiacp.com';

        // Prepare POST query
        $postvars = array(
            'user' => $hst_username,
            'password' => $hst_password,
            'returncode' => $hst_returncode,
            'cmd' => $hst_command,
            'arg1' => $username,
            'arg2' => $domain
        );
        $postdata = http_build_query($postvars);

        // Send POST query via cURL
        $postdata = http_build_query($postvars);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://' . $hst_hostname . ': ' . $hst_port . '/api/');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata);
        $answer = curl_exec($curl);

        // Check result
        if($answer == 0) {
            echo "Domain has been successfuly created\n";
        } else {
            echo "Query returned error code: " .$answer. "\n";
        }
    .. code-tab:: js

        //NodeJS Script
        //You must have the axios module installed
        const axios = require('axios')
        const querystring = require('querystring');

        //Admin Credentials
        const hst_hostname = 'server.hestiacp.com'
        const hst_port = 8083
        const hst_username = 'admin'
        const hst_password = 'p4ssw0rd'
        const hst_returncode = 'yes'
        const hst_command = 'v-add-domain'

        //Domain details
        const username = 'demo'; //username to associate the domain
        const domain = 'domain.tld'; //domain

        const data_json = {
        'user': hst_username,
        'password': hst_password,
        'returncode': hst_returncode,
        'cmd': hst_command,
        'arg1': username,
        'arg2': domain
        }

        const data = querystring.stringify(data_json)

        axios.post('https://'+hst_hostname+':'+hst_port+'/api/', data)
        .then(function (response) {
            console.log(response.data);
            console.log("0 means successful")
        })
        .catch(function (error) {
            console.log(error);
        });


************************************************
Create Database
************************************************
.. tabs::
    .. code-tab:: php

        <?php

        // Server credentials
        $hst_hostname = 'server.hestiacp.com';
        $hst_port = '8083';
        $hst_username = 'admin';
        $hst_password = 'p4ssw0rd';
        $hst_returncode = 'yes';
        $hst_command = 'v-add-database';

        // New Database
        $username = 'demo';
        $db_name = 'wordpress';
        $db_user = 'wordpress';
        $db_pass = 'wpbl0gp4s';

        // Prepare POST query
        $postvars = array(
            'user' => $hst_username,
            'password' => $hst_password,
            'returncode' => $hst_returncode,
            'cmd' => $hst_command,
            'arg1' => $username,
            'arg2' => $db_name,
            'arg3' => $db_user,
            'arg4' => $db_pass
        );
        $postdata = http_build_query($postvars);

        // Send POST query via cURL
        $postdata = http_build_query($postvars);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://' . $hst_hostname . ': ' . $hst_port . '/api/');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata);
        $answer = curl_exec($curl);

        // Check result
        if($answer == 0) {
            echo "Database has been successfuly created\n";
        } else {
            echo "Query returned error code: " .$answer. "\n";
        }
    .. code-tab:: js

        //NodeJS Script
        //You must have the axios module installed
        const axios = require('axios')
        const querystring = require('querystring');

        //Admin Credentials
        const hst_hostname = 'server.hestiacp.com'
        const hst_port = 8083
        const hst_username = 'admin'
        const hst_password = 'p4ssw0rd'
        const hst_returncode = 'yes'
        const hst_command = 'v-add-databse'

        //Domain details
        const username = 'demo'
        const db_name = 'wordpress'
        const db_user = 'wordpress'
        const db_pass = 'wpbl0gp4s'

        const data_json = {
        'user': hst_username,
        'password': hst_password,
        'returncode': hst_returncode,
        'cmd': hst_command,
        'arg1': username,
        'arg2': db_name,
        'arg3': db_user,
        'arg4': db_pass
        }

        const data = querystring.stringify(data_json)

        axios.post('https://'+hst_hostname+':'+hst_port+'/api/', data)
        .then(function (response) {
            console.log(response.data);
            console.log("0 means successful")
        })
        .catch(function (error) {
            console.log(error);
        });

************************************************
List Web Domains
************************************************
.. tabs::
    .. code-tab:: php

        <?php

        // Server credentials
        $hst_hostname = 'server.hestiacp.com';
        $hst_port = '8083';
        $hst_username = 'admin';
        $hst_password = 'p4ssw0rd';
        $hst_command = 'v-list-web-domain';

        // Account
        $username = 'demo';
        $domain = 'demo.hestiacp.com';
        $format = 'json';

        // Prepare POST query
        $postvars = array(
            'user' => $hst_username,
            'password' => $hst_password,
            'returncode' => $hst_returncode,
            'cmd' => $hst_command,
            'arg1' => $username,
            'arg2' => $domain,
            'ar32' => $format
        );
        $postdata = http_build_query($postvars);

        // Send POST query via cURL
        $postdata = http_build_query($postvars);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://' . $hst_hostname . ': ' . $hst_port . '/api/');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata);
        $answer = curl_exec($curl);

        // Parse JSON output
        $data = json_decode($answer, true);

        // Print result
        print_r($data);
    .. code-tab:: js

        //NodeJS Script
        //You must have the axios module installed
        const axios = require('axios')
        const querystring = require('querystring');

        //Admin Credentials
        const hst_hostname = 'server.hestiacp.com'
        const hst_port = 8083
        const hst_username = 'admin'
        const hst_password = 'p4ssw0rd'
        const hst_command = 'v-list-web-domain'

        //Domain details
        const username = 'demo';
        const domain = 'demo.hestiacp.com';
        const format = 'json';

        const data_json = {
        'user': hst_username,
        'password': hst_password,
        'returncode': hst_returncode,
        'cmd': hst_command,
        'arg1': username,
        'arg2': domain,
        'arg3': format
        }

        const data = querystring.stringify(data_json)

        axios.post('https://'+hst_hostname+':'+hst_port+'/api/', data)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            
        })
        .catch(function (error) {
            console.log(error);
        });

************************************************
Delete User Account
************************************************
.. tabs::
    .. code-tab:: php

        <?php

        // Server credentials
        $hst_hostname = 'server.hestiacp.com';
        $hst_port = '8083';
        $hst_username = 'admin';
        $hst_password = 'p4ssw0rd';
        $hst_returncode = 'yes';
        $hst_command = 'v-delete-user';

        // Account
        $username = 'demo';

        // Prepare POST query
        $postvars = array(
            'user' => $hst_username,
            'password' => $hst_password,
            'returncode' => $hst_returncode,
            'cmd' => $hst_command,
            'arg1' => $username
        );
        $postdata = http_build_query($postvars);

        // Send POST query via cURL
        $postdata = http_build_query($postvars);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://' . $hst_hostname . ': ' . $hst_port . '/api/');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata);
        $answer = curl_exec($curl);

        // Parse JSON output
        $data = json_decode($answer, true);

        // Check result
        if($answer == 0) {
            echo "User account has been successfuly deleted\n";
        } else {
            echo "Query returned error code: " .$answer. "\n";
        }
    .. code-tab:: js

        //NodeJS Script
        //You must have the axios module installed
        const axios = require('axios')
        const querystring = require('querystring')
        //Admin Credentials
        const hst_hostname = 'server.hestiacp.com'
        const hst_port = 8083
        const hst_username = 'admin'
        const hst_password = 'p4ssw0rd'
        const hst_returncode = 'yes'
        const hst_command = 'v-delete-user'

        //Account
        const username = 'demo'; 

        const data_json = {
        'user': hst_username,
        'password': hst_password,
        'returncode': hst_returncode,
        'cmd': hst_command,
        'arg1': username
        }

        const data = querystring.stringify(data_json)

        axios.post('https://'+hst_hostname+':'+hst_port+'/api/', data)
            .then(function (response) {
                console.log(response.data);
                console.log("0 means successful")
            })
            .catch(function (error) {
                console.log(error);
            });

************************************************
Check Username and Password
************************************************
.. tabs::
    .. code-tab:: php

        <?php

        // Server credentials
        $hst_hostname = 'server.hestiacp.com';
        $hst_port = '8083';
        $hst_username = 'admin';
        $hst_password = 'p4ssw0rd';
        $hst_returncode = 'yes';
        $hst_command = 'v-check-user-password';

        // Account
        $username = 'demo';
        $password = 'demopassword';

        // Prepare POST query
        $postvars = array(
            'user' => $hst_username,
            'password' => $hst_password,
            'returncode' => $hst_returncode,
            'cmd' => $hst_command,
            'arg1' => $username,
            'arg2' => $password
        );
        $postdata = http_build_query($postvars);

        // Send POST query via cURL
        $postdata = http_build_query($postvars);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://' . $hst_hostname . ': ' . $hst_port . '/api/');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata);
        $answer = curl_exec($curl);

        // Parse JSON output
        $data = json_decode($answer, true);

        // Check result
        if($answer == 0) {
            echo "OK: User can login\n";
        } else {
            echo "Error: Username or password is incorrect\n";
        }
    .. code-tab:: js
    
        //NodeJS Script
        //You must have the axios module installed
        const axios = require('axios')
        const querystring = require('querystring')
        //Admin Credentials
        const hst_hostname = 'server.hestiacp.com'
        const hst_port = 8083
        const hst_username = 'admin'
        const hst_password = 'p4ssw0rd'
        const hst_returncode = 'yes'
        const hst_command = 'v-check-user-password'

        //Account details
        const username = 'demo'; 
        const password = 'demopassword'; 

        const data_json = {
        'user': hst_username,
        'password': hst_password,
        'returncode': hst_returncode,
        'cmd': hst_command,
        'arg1': username,
        'arg2': password
        }

        const data = querystring.stringify(data_json)

        axios.post('https://'+hst_hostname+':'+hst_port+'/api/', data)
            .then(function (response) {
                console.log(response.data);
                console.log("0 means successful")
            })
            .catch(function (error) {
                console.log(error);
            });

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

