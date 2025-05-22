let gameseq=[];
let userseq = [];
let started = false;
let level =0;
let h3 = document.querySelector("h3");

// jitne bhi btn variable le rhe sb alg h sbka scope uske block m hi h

let btns = ["yello","green","red","purple"];
//for any key press to start the game
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("key pressed");
    started=true;
    
    levelup();
    }
});
// 3rd step jab btn click hogi to 1 sec uska backround colour white hoga flash hoga setimeout ki help se, then 1 sec k bad vapas vo colour hat jaega
function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},1000);
}
function userFlash(btn){
btn.classList.add("userflash");
setTimeout(function(){
    btn.classList.remove("userflash");
},1000);
}
// 2nd step level update and btn is flashing
function levelup(){
    userseq =[];// for reset userseq jese hi level up hoga vapas new seq aaega

    level++;
    h3.innerText = `Level ${level}`;
    //random button to click
    // generate random index from 0,1,2,3 from btns array
    let randIndx = Math.floor(Math.random()*3);
    let randcolor = btns[randIndx]; // random colour aa jaega by generate random idx bcz in indx colors is store
    let randbtn = document.querySelector(`.${randcolor}`);
//   console.log(randIndx);
//    console.log(randbtn);
//     console.log(randcolor);
  gameseq.push(randcolor);//randcolor ko hmane gameseq m isliye dala taki ham seq match kr skke game or user ka 
  console.log(gameseq);
    gameFlash(randbtn);

}
//4rth step user ki taraf se button press hoga to event listner lgaege
function btnPress(){
    //sbse phle detect krege konsi btn press hui hai so we use this , isse pta chlega ki jo btn click hui h vhi btn pta chlegi
console.log(this);
    let btn = this;
userFlash(btn);
usercolor = btn.getAttribute("id"); // ye getattribyt hmne color lene k lia h html code m id dekr
userseq.push(usercolor);
console.log(usercolor);
checkAns(userseq.length - 1);// userseq ki last vala indx ki value
};
//5th matching the gameseq with userseq
function checkAns(indx){
  
    if(userseq[indx]===gameseq[indx]){
        //match krne k bi do cases aaege-
        //1. ya to vo color game seq ke middle tk hoga
        //2. ya last index pr gameseq ke
        if(userseq.length == gameseq.length){
       setTimeout(levelup,1000);
    }
    }else {
    console.log("Wrong input! Game Over.");
    h3.innerHTML = `Game over! your score was <b>${level}</b> <br> Press any key to restart`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
   document.querySelector("body").style.backgroundColor= "white";
    },150);
    reset();
}
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
//6th step
function reset(){ //jo values start m di thi
started = false;
 gameseq=[];
userseq = [];
level =0;

}