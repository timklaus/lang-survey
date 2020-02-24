$(document).ready(function() {
  $("form#survey").submit(function(){
    // This will hide previous results upon form submission
    $("#RonJavascript").hide();
    $("#TomPython").hide();
    $("#BenRuby").hide();

    // This will gather scores for each variable from user input
    var jsScore = parseInt($("#js-independant").val())+ parseInt($("#js-organize").val());
    var pythonScore = parseInt($("#python-elegant").val()) + parseInt($("#python-comm").val());
    var rubyScore = parseInt($("#ruby-start").val()) + parseInt($("#ruby-magic").val());
    
    //This will check that scores for each variable are being tallied successfully.
    console.log("Your current Javacscript Score is:  " + jsScore);
    console.log("Your current Python Score is:  " + pythonScore);
    console.log("Your current Ruby score is:  " + rubyScore);
    
    //This branching will determine results based on scores
    if (jsScore >= pythonScore && jsScore>= rubyScore) {
      $("#RonJavascript").show();
    } else if (pythonScore > jsScore && pythonScore > rubyScore) {
      $("#TomPython").show();
    } else if (rubyScore > jsScore && rubyScore > pythonScore) {
      $("#BenRuby").show();
    }
    event.preventDefault();
    
  });
});