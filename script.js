
//if  u wanna play with computer
let arr = [];
let n = 0;
let num;
let userChoice = confirm(" Do you Wanna play with computer?")
if (userChoice == true) {
    let user = prompt("Choose X or O");
    let comp;
    if (user != "X") {
        comp = "X"
    }
    else if (user != "O") {
        comp = "O"
    }
    let i = 1;
    function clicked(id) {
        if (i == 1) {// users chance
            i = 0;

            document.getElementById('pos').innerHTML = `<p style='color:red; display:inline;'> ${comp}</p>: computer's Chance`

            document.getElementById(id).innerHTML = `<h1 style='font-size:70px; color:blue;'>${user}</h1>`
            arr[n] = id;
            n++;
            console.log("id in case of u " + id)
            console.log(arr)
            document.getElementById(id).disabled = true
            check();

        }
        else if (i == 0) {//computer chance
            let computerClick = false
            while (computerClick != true) {
                num = generateComputer();
                console.log("generated num" + num)
                console.log(document.getElementById(num))
                console.log("num not in array " + !(arr.includes(num)))
                console.log(("num in arrayb" + arr.includes(num)))
                if (!(arr.includes(num))) {
                    console.log("numberb" + num)
                    arr[n] = num;
                    n++;
                    computerClick = true;
                    i = 1;

                    console.log(arr)
                    document.getElementById('pos').innerHTML = `<p style=' color:blue; display:inline;'> ${user}</p>: Your's Chance`
                    document.getElementById(num).innerHTML = `<h1 style='font-size:70px; color:red;'>${comp}</h1>`
                    document.getElementById(num).disabled = true
                    check();
                }
                else {
                    num = generateComputer()
                    console.log("it choose other numr " + num)


                }
            }
        }
    }
}


// if user does not want to play with computer
else {
    let i = 0;
    function clicked(id) {
        if (i == 1) {
            document.getElementById('pos').innerHTML = "<p style='color:red; display:inline;'> O</p>'s Chance"

            document.getElementById(id).innerHTML = "<h1 style='font-size:70px; color:blue;'>X</h1>"
            i = 0;
            document.getElementById(id).disabled = true
            check();

        }
        else if (i == 0) {
            document.getElementById('pos').innerHTML = "<p style=' color:blue; display:inline;'> X</p>'s Chance"
            document.getElementById(id).innerHTML = "<h1 style='font-size:70px; color:red;'>O</h1>"
            i = 1;
            document.getElementById(id).disabled = true
            check();
        }
    }
}
function restart() {
    arr = [];
    n = 0;
    document.querySelector('.winner').style = "display:none;"
    let ar = [one, two, three, four, five, six, seven, eight, nine]// this will select the buttons of this id
    for (let j = 0; j < 9; j++) {
        ar[j].innerText = "";
        ar[j].disabled = false;
    }
}
// this genreates a random number for computer
function generateComputer() {
    let rand = Math.floor(Math.random() * 9)
    switch (rand) {
        case 0:
            num = 'one';
            break;
        case 1:
            num = "two";
            break;
        case 2:
            num = "three";
            break;
        case 3:
            num = "four";
            break;
        case 4:
            num = "five";
            break;
        case 5:
            num = "six";
            break;
        case 6:
            num = "seven";
            break;
        case 7:
            num = "eight";
            break;
        case 8:
            num = "nine";
            break;
    }
    return num;
}

// this will check for the matches in different cells
function check() {
    //it always contain 1st value
    if ((document.getElementById('one').innerText.localeCompare(document.getElementById('two').innerText) === 0 && document.getElementById('one').innerText.localeCompare(document.getElementById('three').innerText) === 0
        || document.getElementById('one').innerText == document.getElementById('four').innerText
        && document.getElementById('one').innerText == document.getElementById('seven').innerText)
        && (document.getElementById('one').innerText !== '')) {

        winner(document.getElementById('one').innerText);
        scoreCalculation(document.getElementById('one').innerText);

    }

    //it will contain 5th value
    else if ((document.getElementById('two').innerText == document.getElementById('five').innerText
        && document.getElementById('two').innerText == document.getElementById('eight').innerText
        || document.getElementById('four').innerText == document.getElementById('five').innerText
        && document.getElementById('four').innerText == document.getElementById('six').innerText
        || document.getElementById('three').innerText == document.getElementById('five').innerText
        && document.getElementById('three').innerText == document.getElementById('seven').innerText)

        && (document.getElementById('five').innerText !== '')) {

        winner(document.getElementById('five').innerText)

        scoreCalculation(document.getElementById('five').innerText);

    }
    //it will contain 9th value
    else if ((document.getElementById('three').innerText == document.getElementById('six').innerText
        && document.getElementById('three').innerText == document.getElementById('nine').innerText
        //for horizontal match
        || document.getElementById('seven').innerText == document.getElementById('eight').innerText
        && document.getElementById('seven').innerText == document.getElementById('nine').innerText
        // for diagonal
        || document.getElementById('one').innerText == document.getElementById('five').innerText
        && document.getElementById('one').innerText == document.getElementById('nine').innerText)

        && (document.getElementById('nine').innerText !== '')) {

        winner(document.getElementById('nine').innerText)

        scoreCalculation(document.getElementById('nine').innerText);


    }
    else if (document.getElementById('nine').innerText !== ''
        && document.getElementById('eight').innerText !== ''
        && document.getElementById('seven').innerText !== ''
        && document.getElementById('six').innerText !== ''
        && document.getElementById('five').innerText !== ''
        && document.getElementById('four').innerText !== ''
        && document.getElementById('three').innerText !== ''
        && document.getElementById('two').innerText !== ''
        && document.getElementById('one').innerText !== '') {
        winner("It's Draw. No One");
        scoreCalculation('D');

    }
}
//To print the winner
function winner(n) {
    let ourDiv = document.querySelector('.winner');
    ourDiv.style = "display:block"
    let p = ourDiv.innerText = `${n} won`
    ourDiv.innerHTML = `${p} <br><br><button class="button" onClick=restart()>play Again</button>`// from here restart function would be called
}
// if (userChoice == true) {
//     let score = {
//         totalGame: 0,
//         computer: 0,
//         user: 0,
//         draw: 0,
//         display: function () {
//             document.getElementById('score').innerText = `Total Games Played: ${score.totalGame}\n No. of times computer Won: ${this.computer} \n No. of games user won: ${this.user} \n No. of draw matches: ${this.draw}`
//         }

//     }
// }
// else {
let score = {
    totalGame: 0,
    X_wins: 0,
    O_wins: 0,
    draw: 0,
    display: function () {
        document.getElementById('score').innerText = `Total Games Played: ${this.totalGame}\n No. of times X Won: ${this.X_wins} \n No. of games O won: ${score.O_wins} \n No. of draw matches: ${this.draw}`
    }

}
// }
// it increment or decrement the value of score
function scoreCalculation(val) {
    console.log(val)
    if (val == 'X') {
        score.X_wins++;
        score.totalGame++
        score.display()
        console.log(val)
    }
    else if (val == 'O') {
        score.O_wins++;
        score.totalGame++
        score.display()
        console.log(val)
    }
    else if (val == 'D') {
        score.draw++;
        score.totalGame++
        score.display();
        console.log(val)
    }
    else {
        if (userChoice == true) {
            console.log("u won")

        } else {
            console.warn("some error would be there")
            score.display()
            console.log(val)
        }
    }
}

