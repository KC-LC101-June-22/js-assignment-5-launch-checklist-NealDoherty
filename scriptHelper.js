// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.

   const missionTarget = document.getElementById("missionTarget");
   
   let destination =`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`;

    missionTarget.innerHTML += destination;     

}

function validateInput(testInput) {
    
    let response;

    if (isNaN(testInput)) {
      response = "Not a Number";
    }
    else if (typeof (Number(testInput)) === 'number' && testInput !== "") {
      response = "Is a Number";
    } 
    else if (testInput === '') {
      response = 'Empty';
    }
    else {
      response = 'Validation Failed';
    } 

    return response;
   
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let getLaunchStatus = document.getElementById("launchStatus");

    let launchFailSafe = false;

    if(validateInput(pilot) !== "Empty"){
        list[0].innerHTML = `Pilot ${pilot} is ready for launch`;
    }
    else{
        list[0].innerHTML = "Invalid Input";
        alert('Invalid input for Pilot Name');
        getLaunchStatus.innerHTML= "Awaiting Information Before Launch";
        getLaunchStatus.style.color = "black";
        launchFailSafe = true;
        document.getElementById('faultyItems').style.visibility = "hidden";
    }
    

    if(validateInput(copilot) !== "Empty"){
        list[1].innerHTML = `Co-Pilot ${copilot} is ready for launch`;
    }
    else{
        list[1].innerHTML = "Invalid Input";
        alert('Invalid input for Co-Pilot Name');
        getLaunchStatus.innerHTML= "Awaiting Information Before Launch";
        getLaunchStatus.style.color = "black";
        launchFailSafe = true;
        document.getElementById('faultyItems').style.visibility = "hidden";
    }


    if(validateInput(fuelLevel) === "Is a Number" && fuelLevel>=10000){
        list[2].innerHTML = "Fuel level high enough for launch";  
    }
    else if(validateInput(fuelLevel) === "Is a Number" && fuelLevel<10000){
        list[2].innerHTML = "Insufficient fuel for launch";
        getLaunchStatus.innerHTML= "Shuttle not ready for launch";
        getLaunchStatus.style.color = "red";
        launchFailSafe = true;
        document.getElementById('faultyItems').style.visibility = "visible";
    }
    else{
        list[2].innerHTML = "Invalid Input - Enter a number";
        alert('Invalid input for Fuel Level');
        getLaunchStatus.innerHTML= "Awaiting Information Before Launch";
        getLaunchStatus.style.color = "black";
        launchFailSafe = true;
        document.getElementById('faultyItems').style.visibility = "hidden";
    }



    if(validateInput(cargoLevel) === "Is a Number" && cargoLevel<10000){
        list[3].innerHTML = "Cargo mass low enough for launch";
    }
    else if(validateInput(cargoLevel) === "Is a Number" && cargoLevel>=10000){
        list[3].innerHTML = "Cargo mass too high for launch";
        getLaunchStatus.innerHTML= "Shuttle not ready for launch";
        getLaunchStatus.style.color = "red";
        launchFailSafe = true;
        document.getElementById('faultyItems').style.visibility = "visible";
    }
    else{
        list[3].innerHTML = "Invalid Input - Enter a number";
        alert('Invalid input for Cargo Mass');
        getLaunchStatus.innerHTML= "Awaiting Information Before Launch";
        getLaunchStatus.style.color = "black";
        launchFailSafe = true;
        document.getElementById('faultyItems').style.visibility = "hidden";
    }
    
if(launchFailSafe === false){
    getLaunchStatus.innerHTML= "Shuttle is ready for launch";
    getLaunchStatus.style.color = "green";
    document.getElementById('faultyItems').style.visibility = "visible";
}

}


async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) { return response.json();});
    return planetsReturned;
}

function randomSelection(arr){       
    let index = Math.round(Math.random()*arr.length);
    return arr[index];
 }
 

function pickPlanet(planets) {
    return randomSelection(planets);
}



/*
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
*/
