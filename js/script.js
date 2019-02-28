/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.c;om/media/22zgHX8aop488/giphy.gif";
        var totalScores = totalScore();
});
});
        function medicalconditions(conditions){
            if (conditions === "Nearsighted"){
            return 2;
            }else if (conditions === "Arthritis"){
            return 4;
            }else if (conditions === "IBS"){
            return 6;}
            
            }
        function parents(divorced){
            if (divorced === "Yes"){
                return 2;
            }else if (divorced === "No"){
                return 4;
            }else if (divorced === "I don't have parents"){
            return 6;}
          
            
            }
    
        function capitalism(destroyed){
            if (destroyed === "Yes!"){
                return 2;
                }else if (destroyed === "Never that!"){
                    return 4;
                }else if (destroyed === "I'm not sure"){
                    return 6;}
            }
function totalScore () {
    var q1Result = $("#question1").val();
    var score = medicalconditions (q1Result);
    var q2Result = $("#question2").val();
    score = parents (q2Result) + score;
    var q3Result = $("#question3").val();
score = capitalism (q3Result) + score;

    if (score < 10) {
        var finalVariable = "Lucky Charms";
    } else if (score >10) {
        var finalVariable = "Special K";
    } else if (score < 15) {
        var finalVariable = "Cap'n Crunch";
    }
  $("button").text(finalVariable);
}