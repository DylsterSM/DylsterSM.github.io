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


/*var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var spawnLineY = 5;
var spawnRate = 1000;
var spawnRateOfDescent = 0.75;
var lastSpawn = -1;
var objects = [];
var startTime = Date.now();
animate();

function spawnRandomObject() {

      var t;
    if (Math.random() < 0.50) {
        t = "red";
    } else {
        t = "blue";
    }
    var object = {
        
        type: t,
        x: Math.random() * (canvas.width - 30) + 15,
        y: spawnLineY,
    }
    objects.push(object);
}

function animate() {

    var time = Date.now();

    if (time > (lastSpawn + spawnRate)) {
        lastSpawn = time;
        spawnRandomObject();
    }
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    ctx.beginPath();
    ctx.moveTo(0, spawnLineY);
    ctx.lineTo(canvas.width, spawnLineY);
    ctx.stroke();

    for (var i = 0; i < objects.length; i++) {
        var object = objects[i];
        object.y += spawnRateOfDescent;
        ctx.beginPath();
        ctx.arc(object.x, object.y, 8, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = object.type;
        ctx.fill();
    }

}*/


