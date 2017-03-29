$(document).ready(function() {
    var breakLength = 5,
        sessionLength = 25;

    $("#inc-break").on("click", function() {
        breakLength++;
        $("#break-length").html(breakLength);
    });
    $("#dec-break").on("click", function() {
        if (breakLength === 1) {
            breakLength = 1;
        } else breakLength--;
        $("#break-length").html(breakLength);
    });

    $("#inc-session").on("click", function() {

        sessionLength++;
        $("#session-length").html(sessionLength);
        $("#time-left").html(sessionLength + " :00");
    });
    $("#dec-session").on("click", function() {
        if (sessionLength == 1) {
            sessionLength = 1;
        } else sessionLength--;
        $("#session-length").html(sessionLength);
        $("#time-left").html(sessionLength + " :00");
    });
var intervalFunction,isRunning;
    $("#start").on("click", function() {
if(isRunning){
  return;
}
        var seconds = 60;
        var breakMinutes = breakLength - 1;
        var sessionMinutes = sessionLength - 1;
        var current = "work";
        var time = sessionMinutes;

        intervalFunction = setInterval(startTimer, 1000);

        function startTimer() {

            $("#time-left").html(time + " : " + seconds);

            if (current == "work") {
                $("#status").html("Work.");
            } else if (current == "free") {
                $("#status").html("Break!");

            }

            if (seconds === 0 && current == "work" && time === 0) {

                time = breakMinutes;
                current = "free";
                seconds = 60;
            } else if (seconds === 0 && current == "free" && time === 0) {
                time = sessionMinutes;
                current = "work";
                seconds = 60;
            }
            if (seconds === 0 && time > 0) {
                seconds = 60;
                time--;
            }
            seconds--;
isRunning=true;

        }


  $("#stop").on("click", function() {
      clearInterval(intervalFunction);
      isRunning=false;
      console.log("stopped");
      breakLength = 5;
      sessionLength = 25;
// $("#break-length").html(breakLength);
$("#time-left").html(sessionLength+ " :00");
$("#session-length").html(sessionLength);
  $("#break-length").html(breakLength);
    $("#status").html("Work");

  });


    });




});
