#   BACKEND SERVER FOR SMART INDIA HACKATHON - 2019

## LIST AND INFORMATION OF ALL USERS
`/users`  
The above can be used to specifying all the users present in User DB without any Authorization (Testing Only)

## LOGIN 
`/login`  
Requires Correct Email and Password. Returns Token which has to be sent with every request after.

## REGISTER
`/register`  
To Register New Users (Requires "admin" role)

## DASHBOARD
`/dashboard`  
Displays User Dashboard

## ADD CONTACT
`/add_contact`  
New Contacts can be added. Token Required

## SERVICES
`/services`  
Get all Available Mailing and SMS services. Only Admins can Access

## VIEW LOG
`/view_logs`  
View Logs of Emails and SMS. Only Admins can Access

## LIST OF ALL CONTACTS
`/contacts`  
Get list of all contacts. No Permission required(Testing)