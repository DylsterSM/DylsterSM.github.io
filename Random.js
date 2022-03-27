var cssbtn = document.getElementById('cssbtn');


let index = 0;

const colors = ['salmon', 'green', 'blue', 'purple'];

cssbtn.addEventListener('click', function onClick() {
  cssbtn.style.backgroundColor = colors[index];
  cssbtn.style.color = 'white';

  index = index >= colors.length - 1 ? 0 : index + 1;
});

const htmlbtn = document.getElementById("htmlbtn");

htmlbtn.addEventListener("click", ()=>{

    if(htmlbtn.innerText === "Green"){
        htmlbtn.innerText = "Still Green";
    }else{
        htmlbtn.innerText= "Green";
    }
});

function alertPop() {
    var str = document.getElementById("text1").value;
    alert("Your alert is: " + str);

}

/*Now use a randomization javascript function to set up a random number generator that takes a number range that a user enters and gives back a random number when they click a button.*/
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const rollDice = () => getRandomNumber(1, 6);

document.getElementById("roll").addEventListener("click", function () {
  
    const player1 = document.getElementById("player1").value;
    const player2 = document.getElementById("player2").value;
  
    
    const player1Score = rollDice();
    const player2Score = rollDice();
  
    
    let result = "";
  
    
    if (player1Score > player2Score) {
      result = `${player1} won the round`;
    } else if (player2Score > player1Score) {
      result = `${player2} won the round`;
    } else {
      result = "This round is tied";
    }
  
    
    document.getElementById("results").innerHTML = `
    <p>${player1} => ${player1Score}</p>
    <p>${player2} => ${player2Score}</p>
    <p>${result}</p>
    `;
  });
