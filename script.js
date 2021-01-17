// Player name
        var player1 = "Player1";
        var player2 = "Player2";

        // Function to change the player name
        function editNames() {
            player1 = prompt("Change Player1 name");
            player2 = prompt("Change player2 name");
            player1=player1.slice(0,1).toUpperCase()+player1.slice(1,player1.length);
            player2=player2.slice(0,1).toUpperCase()+player2.slice(1,player2.length);
            document.querySelector(".player1")
                            .innerHTML = player1;

            document.querySelector(" .player2")
                            .innerHTML = player2;
        }

        // Function to roll the dice
        function rollTheDice() {
            setTimeout(function () {
                var randomNumber1 = Math.floor(Math.random() * 6) + 1;
                var randomNumber2 = Math.floor(Math.random() * 6) + 1;

                document.querySelector(".img1").setAttribute("src",
                    "images/dice" + randomNumber1 + ".png");

                document.querySelector(".img2").setAttribute("src",
                    "images/dice" + randomNumber2 + ".png");

                if (randomNumber1 === randomNumber2) {
                    document.querySelector("h1").innerHTML = "Draw!";
                }

                else if (randomNumber1 < randomNumber2) {
                    document.querySelector("h1").innerHTML
                        = (player2 + " Wins!");
                }

                else {
                    document.querySelector("h1").innerHTML
                        = (player1 + " Wins!");
                }
            }, 500);
        }
