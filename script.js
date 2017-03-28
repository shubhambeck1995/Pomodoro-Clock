$(document).ready(function() {
    var breakLength = 5,
        sessionLength = 25;

    $("#inc-break").on("click", function() {
        breakLength++;
        $("#break-length").html(breakLength);
    });
    $("#dec-break").on("click", function() {
        breakLength--;
        $("#break-length").html(breakLength);
    });

    $("#inc-session").on("click", function() {

        sessionLength++;
        $("#session-length").html(sessionLength);
        $("#time-left").html(sessionLength + " :00");
    });
    $("#dec-session").on("click", function() {

        sessionLength--;
        $("#session-length").html(sessionLength);
        $("#time-left").html(sessionLength + " :00");
    });


    console.log(breakLength);
    console.log(sessionLength);


});
