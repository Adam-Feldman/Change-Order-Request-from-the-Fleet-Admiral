function betterCountdown() {
    var currTime = 10;
    for (var n = 1; n <= 11; n++) {

        // this indicates the timer has reached 0 and displays Blastoff
        if (n == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "BLASTOFF!!!" ;
            }, 1000 * n); 


            // this is the code that displays a message if the time is under 5 seconds and over 0
        } else if (n > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "You are ½ way to launch, prepare for blastoff, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * n); 

            // this is the code for displaying the seconds left if the number is 5 or higher
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "The time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * n); 
        }
    }
}