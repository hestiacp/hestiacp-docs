# API

## Examples

Examples can be found on a seperate [repo](https://github.com/hestiacp/hestiacp-api-examples)

## Upgrading from username / password authentication

Replace then following code:
```
// Prepare POST query
$postvars = array(
    'user' => $hst_username,
    'password' => $hst_password,
    'returncode' => $hst_returncode,
    'cmd' => $hst_command,
    'arg1' => $username
);
```

With 

```
// Prepare POST query
$postvars = array(
    'hash' => "access_code:secret_code",
    'returncode' => $hst_returncode,
    'cmd' => $hst_command,
    'arg1' => $username
);
```
