
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



//read about me/intro
db.collection("intro").get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        readAboutMe(doc);
    })
})

function readAboutMe(doc){
    let parent = document.getElementById("aboutdata");
    let data = doc.data();

    //create p
    let p = document.createElement("p");
    p.classList.add("justify");
    p.setAttribute("id", "aboutme");

    p.innerHTML = data.desc;

    parent.appendChild(p);
}

//read each document from education
db.collection("educations").get().then((snapshot) =>{
        snapshot.docs.forEach(doc =>{
            readEducation(doc);
        })
});

function readEducation(doc){

    let parent = document.getElementById("education");
    let data = doc.data();

    //col-md-12
    let col_educ = document.createElement("div");
    col_educ.classList.add("col-md-12");
    col_educ.classList.add("col-pad-bot");

    //school data container
    let school_data = document.createElement("div");
    school_data.classList.add("schooldata");

    //school name
    let school_name = document.createElement("div");
    school_name.classList.add("schoolname");
    school_name.setAttribute("id", "school");

    //degree
    let school_course = document.createElement("div");
    school_course.classList.add("schoolcourse");
    school_course.setAttribute("id", "degree");

    //year
    let school_year = document.createElement("div");
    school_year.classList.add("schoolyear");
    school_year.setAttribute("id", "year_start");

    school_name.innerHTML = data.school;
    school_course.innerHTML = data.degree;
    school_year.innerHTML = data.year_start + " - " + data.year_end;

    col_educ.appendChild(school_data);
    school_data.appendChild(school_name);
    school_data.appendChild(school_course);
    school_data.appendChild(school_year);

    parent.appendChild(col_educ);


}