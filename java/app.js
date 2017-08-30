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
        
        $("#Express").one( "click", function() { event.preventDefault();
         $("#Express-table > thead").append("<tr><td>" + "Train Name" + "</td><td>" + "Number of Stops" + "</td><td>" +
            "Arrival Time" + "</td><td>" + "Departure Time" + "</td><td>" + "Cost" + "</td></tr>") } );
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

        database.ref().push(ChoCho);
        $("#trainName").val("");
        $("#Stops").val("");
        $("#Arrive").val("");
        $("#Departure").val("");
        $("#cost").val("");
        console.log(ChoCho.Name);
        console.log(ChoCho.Stops);
        console.log(ChoCho.Arrive);
        console.log(ChoCho.Depart);
        console.log(ChoCho.Cost);

        //add code that clears text boxes
        //code that puts firebaase on to screen


        $("#Express-table > thead").append("<tr><td>" + ChoCho.Name + "</td><td>" + ChoCho.Stops + "</td><td>" + ChoCho.Arrive + "</td><td>" + ChoCho.Depart + "</td><td>" + ChoCho.Cost + "</td></tr>");
    });

});