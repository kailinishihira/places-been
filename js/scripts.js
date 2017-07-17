// Business Logic -->

//Contructor to create destination object with the same properties
function Destination(locations, landmarks, season, duration, notes) {
  this.locations = locations;
  this.landmarks = landmarks;
  this.season = season;
  this.duration = duration;
  this.notes = notes;
}

Destination.prototype.seasonPlusLocation = function() {
  return this.season + " in " + this.locations;
}


// UI Logic -->


// Once the document is ready to be parsed by jQuery target the form id #new-places. Upon the user clicking the Submit button (.submit -> event listener) run a callback function
$(document).ready(function(){
  $("form#new-places").submit(function(event){
    event.preventDefault();

// Setting variables for each field in our form that the user will input data
    var newLocation = $("#new-location").val();
    var newLandmarks = $("#new-landmarks").val();
    var newSeason = $("#new-season").val();
    var newDuration = $("#new-duration").val();
    var newNotes = $("#new-notes").val();


// Create new object/instance from the Destination constructor using the "new" keyword and the new variables that have values attached to them from what the user entered in the form, then assign it to a variable.
    var newDestination = new Destination(newLocation, newLandmarks, newSeason, newDuration, newNotes);

// Display the information on the page so user can see their destinations.

// Created another column with a div and an h2 element in index.html. We targetted that id and element with jQuery.
$("#output-properties").append("<li><h2><span class='place-results'>" + newDestination.locations + "</span></h2></li>")

$(".place-results").last().click(function() {
  $("#list-properties").toggle();
  $(".new-location").text(newDestination.seasonPlusLocation());
  $(".new-landmarks").text(newDestination.landmarks);
  $(".new-duration").text(newDestination.duration);
  $(".new-notes").text(newDestination.notes);
});

  $("#new-location").val("");
  $("#new-landmarks").val("");
  $("#new-season").val("");
  $("#new-duration").val("");
  $("#new-notes").val("");

  });
});
