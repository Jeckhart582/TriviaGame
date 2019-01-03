// Variables I can assign for correct answers
// Variables I can assign for incorrect answers
// Build a timers function that counts down
// If/ Else statesments to determine whether a questions answer is correct
// Fuction that runs if/else statment when submit button is pressed
// Seperate page for listing what questions the user missed and how many they got right

// var correctAnswer1 = "Zeus"
// var incorrectAnswer1 = ["Hades", "Odin", "Athena"]

// function question1 () {
//     for ( var i = 0; i < incorrectAnswer1.length; i++) {
//         var answer = $(".form-check-label");
//         answer.addClass("answer");
//         $(".form-check-label").html(incorrectAnswer1[i]);


//     }
// };



// question1();
$(document).ready(function () {
    var choice = [
        {
            question: "Who is called the 'All-father' in Norse Mythology?",
            questionOptions: ["Thor", "Hela", "Loki", "Zeus", "Odin"],
            questionAnswer: 4
        },
        {
            question: "Which Greek God was conisdered the god of war?",
            questionOptions: ["Athena", "Hades", "Ares", "Posiden", "Hercules"],
            questionAnswer: 2
        },
        {
            question: "Which Goddess was is know for granting bountiful harvests and plenty of grains?",
            questionOptions: ["Hepastus", "Athena", "Demeter", "Aphrodite", "Hera"],
            questionAnswer: 2
        },
        {
            question: "Which mythological creature was a combination of a lion, snake and eagle?",
            questionOptions: ["Chimera", "Griffin", "Hippogriff", "Hydra", "Satyr"],
            questionAnswer: 0
        },
        {
            question: "This creature is known in Norse Mythology as the 'World-Serpent'",
            questionOptions: ["Jormungandr", "Jotunn", "Kraken", "Troll", "Warg"],
            questionAnswer: 0
        }


    ];

    var timer = 90;
    var running = false;
    var pick;
    var index;
    var correctAnswers = 0;
    var incorrectAnswer = 0;

    function decrement() {
        $("#timerDown").html(timer);
        timer--;

        if (timer === 0) {
            stop();
        }
    }

    function timerRun() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    };

    function questionFunction() {
        index = Math.floor(Math.random() * choice.length);
        pick = choice[index];
        $(".question").html("<h2>" + pick.question + "</h2>");
        for (var i = 0; i < pick.questionOptions.length; i++) {
            var userGuess = $("<button>");
            userGuess.addClass("answerChoice");
            userGuess.html(pick.questionOptions[i]);
            userGuess.attr("data-guess", i);
            $(".answers1").append(userGuess)
        }

    }

    function questionFunction2() {
        index = Math.floor(Math.random() * choice.length);
        pick = choice[index];
        $(".question2").html("<h2>" + pick.question + "</h2>");
        for (var i = 0; i < pick.questionOptions.length; i++) {
            var userGuess = $("<button>");
            userGuess.addClass("answerChoice");
            userGuess.html(pick.questionOptions[i]);
            userGuess.attr("data-guess", i);
            $(".answers2").append(userGuess)
        }

    }

    questionFunction();
    questionFunction2();

    // $(".answerChoice").on("click", function () {
    //     userGuess = parseInt($(this).attr("data-guess"));
    //     console.log(userGuess)
    //     if (userGuess === pick.questionAnswer) {
    //         correctAnswers++;
    //         console.log(correctAnswers)

    //     }
    // }
    // );

    timerRun();
    decrement();


});

