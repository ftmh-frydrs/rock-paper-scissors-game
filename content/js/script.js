//  const RockEl = document.getElementById("rock");
//  const paperEl = document.getElementById("paper");
//  const scissorsEl=document.getElementById("scissors");
 const userdisplay=document.getElementById('you')
 const computerdisplay=document.getElementById('computer')
 const resultEl=document.getElementById('result')
 const possibleChoices=document.querySelectorAll('button')
 let user
 let computer
 let result

possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click',(e)=>{
    user= e.target.id
    userdisplay.innerHTML=user
    Random()
    Result()
    style()
}))

function Random(){
    const randomNum=Math.floor( Math.random()*3)+1
    if (randomNum===1){
        computer='✊'
    }else if(randomNum===2){
        computer='🤚'
    }else if(randomNum===3){
        computer='✌️'
    }
    computerdisplay.innerHTML=computer
}

function Result(){
    if(computer===user){
        result='Equal'
    }else if(computer==='✊' && user==='🤚'){
        result='Win'
    }else if(computer==='✊' && user==='✌️'){
        result='Lose'
    }else if(computer==='🤚' && user==='✌️'){
        result='Win'
    }else if(computer==='🤚' && user==='✊'){
        result='Lose'
    }else if(computer==='✌️' && user==='🤚'){
        result='Lose'
    }else if(computer==='✌️' && user==='✊'){
        result='Win'
    }
    resultEl.innerHTML=result
}

function style(){
    if(result==='Win'){
        resultEl.style.color="green"
        resultEl.style.fontSize="30px"
    }else if(result==='Lose'){
        resultEl.style.color="red"
        resultEl.style.fontSize="30px"
    }else{
        resultEl.style.color="black"
        resultEl.style.fontSize="30px"
    }
}

