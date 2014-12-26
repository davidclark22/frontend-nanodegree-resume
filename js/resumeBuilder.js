//Data being used formatted as JSON

var bio = {
  "name" : "David Clark",
  "role" : "Product Manager", 
  "contacts" : {
      "mobile": "417-622-7845", 
      "email" : "davidclark22@gmail.com",
      "twitter" : "davidclark22"
      },
  "picture_URL" : "https://media.licdn.com/mpr/mpr/shrink_500_500/p/3/000/229/29f/3b26009.jpg",
  "welcome_message" : "Hi, welcome to my page.  This is about me.",
  "skills" : ["html", "javascript", "css", "management", "finance"]
}

var projects = [
    {
        "title": "GymTraveler",
        "dates": "2013 - 2014",
        "description": "Startup that sells passes to gyms",
        "images": ["https://pbs.twimg.com/profile_images/418943081350565888/S0M6p5Uv.png", "https://lh4.googleusercontent.com/proxy/G2VWADH8gQ3V0xo-sYxboJFsj28xteoEOBlPTiAkWAa9Iv85WLkBNPMl1YNBq-SDfaw5yGm4J7arzbXgccLW=w426-h240-n"]
    }
]

var work = [{
  "employer" : "CenturyLink",
  "title" : "Product Owner",
  "location" : "Town and Country, MO",
  "dates" : "2013 - present",
  "description" : "Owner of Colocation product line."
  },
  {
  "employer" : "Pritikin Longevity Center",
  "title" : "Director - Special Projects",
  "location" : "St. Louis, MO",
  "dates" : "2012 - 2013",
  "description" : "Managed variety of projects across multiple disciplines."
  }]


var education = {
    "schools": [
        {
            "name": "Washington University",
            "dates": "2010 - 2012",
            "location": "Saint Louis, MO",
            "majors": [
                "Strategy",
                "Marketing"
            ],
            "degree": "MBA"
        },
        {
            "name": "Missouri Southern",
            "dates": "2006 - 2010",
            "location": "Joplin, MO",
            "majors": [
                "International Business",
                "Spanish"
            ],
            "degree": "BSBA"
        }
    ],
    "online_courses": [
        {
            "title": "Intro to Computer Science",
            "school": "Virginia",
            "dates": "2014",
            "url": "http://udacity.com"
        },
        {
            "title": "Law and The Entrepreneur",
            "school": "Northwestern",
            "dates": "2013",
            "url": "http://coursera.org"
        }
    ]
}

//Page builders

//Name and role
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLbioPic.replace("%data%", bio.picture_URL));
$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcome_message));

//Contact info
for (each in bio.contacts) {
    $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", each).replace("%data%", bio.contacts[each]));
}

//Skills list
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
  }
}

//Work experience
function displayWork() {
  for (job in work) {
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work[job].employer) + HTMLworkTitle.replace("%data%", work[job].title));
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work[job].dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work[job].description));
  }
}
displayWork();

//Internationalize button
$("#main").append(internationalizeButton);

//Projects list
projects.display = function() {
    for (each in projects) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects[each].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects[each].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects[each].description));
        for (image in projects[each].images) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects[each].images[image]));
        }
    }
}
projects.display();

//Education List
education.display = function() {
    for (each in education.schools) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[each].name) + HTMLschoolDegree.replace("%data%", education.schools[each].degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[each].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[each].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[each].majors.join(", ")) + "<br>");
    }
    $("#education").append(HTMLonlineClasses);
    for (each in education.online_courses) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.online_courses[each].title) + HTMLonlineSchool.replace("%data%", education.online_courses[each].school));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.online_courses[each].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.online_courses[each].url) + "<br>");
        
    }
}
education.display();

//Map
$("#mapDiv").append(googleMap);


/* var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%contact%", bio.contact_info[0]);
formattedContact = formattedContact.replace("%data%", bio.contact_info[1]);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture_URL);
var welcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcome_message);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedWork = HTMLworkEmployer.replace("%data%", work.employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.current);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedContact);
$("#header").append(formattedPicture);
$("#header").append(welcomeMessage);
$("#header").append(formattedSkills);   
$("#header").append(formattedWork);
$("#header").append(formattedTitle);
$("#header").append(education.years);
 */

