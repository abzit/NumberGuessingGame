// let randomNum=Math.ceil(Math.random()*10);
// let number
// do{
//     number=prompt("Enter a number: ");
//     if(number==randomNum){
//         console.log("Guessed Correctly")
//     }
//     else if(number<randomNum){
//         console.log("higher")
//     }
//     else if(number>randomNum){
//         console.log("lower");
//     }
//     else{
//         console.log("invalid ")
//     }
// }while(number!=randomNum);
let randomNum=Math.ceil(Math.random()*10);
console.log(randomNum)
let life=3;
function guess(){
    let num=document.getElementById("num").value;
    if(num==randomNum){
        newButton("<p>You have Guessed the Number</p>");
    }
    else if(num<randomNum){
        low_life("<p>Higher</p>");
    }
    else if(num>randomNum){
        low_life("<p>Lower</p>")
    }
    document.getElementById("result").innerHTML=text;
}

function reload()
{
    location.reload();
}




function low_life(value){
    text=value;
    life--;
    if(life==2){
        document.getElementById("heart3").style.color="lightgrey";
    }
    else if(life==1){
        document.getElementById("heart2").style.color="lightgrey";
    }
    else{
        document.getElementById("heart1").style.color="lightgrey";
        newButton("<p>No Life</p>")
    }
}
function newButton(value){
    text=value;
    const retryButton=document.createElement('button');
    retryButton.textContent="Guess another Number";
    document.body.appendChild(retryButton);
    document.getElementById('guess-button').style.visibility='hidden';
    retryButton.addEventListener('click',()=>{
        location.reload();});
    
}