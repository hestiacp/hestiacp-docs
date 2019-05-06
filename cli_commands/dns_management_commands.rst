####################################
DNS subsystem management commands
####################################

**v-change-user-ns**
 
This function changes nameservers for specific user
        
**OPTIONS**

    user ns1 ns2 [ns3] [ns4] [ns5] [ns6] [ns7] [ns8]
    
    
  
**v-change-dns-record**


The function indented for changing  specified DNS record.


**OPTIONS**

  user domain id [priority] [restart]
      

**v-list-dns-records**


The function intended for getting and DNS domains records.


**OPTIONS**

  user domain [format] 
  
  
**v-insert-dns-records**

The function copies dns record to the domain configuration


**OPTIONS**

  user domain data_file [restart]
  
  
**v-suspend-remote-dns-host**


The function suspends  specified DNS server.


**OPTIONS**

  host
  
**v-get-dns-domain-value**


The function for getting a certain DNS domain parameter.


**OPTIONS**

 user domain key
 
   
**v-suspend-dns-domain**


The function suspends certain domain of user specified.


**OPTIONS**

  user domain [restart]
  
 
 
   
**v-unsuspend-dns-domains**


The function unsuspends all user's DNS domains.


**OPTIONS**

  user [restart]
