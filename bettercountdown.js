function betterCountdown() {
    var currTime = 10;
    for (var n = 1; n <= 11; n++) {
        if (n == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "BLASTOFF!!!" ;
            }, 1000 * n);
        } else if (n > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "You are ½ way to launch, prepare for blastoff, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * n);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "The time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * n);
        }
    }
}