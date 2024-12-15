let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["red","blue","green","yellow"];
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game has Started");
        started=true;
    }
    levelUp();
})
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);
    let btn=document.querySelector(`.${randColor}`);
    gameflash(btn);
}
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
    
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    
}
let buttons=document.querySelectorAll(".btn");
function btnPress(btn){
    btn.addEventListener("click",function(){
        
        let userColor=btn.getAttribute("id");
        userSeq.push(userColor);
        userflash(btn);
        console.log(this);
        checkAns(userSeq.length-1);
    })
}
for(btn of buttons){
    
    //console.log(userSeq);
    btnPress(btn);
}
function checkAns(idx){
    //let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
        console.log("Same Value")
    }
    else{
        h2.innerHTML=`Game Over Your Score Was <b>${level}</b> </br> Press Any Key To Start Again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}
