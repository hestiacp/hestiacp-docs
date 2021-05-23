##################################
Examples
##################################

************************************************
Create User Account
************************************************
.. tabs::
    .. code-tab:: php PHP
        
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

        // Send POST query via cURL
        $postdata = http_build_query($postvars);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://' . $hst_hostname . ':' . $hst_port . '/api/');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata);
        $answer = curl_exec($curl);

        // Check result
        if($answer === 0) {
            echo "User account has been successfuly created\n";
        } else {
            echo "Query returned error code: " .$answer. "\n";
        }
    .. code-tab:: js NodeJS
    
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
Create user (With API key)
************************************************

To create the api key run the following command first

.. code-block:: bash

    v-generate-api-key

.. tabs::
    .. code-tab:: php PHP
    
        <?php
    
        // Server credentials
        $hst_hostname = 'server.hestiacp.com';
        $hst_port = '8083';
        $hst_hash= 'APIKEYHEREAPIKEYHERE';
        $hst_returncode = 'yes';
        $hst_command = 'v-add-user';
    
        // New Account
        $username = 'demo';
        $password = 'd3m0p4ssw0rd';
        $email = 'demo@gmail.com';
        $package = 'default';
        $first_name = 'Rust Cohle';
    
        // Prepare POST query
        $postvars = array(
            'hash' => $hst_hash,
            'returncode' => $hst_returncode,
            'cmd' => $hst_command,
            'arg1' => $username,
            'arg2' => $password,
            'arg3' => $email,
            'arg4' => $package,
            'arg5' => $name,
        );
    
        // Send POST query via cURL
        $postdata = http_build_query($postvars);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://' . $hst_hostname . ':' . $hst_port . '/api/');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata);
        $answer = curl_exec($curl);
    
        // Check result
        if($answer === '0') {
            echo "User account has been successfuly created\n";
        } else {
            echo "Query returned error code: " .$answer. "\n";
        }
    .. code-tab:: js NodeJS
        
        //NodeJS Script
        //You must have the axios module installed
        const axios = require('axios')
        const querystring = require('querystring');
        
        //Admin Credentials
        const hst_hostname = 'server.hestiacp.com'
        const hst_port = 8083
        const hst_hash = 'APIKEYHEREAPIKEYHERE'
        const hst_returncode = 'yes'
        const hst_command = 'v-add-user'
        
        //New account details
        const username = 'demo';
        const password = 'd3m0p4ssw0rd';
        const email = 'demo@gmail.com';
        const package = 'default';
        const first_name = 'Rust Cohle';
        
        const data_json = {
        'hash': hst_hash,
        'returncode': hst_returncode,
        'cmd': hst_command,
        'arg1': username,
        'arg2': password,
        'arg3': email,
        'arg4': package,
        'arg5': first_name
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
    .. code-tab:: php PHP

        <?php

        // Server credentials
        $hst_hostname = 'server.hestiacp.com';
        $hst_port = '8083';
        $hst_username = 'admin';
        $hst_password = 'p4ssw0rd';
        $hst_returncode = 'yes';
        $hst_command = 'v-add-domain';

        // Domain details
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

        // Send POST query via cURL
        $postdata = http_build_query($postvars);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://' . $hst_hostname . ':' . $hst_port . '/api/');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata);
        $answer = curl_exec($curl);

        // Check result
        if($answer === 0) {
            echo "Domain has been successfuly created\n";
        } else {
            echo "Query returned error code: " .$answer. "\n";
        }
    .. code-tab:: js NodeJS

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
    .. code-tab:: php PHP

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
        if($answer === 0) {
            echo "Database has been successfuly created\n";
        } else {
            echo "Query returned error code: " .$answer. "\n";
        }
    .. code-tab:: js NodeJS

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
    .. code-tab:: php PHP

        <?php

        // Server credentials
        $hst_hostname = 'server.hestiacp.com';
        $hst_port = '8083';
        $hst_returncode = 'no';
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
            'arg3' => $format
        );

        // Send POST query via cURL
        $postdata = http_build_query($postvars);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://' . $hst_hostname . ':' . $hst_port . '/api/');
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
    .. code-tab:: js NodeJS

        //NodeJS Script
        //You must have the axios module installed
        const axios = require('axios')
        const querystring = require('querystring');

        //Admin Credentials
        const hst_hostname = 'server.hestiacp.com'
        const hst_port = 8083
        const hst_returncode = 'no'
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
    .. code-tab:: php PHP

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

        // Send POST query via cURL
        $postdata = http_build_query($postvars);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, 'https://' . $hst_hostname . ':' . $hst_port . '/api/');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata);
        $answer = curl_exec($curl);

        // Parse JSON output
        $data = json_decode($answer, true);

        // Check result
        if(is_numeric($answer) && $answer === '0') {
            echo "User account has been successfuly deleted\n";
        } else {
            echo "Query returned error code: " .$answer. "\n";
        }
    .. code-tab:: js NodeJS (User & Password)

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
    .. code-tab:: php PHP

        <?php
        $hostname = 'server.yourdomain.tld';
        $port = '8083';
        $hstadmin = 'admin';
        $hstadminpw = 'AdMin_pWd';
    
        $username = $_POST['username'];
        $password = $_POST['password'];
    
        $postvars = array(
            'user' => $hstadmin,
            'password' => $hstadminpw,
            'returncode' => 'no',
            'cmd' => 'v-check-user-password',
            'arg1' => $username,
            'arg2' => $password,
            );
    
        // Send POST query via cURL
        $postdata = http_build_query($postvars);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_HEADER, false);
        curl_setopt($curl, CURLOPT_URL, 'https://' . $hostname . ':' . $port . '/api/');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata);
        $answer = curl_exec($curl);
    
        //var_dump($answer);
        // Check result
        
        if($answer == 'OK') {
            echo "OK: User can login\n";
        } else {
            echo "Error: Username or password is incorrect\n";
        }
    
    
        ?>
    .. code-tab:: js NodeJS
    
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
