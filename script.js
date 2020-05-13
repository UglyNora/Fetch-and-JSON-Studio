// TODO: add code here
window.addEventListener("load", function() {
    let URL = "https://handlers.education.launchcode.org/static/astronauts.json";
    fetch(URL).then( function(response) {
       // Access the JSON in the response
       response.json().then( function(json) {
        const container = document.getElementById("container");
           container.innerHTML = "";
           for(let astronaut of json ) {
               container.innerHTML += `<div class="astronaut">
               <div class="bio">
                  <h3>${astronaut.firstName} ${astronaut.lastName}/h3>
                  <ul>
                     <li>Hours in space: ${astronaut.hoursInSpace}</li>
                     <li>Active: ${astronaut.active}</li>
                     <li>Skills: ${astronaut.skills}</li>
                  </ul>
               </div>
               <img class="avatar" src=${astronaut.picture}>
            </div>
            `;
        }
       });
    });
   
});