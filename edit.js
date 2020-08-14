$( document ).ready(function() {
    document.getElementById("edit").classList.add("hide");
});

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC0maNSHdFbJ5Mry8kwShkulNRLw7f8CfM",
    authDomain: "ccapdev-resume-be4ac.firebaseapp.com",
    databaseURL: "https://ccapdev-resume-be4ac.firebaseio.com",
    projectId: "ccapdev-resume-be4ac",
    storageBucket: "ccapdev-resume-be4ac.appspot.com",
    messagingSenderId: "232184009593",
    appId: "1:232184009593:web:c1ea262b2925bbcfb395a8"
};

// Initialize Firebase
var defaultProject = firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var btnEduc = document.getElementById("btn_educ");
var btnOrg = document.getElementById("btn_org");
var btnWork = document.getElementById("btn_work");
var btnIntro = document.getElementById("btn_intro");

var btnGithub = document.getElementById("btn_github");
var btnLinkedin = document.getElementById("btn_linkedin");
var btnTwitter = document.getElementById("btn_twitter");

function addSchool() {
    if(document.getElementById("school").value == '' || document.getElementById("degree").value == '' || document.getElementById("educ_year_start").value == '' || document.getElementById("educ_year_end").value == ''){
        alert("No input/Missing fields detected!");
    }
    else{
        db.collection("educations").add({
            school: document.getElementById("school").value,
            degree: document.getElementById("degree").value,
            year_start: document.getElementById("educ_year_start").value,
            year_end: document.getElementById("educ_year_end").value
        })
            .then(function (doc) {
                alert("School added with the ID " + doc.id);
            })
    }
    
    document.getElementById("educ").reset();
}

function addOrg() {
    
    if(document.getElementById("organization").value == '' || document.getElementById("position").value == '' || document.getElementById("org_year_start").value == '' || document.getElementById("org_year_end").value == ''){
        alert("No input/Missing fields detected!");
    }
    else{
        db.collection("organizations").add({
            name: document.getElementById("organization").value,
            position: document.getElementById("position").value,
            year_start: document.getElementById("org_year_start").value,
            year_end: document.getElementById("org_year_end").value
        })
        .then(function (doc) {
            alert("Organization added with the ID " + doc.id);
        })
    }

    document.getElementById("org").reset();
}


function addWork() {
    if (document.getElementById("workname").value == '' || document.getElementById("description").value == '') {
        alert("No input/Missing fields detected!");
    }
    else {
        db.collection("works").add({
            name: document.getElementById("workname").value,
            desc: document.getElementById("description").value
        })
            .then(function (doc) {
                alert("Work added with the ID " + doc.id);
            })
    }
    document.getElementById("work").reset();
}

function editIntro() {
    if (document.getElementById("introduction").value == '') {
        alert("No input detected!");
    }
    else {
        db.collection("intro").doc('intro').update({
            desc: document.getElementById("introduction").value
        })
            .then(function (doc) {
                alert("Intro edited!");
            })
    }

    document.getElementById("intro").reset();

}

function editGithub() {
    if (document.getElementById("github").value == '') {
        alert("No input detected!");
    }
    else {
        db.collection("links").doc('i6DxFWZmy999vTNViKhv').update({
            link: document.getElementById("github").value
        })
            .then(function (doc) {
                alert("Github link updated!")
            })
    }

    document.getElementById("links").reset();

}

function editLinkedin() {
    if (document.getElementById("linkedin").value == '') {
        alert("No input detected!");
    }
    else {
        db.collection("links").doc('jK1CFxafRHBHKm41mzz3').update({
            link: document.getElementById("linkedin").value
        })
            .then(function (doc) {
                alert("LinkedIn link updated!")
            })
    }
    document.getElementById("links").reset();
}

function editTwitter() {
    if (document.getElementById("twitter").value == '') {
        alert("No input detected!");
    }
    else {
        db.collection("links").doc('krb77upeAEJ51KXVxJV8').update({
            link: document.getElementById("twitter").value
        })
            .then(function (doc) {
                alert("Twitter link updated!")
            })
    }

    document.getElementById("links").reset();

}

//DELETE

//EUCATION
db.collection("educations").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    let parent = document.getElementById("education-list");

    changes.forEach(change => {
        if(change.type == "added"){
            readEducation(change.doc);
        }
        else if(change.type == "removed"){
            let div = document.querySelector('[educ-id=' + change.doc.id +']');
            parent.removeChild(div);
        }
    })
})

function readEducation(doc){
    let parent = document.getElementById("education-list");

    let div = document.createElement("div");
    let school = document.createElement("div");
    let degree = document.createElement("div");
    let year_start = document.createElement("div");
    let year_end = document.createElement("div");
    let cross = document.createElement("div");

    let data = doc.data();

    div.setAttribute("educ-id", doc.id);
    div.setAttribute("style", "border: 2px solid black; padding:5px 5px; margin:5px 0px");
    school.innerHTML = "School: " + data.school;
    degree.innerHTML = "Degree: " + data.degree;
    year_start.innerHTML = "Year Start: " + data.year_start;
    year_end.innerHTML = "Year End: " + data.year_end;
    cross.innerHTML = "DELETE";
    cross.setAttribute("style", "background-color: beige; text-align:center;");
    cross.setAttribute("class", "pointer");

    div.appendChild(school);
    div.appendChild(degree);
    div.appendChild(year_start);
    div.appendChild(year_end);
    div.appendChild(cross);

    parent.appendChild(div);

    //deleting data
    cross.addEventListener("click", (e) => {
        let id = e.target.parentElement.getAttribute('educ-id');
        db.collection("educations").doc(id).delete();
        alert("Delete data with id " + id + "is successful!");
    })
}

//ORGANIZATION
db.collection("organizations").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    let parent = document.getElementById("organization-list");

    changes.forEach(change => {
        if(change.type == "added"){
            readOrganization(change.doc);
        }
        else if(change.type == "removed"){
            let div = document.querySelector('[org-id=' + change.doc.id +']');
            parent.removeChild(div);
        }
    })
})

function readOrganization(doc){
    let parent = document.getElementById("organization-list");

    let div = document.createElement("div");
    let name = document.createElement("div");
    let position = document.createElement("div");
    let year_start = document.createElement("div");
    let year_end = document.createElement("div");
    let cross = document.createElement("div");

    let data = doc.data();

    div.setAttribute("org-id", doc.id);
    div.setAttribute("style", "border: 2px solid black; padding:5px 5px; margin:5px 0px");
    name.innerHTML = "Name: " + data.name;
    position.innerHTML = "Position: " + data.position;
    year_start.innerHTML = "Year Start: " + data.year_start;
    year_end.innerHTML = "Year End: " + data.year_end;
    cross.innerHTML = "DELETE";
    cross.setAttribute("style", "background-color: beige; text-align:center;");
    cross.setAttribute("class", "pointer");

    div.appendChild(name);
    div.appendChild(position);
    div.appendChild(year_start);
    div.appendChild(year_end);
    div.appendChild(cross);

    parent.appendChild(div);

    //deleting data
    cross.addEventListener("click", (e) => {
        let id = e.target.parentElement.getAttribute('org-id');
        db.collection("organizations").doc(id).delete();
        alert("Delete data with id " + id + "is successful!");
    })
}

//WORKS
db.collection("works").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    let parent = document.getElementById("work-list");

    changes.forEach(change => {
        if(change.type == "added"){
            readWork(change.doc);
        }
        else if(change.type == "removed"){
            let div = document.querySelector('[work-id=' + change.doc.id +']');
            parent.removeChild(div);
        }
    })
})

function readWork(doc){
    let parent = document.getElementById("work-list");

    let div = document.createElement("div");
    let name = document.createElement("div");
    let desc = document.createElement("div");
    let cross = document.createElement("div");

    let data = doc.data();

    div.setAttribute("work-id", doc.id);
    div.setAttribute("style", "border: 2px solid black; padding:5px 5px; margin:5px 0px");
    name.innerHTML = "Name: " + data.name;
    desc.innerHTML = "Description: " + data.desc;
    cross.innerHTML = "DELETE";
    cross.setAttribute("style", "background-color: beige; text-align:center;");
    cross.setAttribute("class", "pointer");

    div.appendChild(name);
    div.appendChild(desc);
    div.appendChild(cross);

    parent.appendChild(div);

    //deleting data
    cross.addEventListener("click", (e) => {
        let id = e.target.parentElement.getAttribute('work-id');
        db.collection("works").doc(id).delete();
        alert("Delete data with id " + id + "is successful!");
    })
}

var input = document.getElementById("logincontainer");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("btn_login2").click();
    }
  });

function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        
        document.getElementById("btn_login").setAttribute("class", "hide");
        document.getElementById("edit").classList.remove("hide");
        $('#loginModal').modal('hide');
        document.getElementById("logincontainer").reset();
        alert("Login successful!");
        var user = firebase.auth().currentUser;
        if(user!=null){
            
        }
    }).catch(function(err){
        if(err.code == "auth/wrong-password"){
            alert("Wrong password");
            document.getElementById("logincontainer").reset();
        }
        else{   
            alert(err.message);
            document.getElementById("logincontainer").reset();
        }   
    });


}

