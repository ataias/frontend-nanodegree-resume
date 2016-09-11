/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // changes the html of element of id main by adding my name
 // $("#main").append("Ataias Pereira Reis")
// var firstName = "Ataias"
// var age = 32;
// console.log(firstName)
//
// var awesomeThoughts = "I am Ataias and I am AWESOME!"
// console.log(awesomeThoughts);
//
// var email = "cameron@udacity.com"
// var newMail = email.replace("udacity", "gmail")
// console.log(email);
// console.log(newMail);
//
// var awesomeThoughts = awesomeThoughts.replace("AWESOME", "FUN")
// // $("#main").append(awesomeThoughts)

var name = "Ataias Pereira Reis";
var role = "Software Engineer";
var skills = ["awesomeness", "programming", "teaching"];

var bio = {
  "name": name,
  "role": role,
  "picture": "https://ataias.com.br/img/avatar.jpg",
  "contacts": {
    "email": "me@ataias.com.br"
  },
  "welcome": "Welcome to my resume!",
  "skills": skills
};

var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcome)
$("#main").append(welcomeMessage)
var contact = HTMLcontactGeneric.replace("%contact%", bio.contact);
$("#main").append(contact)

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var work = {}
work.position = "Software Developer"
work.employer = "Simbiose Ventures"
work.years = 0.42
work.city = "São Paulo"

var education = {}
education["name"] = "University of Brasilia"
education["years"] = 6
education["city"] = "Brasilia"

$("#main").append(work["position"])
$("#main").append(education.name)
