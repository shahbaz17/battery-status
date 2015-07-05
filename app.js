window.addEventListener("load", function() {
});

$(document).ready(function() {
  var level = $('.green');
  var red = $('#charging-status');
  var yellow = $('#battery-charged');
  yellow.css('color','#ffc107');
  red.css('color','red');
  level.css('color','green'); 
});
