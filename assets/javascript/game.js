$(function () {

    // -------static variables
    let score = 0;
    let randomNum = (Math.floor(Math.random() * 102) + 19);
    let win = 0;
    let loss = 0;
    let crystal = {
        one: (Math.floor(Math.random() * 12) + 1),
        two: (Math.floor(Math.random() * 12) + 1),
        three: (Math.floor(Math.random() * 12) + 1),
        four: (Math.floor(Math.random() * 12) + 1)
    };

    // --------app state


    // cached DOM elements
    $("#ranNum").text(randomNum);


    // event listeners --- connecting buttons to random number
    $(".button").on("click", function game() {
        $("#phrase").html("");

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

        $("#scoreShow").text(score);

        if (score === randomNum) {
            win++;
            $("#phrase").html("Wow. You won. Do you want a cookie or something?");
            $("#winBox").html(win);
            crystal.one = (Math.floor(Math.random() * 12) + 1);
            crystal.two = (Math.floor(Math.random() * 12) + 1);
            crystal.three = (Math.floor(Math.random() * 12) + 1);
            crystal.four = (Math.floor(Math.random() * 12) + 1);
            randomNum = (Math.floor(Math.random() * 102) + 19);
            score = 0;
            console.log(win);
        }
        if (score > randomNum) {
            loss++;
            $("#phrase").html("Damn, you suck...");
            $("#lossBox").html(loss);
            crystal.one = (Math.floor(Math.random() * 12) + 1);
            crystal.two = (Math.floor(Math.random() * 12) + 1);
            crystal.three = (Math.floor(Math.random() * 12) + 1);
            crystal.four = (Math.floor(Math.random() * 12) + 1);
            randomNum = (Math.floor(Math.random() * 102) + 19);
            score = 0;
        }

        $("#scoreShow").html(score);
        $("#ranNum").html(randomNum);
    });

    // functions



    // checking winner


    // initalize



})