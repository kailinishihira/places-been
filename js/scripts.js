// Business Logic -->

//Contructor to create destination object with the same properties
function Destination(locations, landmarks, season, duration, notes) {
  this.locations = locations;
  this.landmarks = landmarks;
  this.season = season;
  this.duration = duration;
  this.notes = notes;
}


// UI Logic -->


// Once the document is ready to be parsed by jQuery target        the form id #new-places. Upon the user clicking the Submit button (.submit -> event listener) run a callback function
$(document).ready(function(){
  $("form#new-places").submit(function(event){
    event.preventDefault();

//
    var newLocation = $("#new-location").val();
    var newLandmarks = $("#new-landmarks").val();
    var newSeason = $("#new-season").val();
    var newDuration = $("#new-duration").val();
    var newNotes = $("#new-notes").val();




  });
});
