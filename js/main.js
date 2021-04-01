//var countDownDate = new Date("Apr 27, 2021 00:00:00").getTime();
var countDownDate = new Date("Feb 27, 2021 3:17:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("count_down").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  while ( days < 0 ){
    countDownDate += 2551392000;
    now = new Date().getTime();
    distance = countDownDate - now;
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
  /*if (days > 365){
    document.getElementById("school_year").innerHTML = "Junior"
  }
  else{
    document.getElementById("school_year").innerHTML = "Senior"
  }
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "GRADUATED!";
  }*/
}, 1000);