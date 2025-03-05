console.log("hello")


function clearNumber() {
    document.getElementById("playerNumber").value = "";

  }

let x = Math.floor((Math.random() * 10) + 1); 
// Math.random numero aleatorio entre 0 y 1 ese numero x 100 me da un nimero entre 0 y 100.99 despues utilizo el math.floor para convertir el numero en entero pero este lleva el nulero hacia abajo
console.log(x)



function guessNumber(){
    let z = document.getElementById("playerNumber").value;

    if (z == x) {
        alert("Congrats, You Guessed the number")
        
    } else if (z < x) {
        alert("you should look for a larger number");   
    }else {
        alert("you should look for a small number");
    }

}







 
