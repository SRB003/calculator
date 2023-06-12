// Your JavaScript code here

// Create a script element for jQuery library
var jqueryScript = document.createElement('script');
jqueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
jqueryScript.type = 'text/javascript';
document.head.appendChild(jqueryScript);

// Create a script element for jQuery UI library
var jqueryUIScript = document.createElement('script');
jqueryUIScript.src = 'https://code.jquery.com/ui/1.13.0/jquery-ui.min.js';
jqueryUIScript.type = 'text/javascript';
document.head.appendChild(jqueryUIScript);

// Your remaining JavaScript code here

$(function() {
   
  $("#diesel-slider").slider({
    range: "min",
    value: 90,
    min: 90,
    max: 300,
    slide: function(event, ui) {
      $("#dieselrate-output").text("₹" + ui.value);
      calculateSavings();
    }
  });

  $("#tractor-runtime-slider").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 1000,
    slide: function(event, ui) {
      $("#tractorruntime-output").text(ui.value);
      calculateSavings();
    }
  });

  // Function to calculate savings 
  function calculateSavings() {
    const dieselRate = parseFloat($("#dieselrate-output").text().replace("₹", ""));
    const tractorRuntime = parseInt($("#tractorruntime-output").text());
    const C = 5 * dieselRate;
    const E = tractorRuntime;
    const F = 35;

    const totalSavings = (C * E) - (E * F);

    $("#savings-output").text(totalSavings.toLocaleString());
  }

  calculateSavings(); 
});