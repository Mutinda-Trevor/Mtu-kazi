// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfRsjKWDfQeQxjDj5uvgDe6_vJXCgdYX8",
    authDomain: "saidika-mtaani.firebaseapp.com",
    databaseURL: "https://saidika-mtaani-default-rtdb.firebaseio.com",
    projectId: "saidika-mtaani",
    storageBucket: "saidika-mtaani.appspot.com",
    messagingSenderId: "204489155173",
    appId: "1:204489155173:web:7c0c4eb478a1496db71c8c",
    measurementId: "G-LLCN210HT1"
  };

  //firebase initialization
firebaseConfig.initializeApp(firebaseConfig);

function createProject(event){
    event.preventDefault();

    const project = document.getElementById("project").value;
    const location = document.getElementById("location").value;
    const time = document.getElementById("timing").value;
    
    document.getElementById("project").value = "";
    document.getElementById("location").value = "";
    document.getElementById("timing").value = "";

    //Unfinished, storing data
firebase.database().ref("AvailableProjects/").set({
    project: project,
    location: location,
    time: time,
    status: "pending",
});
}