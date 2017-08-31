$(document).ready(function() {
    // $("#panel-title1").hide();
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBZiQiPPFVI69HSz2pN97bNpGUcMIe43-I",
        authDomain: "polarexpress-6c67b.firebaseapp.com",
        databaseURL: "https://polarexpress-6c67b.firebaseio.com",
        projectId: "polarexpress-6c67b",
        storageBucket: "",
        messagingSenderId: "562178953539"
    };
    firebase.initializeApp(config);
    var database = firebase.database();
    
    // $("#panel-title1").show();
    // $("#Express").on("click", function() {


    $("#Express").one("click", function() {
        event.preventDefault();
        $("#Express-table > thead").append("<tr><td>" + "Train Name" + "</td><td>" + "Number of Stops" + "</td><td>" +
            "Arrival Time" + "</td><td>" + "Departure Time" + "</td><td>" + "Cost" + "</td></tr>")
        loadshit();
    });
    // $("#panel-title1").html("Express");
    //how do I remove button tags?
    // $("#Express-table > thead").append("<tr><td>" + "Train Name" + "</td><td>" + "Number of Stops" + "</td><td>" +
    //     "Arrival Time" + "</td><td>" + "Departure Time" + "</td><td>" + "Cost" + "</td></tr>");
    // $("button").hide();
    // });
    // create new on click of submit button that will put submited information to firebase then pull from firebase and add to screen in t body of Express-table 
    $("#submit").on("click", function() {

        event.preventDefault();
        var TrnName = $("#trainName").val().trim();
        var stop = $("#Stops").val().trim();
        var arrive = $("#Arrive").val().trim();
        var Departure = $("#Departure").val().trim();
        var cost = $("#cost").val().trim();
        var ChoCho = {
            Name: TrnName,
            Stops: stop,
            Arrive: arrive,
            Depart: Departure,
            Cost: cost
        };
         var ChoCho1 = {
            Name1: TrnName,
            Stops1: stop,
            Arrive1: arrive,
            Depart1: Departure,
            Cost1: cost
        };

        // database.ref().set(ChoCho);
        database.ref().push(ChoCho1);
        $("#trainName").val("");
        $("#Stops").val("");
        $("#Arrive").val("");
        $("#Departure").val("");
        $("#cost").val("");
       

        //add code that clears text boxes
        //code that puts firebaase on to screen 
    });
    	function loadshit() {
    		database.ref().on("value", function(snapshot) {
            console.log(snapshot);
            if (snapshot.child("Name").exists()){
            	$("#Express-table > thead").append("<tr><td>" + snapshot.val().Name+ "</td><td>" + snapshot.val().Stops + "</td><td>" + snapshot.val().Arrive + "</td><td>" + snapshot.val().Depart + "</td><td>" + snapshot.val().Cost + "</td></tr>");
            };
            if (snapshot.child("Name1").exists()){
            	$("#Express-table > thead").append("<tr><td>" + snapshot.val().Name1+ "</td><td>" + snapshot.val().Stops1 + "</td><td>" + snapshot.val().Arrive1 + "</td><td>" + snapshot.val().Depart1 + "</td><td>" + snapshot.val().Cost1 + "</td></tr>");
            };
        },
        function(errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    	};


});