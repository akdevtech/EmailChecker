
// Email Checker Endpoint
// 
// API ENDPOINTS
// POST	server:8081/emails  -> server is localhost when testing
//

// impor†ing express module
var express = require("express")
var app = express()

// tells the application that we are using json for request and response
app.use(express.json())

// POST ENDPOINT
app.post('/emails', function(req, res) {
	var visited = []									// list of unique emails
	var emails = req.body["email_addresses"]   			// parsing list of emails from body
	
	console.log("Input: " + emails)
	
	// Checks to see if emails is list else returns
	// We can remove if we know emails will always come as a list
	var isList = isNotList(emails)
	if(isList != "-1") {
		console.log("Unique visited emails: " + isList + " - " + emails)
    	console.log("----------------------------------")
		res.end(isList)
	} else {
		// Loops through emails, simplifies each email and checks if in visited
    	// if not in visited adds the unique email
    	for(var i=0; i<emails.length; i++) {
    		if(emails[i].length > 0) {                  // check to see if email is not empty string
        		var simplified_email = simplify_email(emails[i])
            	if(!visited.includes(simplified_email)) {
            	    visited.push(simplified_email)
        	    }
    	    }
    	}
    
    	console.log("Unique visited emails: " + visited.length + " - " + visited)
    	console.log("----------------------------------")
    
    	// return the number of unique emails
    	res.end("" + visited.length);
    }
})

// Function to simplify email and remove all '.' and anything after '+'
function simplify_email(email) {
	var userDomain = email.split("@")			// splits email as username and domain
	
	var username = userDomain[0]				// assign username
	var domain = userDomain[1]					// assign domain
	
	// take only part of username before any '+'
	username = username.split("+")		
	var simplifiedName = username[0]   
	
	// Removes all '.'
	simplifiedName = simplifiedName.split('.').join('')
	
	return simplifiedName + "@" + domain
}

// function to check if emails is a list
// we can remove if we are sure emails will always be a list
function isNotList(emailList) {
	if(!Array.isArray(emailList)) {			// if not list
		if(emailList.length == 0) {			// no email is passed
			return "0"
		} else {
			return "1"						// 1 email was passed
		}
	} else {
		return "-1"							// emailList is a List
	}
}

// Set up server and make port 8081
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Email app listening at http://%s:%s", host, port)
})
