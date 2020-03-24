README

Email Checker API Endpoint to return unique email addresses using gmail standars of email

Endpoint
POST localhost:8081/emails

Gmail Standards and Assumptions:
- ignore '.' in email address
- ignore all text after '+' and before '@'
- ignore letter case

- Assuming email will be in correct format of username@domain
- Assuming list as input, but can handle single email and empty string as requests
- Assuming no need to store email addresses into a database

  Format of request is key value pair
  	- key must be named "email_addresses"
  	- Value can be an array of email address or a String of only one email address
  	- Test sample provided in postman collection

Program Running Instructions(Linux):
1. Make sure you have node installed! (Node Modules included in project folder)
	- Go to terminal
	- Type node -v
	- If installed skip to step 2
	- Download and install node from https://node.org
2. Install Express
	- In terminal type npm install express
3. Install Postman
	- https://www.postman.com/downloads/
4. Import Postman Collection for testing
	[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/1839ad69632e8c6e53c4)
5. Run Program 
	- go to terminal
	- type node email.js
6. Run Test on Postman
	- Click on Postman Runner
	- Select emailNodeJS
	- Check save responses and other defaults
	- Click on Run emailNodeJS
7. Adding more Test to Postman
	- Click on endpoint
	- Click on "Pre Request Script"
	- Add test to emailSet
	** Make sure to add single quotes before and after list param and commas after each item in emailSet
	

