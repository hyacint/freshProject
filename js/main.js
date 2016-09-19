/*jshint esversion: 6 */

var rangeInput = document.getElementById("slider1");

rangeInput.addEventListener('mousemove', function() {
  let newWidth=(600*this.value/100);
  $(".d1").width(newWidth);
});




