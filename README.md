#   BACKEND SERVER FOR SMART INDIA HACKATHON - 2019

### LIST AND INFORMATION OF ALL USERS
GET : `/users`  
Get Details of all the Users

### LOGIN 
POST : `/login`  
Login. Requires 'email' and 'password'. Returns a TOKEN


## TOKEN SPECIFIC   


### REGISTER
POST : `/register`  
Register. Requires 'email', 'password', 'phone_number'.  
[NEED ADMIN PERMISSION]

### DASHBOARD
GET : `/dashboard`  
GET DASHBOARD. Returns JSON with User Info.  

### ADD CONTACT
POST : `/add_contact`  
Add New Contact to Database.  
Requires 'name', 'email', 'phone'  

### SERVICES
GET : `/services`  
Shows all the Services.  
[NEED ADMIN PERMISSION]

### VIEW LOG
GET : `/view_logs`  
See all the Logs  
[NEED ADMIN PERMISSION] 

### LIST OF ALL CONTACTS
GET : `/contacts/all`  
View all the Contacts in the Database.  
[NEED ADMIN PERMISSION]  

### LIST CONTACTS OF THE CURRENT USER
GET : `/contacts`  
View all the Contacts created by current User 

### GET ALL SCHEDULES
GET : `/schedules`  
View schedules by current User.  

GET : `/schedules/all`
View all the Schedules.  
[NEED ADMIN PERMISSION]  

## TRACK LINK 
`/track/<campaign_id>/<contact_id>`  
Log if the Email was seen  


