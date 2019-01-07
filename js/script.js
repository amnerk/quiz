/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
        
        function medicalconditions(conditions)
            if (conditions === Nearsighted){
            return 2;
            else if (conditions === Arthritis){
            return 4;
            else if (conditions === IBS){
            return 6;
            }
    
        
    

});