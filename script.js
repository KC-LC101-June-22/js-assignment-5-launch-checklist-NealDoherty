// Write your JavaScript code here!

//const helper = require("./scriptHelper.js");

window.addEventListener("load", function() {

    
   const submit = document.getElementById("launchForm");   
   const checklist = document.getElementById("faultyItems").querySelectorAll("li");
   const getPilotName = document.getElementById('pilotName');
   const getCoPilotName = document.querySelector('input[name=copilotName]');
   const getFuelLevel = document.querySelector('input[name=fuelLevel]');
   const getCargoMass = document.querySelector('input[name=cargoMass]');

    submit.addEventListener("submit",function(event){
    event.preventDefault();   
        
    formSubmission(document,checklist, getPilotName.value, getCoPilotName.value, getFuelLevel.value, getCargoMass.value);

    });

  

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pick=pickPlanet(listedPlanets);
       addDestinationInfo(document,pick.name,pick.diameter,pick.star,pick.distance,pick.moons,pick.image);
   })

 

});