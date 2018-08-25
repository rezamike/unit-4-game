$(function () {

    // -------static variables
    let score = 0;
    let randomNum = (Math.floor(Math.random() * 102) + 19);
    let win = 0;
    let loss = 0;
    let winLoss = {
        win: "Wow. You won. Do you want a cookie or something?",
        loss: "Damn, you suck..."
    };
    let crystal = {
        one: (Math.floor(Math.random() * 12) + 1),
        two: (Math.floor(Math.random() * 12) + 1),
        three: (Math.floor(Math.random() * 12) + 1),
        four: (Math.floor(Math.random() * 12) + 1)
    };

    // --------app state


    // cached DOM elements
    console.log(randomNum);


    // event listeners --- connecting buttons to random number
    $(".button").on("click", function game() {

        if ($(this).hasClass("btn1")) {
            score += crystal.one;
            console.log(crystal.one);
        }
        else if ($(this).hasClass("btn2")) {
            score += crystal.two;
            console.log(crystal.two);
        }
        else if ($(this).hasClass("btn3")) {
            score += crystal.three;
            console.log(crystal.three);
        }
        else if ($(this).hasClass("btn4")) {
            score += crystal.four;
            console.log(crystal.four);
        }
        console.log(score);
        if (score === randomNum) {
            win++;
        }
    });


    // functions
    


    // checking winner
    

    // initalize



})