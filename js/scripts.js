$(document).ready(function() {
  $("form#survey").submit(function(){
  console.log("HI")
  event.preventDefault();
  var jsScore = parseInt($("#js-independant").val())+ parseInt($("#js-organize").val());
  var pythonScore = parseInt($("#python-elegant").val()) + parseInt($("#python-comm").val());
  var rubyScore = parseInt($("#ruby-start").val()) + parseInt($("#ruby-magic").val());
  

  console.log("Your current Javacscript Score is:  " + jsScore);
  console.log("Your current Python Score is:  " + pythonScore);
  console.log("Your current Ruby score is:  " + rubyScore);
  
    
  });
});