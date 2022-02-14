const name = document.querySelector('#name');
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
let count = 0;
let lastChar = count%10;
let interval;
const food = 'Костя';
const foodEnd = 'Кости'

name.innerText =  food + ' хуесос';
start.innerText = 'Начать хуесосить ' + food;
reset.innerText = 'Начать занаво хуесосить ' + food;
function cyberbulling(){
    if(lastChar == 0){
        name.innerText =  food + ' хуесос';
    }
    else if(lastChar == 1){
        name.innerText = food + ' даун';
    }
    else if(lastChar == 2){
        name.innerText = 'У ' + foodEnd +  ' нет прав';
    }
    else if(lastChar == 3){
        name.innerText = food + ' педик';
    }
    else if(lastChar == 4){
        name.innerText = 'У ' + foodEnd + ' мать шалава';
    }
    else if(lastChar == 5){
        name.innerText = 'У ' + foodEnd + ' батя педик';
    }
    else if(lastChar == 6){
        name.innerText = food + ' сын мёртвой гнилозубой';
    }
    else if(lastChar == 7){
        name.innerText = food + ' долбаёб';
    }
    else if(lastChar == 8){
        name.innerText = food + ' иди нахуй';
    }
    else if(lastChar == 9){
        name.innerText = food + ' щёгол ебаный во все дыры';
    }

}

start.onclick = function(){
    clearInterval(interval);
    interval = setInterval(function(){
        count++;
        lastChar = count%10;
        cyberbulling();
    }, 1000)
}

reset.onclick = function(){
    count = 0;
    lastChar = count%10;
    name.innerText = food + ' хуесос';
}