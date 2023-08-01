// let result = document.getElementById("display")

// function calculate(number){
//     result.value += number
// }

// function Result(){
//     try{
//         result.value = eval(result.value)
//     }
//     catch{
//         alert("Invalid Input")
//     }
// }

// function Clear(){
//     result.value = " "
// }

// function Delete(){
//     result.value = result.value.slice(0,-1)
// }

let screen = document.getElementById("display");
let button = document.querySelectorAll("button");
let screenValue = "";
for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);

        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue)
        }
        else if (buttonText == "Del"){
            screen.value = screenValue.slice(0,-1)
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue; 
        }
    })
}
