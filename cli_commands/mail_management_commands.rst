####################################
Mail subsystem management commands
####################################

****************************************
v-add-mail-account
****************************************

**Parameters**: User Domain Account Password [QUOTA]

**Example usage**: `v-add-mail-account john example.com john P4$$vvOrD`

****************************************
v-add-mail-account-alias
****************************************

**Parameters**: User Domain Account Alias

**Example usage**: `v-add-mail-account-alias admin acme.com alice alicia`

****************************************
v-add-mail-account-autoreply
****************************************

**Parameters**: User Domain Account Message

**Example usage**: `v-add-mail-account-autreply admin example.com user Hello from e-mail!`

****************************************
v-add-mail-account-forward
****************************************

**Parameters**: User Domain Account Forward

**Example usage**: `v-add-mail-account-forward admin acme.com alice bob`

****************************************
v-add-mail-account-fwd-only
****************************************

**Parameters**: User Domain Account

**Example usage**: `v-add-mail-account-fwd-only admin example.com user`

****************************************
v-add-mail-domain
****************************************

**Parameters**: User Domain [ANTISPAM] [ANTIVIRUS] [DKIM] [DKIM_SIZE]

**Example usage**: `v-add-mail-domain admin mydomain.tld`

****************************************
v-add-mail-domain-antispam
****************************************

**Parameters**: User Domain

**Example usage**: `v-add-mail-domain-antispam admin mydomain.tld`

****************************************
v-add-mail-domain-antivirus
****************************************

**Parameters**: User Domain

**Example usage**: `v-add-mail-domain-antivirus admin mydomain.tld`


****************************************
v-add-mail-domain-catchall
****************************************

**Parameters**: User Domain Email

**Example usage**: `v-add-mail-domain-catchall admin example.com master@example.com`

****************************************
v-add-mail-domain-dkim
****************************************

**Parameters**: User Domain [DKIM_SIZE]

**Example usage**: `v-add-mail-domain-dkim admin acme.com`

****************************************
v-change-mail-account-password
****************************************

**Parameters**: User Domain Account Password

**Example usage**: `v-change-mail-account-password admin mydomain.tld user p4$$vvOrD`

****************************************
v-change-mail-account-quota
****************************************

**Parameters**: User Domain Account Quota

**Example usage**: `v-change-mail-account-quota admin mydomain.tld user01 unlimited`

****************************************
v-change-mail-domain-catchall
****************************************

**Parameters**: User Domain Email

**Example usage**: `v-change-mail-domain-catchall user01 mydomain.tld master@mydomain.tld`

****************************************
v-delete-mail-account
****************************************

**Parameters**: User Domain Account

**Example usage**: `v-delete-mail-account admin acme.com alice`


****************************************
v-delete-mail-account-alias
****************************************

**Parameters**: User Domain Account Alias

**Example usage**: `v-delete-mail-account-alias admin example.com alice alicia`

****************************************
v-delete-mail-account-autoreply
****************************************


**Parameters**: User Domain Account


**Example usage**: `v-delete-mail-account-autoreply admin mydomain.tld bob`

****************************************
v-delete-mail-account-forward
****************************************

**Parameters**: User Domain Account Forward

**Example usage**: `v-delete-mail-account-forward admin acme.com tony bob@acme.com`


****************************************
v-delete-mail-account-fwd-only
****************************************

**Parameters**: User Domain Account

**Example usage**: `v-delete-mail-accont-fwd-only admin example.com jack`

****************************************
v-delete-mail-domain
****************************************

**Parameters**: User Domain

**Example usage**: `v-delete-mail-domain admin mydomain.tld`

****************************************
v-delete-mail-domain-antispam
****************************************

**Parameters**: User Domain

**Example usage**: `v-delete-mail-domain-antispam admin mydomain.tld`


****************************************
v-delete-mail-domain-antivirus
****************************************

**Parameters**: User Domain

**Example usage**: `v-delete-mail-domain-antivirus admin mydomain.tld`

****************************************
v-delete-mail-domain-catchall
****************************************

**Parameters**: User Domain

**Example usage**: `v-delete-mail-domain-catchall admin mydomain.tld`

****************************************
v-delete-mail-domain-dkim
****************************************

**Parameters**: User Domain

**Example usage**: `v-delete-mail-domain-dkim admin mydomain.tld`


****************************************
v-delete-mail-domains
****************************************

**Parameters**: User

**Example usage**: `v-delete-mail-domains admin`

****************************************
v-get-mail-account-value
****************************************

**Parameters**: User Domain Key

**Example usage**: `v-get-mail-account-value admin example.tld tester QUOTA`


****************************************
v-get-mail-domain-value
****************************************

**Parameters**: User Domain Key

**Example usage**: `v-get-mail-domain-value admin example.com DKIM`

****************************************
v-list-mail-account
****************************************

**Parameters**: User Domain Account [FORMAT]

**Example usage**: `v-list-mail-account admin domain.tld tester`


****************************************
v-list-mail-account-autoreply
****************************************

**Parameters**: User Domain Account [FORMAT]

**Example usage**: `v-list-mail-account-autoreply admin example.com testing`

****************************************
v-list-mail-accounts
****************************************

**Parameters**: User Domain [FORMAT]

**Example usage**: `v-list-mail-accounts admin acme.com`

****************************************
v-list-mail-domain
****************************************

**Parameters**: User Domain [FORMAT]

**Example usage**: `v-list-mail-domain user01 mydomain.com`

****************************************
v-list-mail-domain-dkim
****************************************

**Parameters**: User Domain [FORMAT]

**Example usage**: `v-list-mail-domain-dkim admin maildomain.tld`

****************************************
v-list-mail-domain-dkim-dns
****************************************

**Parameters**: User Domain [FORMAT]

**Example usage**: `v-list-mail-domain-dkim-dns admin example.com`

****************************************
v-list-mail-domains
****************************************

**Parameters**: User [FORMAT]

**Example usage**: `v-list-mail-domains admin`

****************************************
v-list-sys-mail-status
****************************************

**Parameters**:None

**Example usage**: `v-list-sys-mail-status`

****************************************
v-rebuild-mail-domains
****************************************

**Parameters**: User

**Example usage**: `v-rebuild-mail-domains admin`

****************************************
v-restart-mail
****************************************
**Parameters**:None

**Example usage**: `v-restart-mail`

****************************************
v-suspend-mail-account
****************************************

**Parameters**: User Domain Account

**Example usage**: `v-suspend-mail-account admin acme.com bob`

****************************************
v-suspend-mail-accounts
****************************************

**Parameters**: User Domain

**Example usage**: `v-suspend-mail-accounts admin example.com`

****************************************
v-suspend-mail-domain
****************************************

**Parameters**: User Domain

**Example usage**: `v-suspend-mail-domain admin domain.com`


****************************************
v-suspend-mail-domains
****************************************

**Parameters**: User

**Example usage**: `v-suspend-mail-domains admin`

****************************************
v-unsuspend-mail-account
****************************************

**Parameters**: User Domain Account

**Example usage**: `v-suspend-mail-account admin acme.com tester`

****************************************
v-unsuspend-mail-accounts
****************************************

**Parameters**: User Domain

**Example usage**: `v-unsuspend-mail-accounts admin acme.com`

****************************************
v-unsuspend-mail-domain
****************************************

**Parameters**: User Domain

**Example usage**: `v-unsuspend-mail-domain user02 acme.com`

****************************************
v-unsuspend-mail-domains
****************************************

**Parameters**: User

**Example usage**: `v-unsuspend-mail-domains admin`

****************************************
v-update-mail-domain-disk
****************************************

**Parameters**: User Domain

**Example usage**: `v-update-mail-domain-disk admin example.com`

****************************************
v-update-mail-domains-disk
****************************************

**Parameters**: User

**Example usage**: `v-update-mail-domains-disk admin`
