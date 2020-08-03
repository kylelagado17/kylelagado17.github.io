
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
    school_year.setAttribute("id", "school_year");

    school_name.innerHTML = data.school;
    school_course.innerHTML = data.degree;
    school_year.innerHTML = data.year_start + " - " + data.year_end;

    col_educ.appendChild(school_data);
    school_data.appendChild(school_name);
    school_data.appendChild(school_course);
    school_data.appendChild(school_year);

    parent.appendChild(col_educ);

}

 //read each document from organization
db.collection("organizations").get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
    readOrganization(doc);
    })
});

function readOrganization(doc){

    let parent = document.getElementById("organizations");
    let data = doc.data();

    //col-md-12
    let col_org = document.createElement("div");
    col_org.classList.add("col-md-12");
    col_org.classList.add("col-pad-bot");

    //org data container
    let org_data = document.createElement("div");
    org_data.classList.add("orgdata");

    //org name
    let org_name = document.createElement("div");
    org_name.classList.add("orgname");
    org_name.setAttribute("id", "org_name");

    //org position
    let org_position = document.createElement("div");
    org_position.classList.add("orgposition");
    org_position.setAttribute("id", "org_position");

    //year
    let org_year = document.createElement("div");
    org_year.classList.add("orgyear");
    org_year.setAttribute("id", "org_year");

    org_name.innerHTML = data.name;
    org_position.innerHTML = data.position;
    org_year.innerHTML = data.year_start + " - " + data.year_end;

    col_org.appendChild(org_data);
    org_data.appendChild(org_name);
    org_data.appendChild(org_position);
    org_data.appendChild(org_year);

    parent.appendChild(col_org);
};


db.collection("works").get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        readWorks(doc);
    })
});

function readWorks(doc){

    let parent = document.getElementById("works");
    let data = doc.data();

    //col-md-4
    let col_work = document.createElement("div");
    col_work.classList.add("col-md-4");
    col_work.classList.add("center");

    //work data container
    let work_data = document.createElement("div");
    work_data.classList.add("workdata");

    //work name
    let work_name = document.createElement("div");
    work_name.classList.add("workname");
    work_name.setAttribute("id", "work_name");

    //work desc
    let work_desc = document.createElement("div");
    work_desc.classList.add("workdesc");

    let p = document.createElement("p");
    p.classList.add("center");
    p.setAttribute("id", "work_desc");

    work_name.innerHTML = data.name;
    p.innerHTML = data.desc;
   
    col_work.appendChild(work_data);
    work_data.appendChild(work_name);
        work_desc.appendChild(p);
    work_data.appendChild(work_desc);

    parent.appendChild(col_work);
        


}


db.collection("links").get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        readLinks(doc);
    })
});



function readLinks(doc){

    let parent = document.getElementById("links");
    let data = doc.data();

    //col-md-4
    let col_links = document.createElement("div");
    col_links.classList.add("col-md-4");
    col_links.classList.add("center");

    //links data container
     let link_data = document.createElement("div");
     link_data.classList.add("linkdata");

    //link name
    let link_name = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.classList.add("linkname");

    let link_val = document.createElement("div");
    let span = document.createElement("span");
    span.classList.add("linkval");
    let a = document.createElement("a");
    a.setAttribute("href", data.link);
    

    h3.innerHTML = data.name;
    a.innerHTML = data.link;

    col_links.appendChild(link_data);
    link_data.appendChild(link_name);
    link_name.appendChild(h3);
    link_data.appendChild(link_val);
    link_val.appendChild(span);
    span.appendChild(a);

    parent.appendChild(col_links);
}

/*final*/