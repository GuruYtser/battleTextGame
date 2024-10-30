const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const text = document.getElementById('text');
const health = document.getElementById('health');
const xp = document.getElementById('xp');
const weapon = document.getElementById('weapon');
const power = document.getElementById('power');
const money = document.getElementById('money');
const main = document.getElementsByTagName('main')[0];

main.classList.add('words');

const forestPlaces = [
    {
        placeName: `Entering WestWoods🌵`,
        buttons: westWoods() 
    },
    {
        placeName: `Entering NorthWoods🌲`,
        buttons: northWoods() 
    },
    {
        placeName: `Entering EastWoods🌳`,
        buttons: eastWoods()
    },
    {
        placeName: `Entering SouthWoods🌴`,
        buttons: southWoods()
    },
]


class weapons{
    constructor(weapon, power){
        this.weapon = weapon;
        this.power = power;
    }
    wet(){
        weapon.innerText = `${this.weapon}`;
        power.innerText = this.power;
    }
}
let dagger = new weapons(`dagger`, 100);
let hammer = new weapons(`hammer`, 200);



function westWoods(){
    button1.innerText = ``
    button2.innerText = ``
    button3.innerText = ``
    button1.addEventListener('click', () =>{
        
    });
}
function northWoods(){
    button1.innerText = ``
}
function eastWoods(){
    button1.innerText = ``
}
function southWoods(){
    button1.innerText = ``
}
let healths = 100;
let xps = 0;
let powers = 0;
let moneys = 0;

health.innerText = healths;
xp.innerText = xps;
power.innerText = powers;
money.innerText = moneys;

function fight(){
    text.innerText = `be careful`;
    button1.innerText = `fight the boss`;
    button2.innerText = `Go back`;
    button3.innerText = `go to forest`;
    button1.addEventListener()  
    button2
}
function buy(){
    text.classList.add('words');
    text.innerText = `What do you want to buy?`;
    button1.innerText = `hammer(50)`;
    button2.innerText = `dagger(30)`;
    button3.innerText = `Go back`;
    button1.addEventListener('click', () =>{
        if(moneys < 50){text.innerText = `insufficient money`;}
        else if(moneys >= 50){weapon.innerText = hammer.wet();}
        else if(weapon.innerText = hammer){text.innerText = 'you already have one'};
    });
    button2.addEventListener('click', () =>{
        if(moneys < 30){text.innerText = `insufficient money`;}
        else weapon.innerText = dagger.wet();
    });
    button3.addEventListener('click', back);
} 

function forestEntered(){
    text.innerText = `you've entered the forest. You better watch out!`;
    text.classList.add('words');
    button1.innerText = `Go back?`;
    button2.innerText = `Gather Wood`;
    button3.innerText = `Explore`;
    button1.addEventListener('click', back);
    button2.addEventListener('click', () =>{
        text.innerText = `Gathered Wood earned ${moneys += 5}`;
        money.innerText = moneys
    }) 
    button3.addEventListener('click', () =>{
    main.classList.add('animation');
    let index = Math.floor(Math.random() * forestPlaces.length);
    const {placeName, buttons} = forestPlaces[index];
    text.innerText = placeName;
    setTimeout(() =>{
        buttons();
    }, 3000);
    });
};
function bossfight(){
    text.innerText = `are you sure you wanna fight the boss?`;
    text.classList.add('words');
    button1.innerText = `retreat`;
    button2.innerText = `Fight`;
    button3.innerText = ``;
    button2.addEventListener('click', ()=>{
    if(weapon.innerText === "hammer"){healths -= 50}
    else if(weapon.innerText === "dagger"){
    health.innerText = 0
    text.innerText = `You Died`;
    weapon.innerText = '';
    power.innerText = 0;
    health.innerText = 100;
    moneys = 0;
    setTimeout(()=>{
     back();    
    }, 3000);
}
    else if(weapon.innerText === ""){text.innerText = `you don't have weapon to fight this boss sicko!`};  
    });
    button1.addEventListener('click', ()=>{
        back();
    })
    button2.addEventListener('click', ()=>{

    })
}
function heretics(){
    button1.innerText = `Fight Heretics`;
    button2.innerText = `Run`;
    button3.innerText = `Kill slimes`;
    button1.addEventListener('click', ()=>{
        healths -= 10;
        moneys += 10;
        text.innerText = `Heretics killed earned ${moneys}`;
    })
    button2.addEventListener('click', ()=>{
        forestEntered();
    });
    button3.addEventListener('click', ()=>{
        text.innerText = `Slimes killed earned${moneys += 10}`;
        money.innerText = moneys;
    })
}
function back(){
    text.classList.add('words');
    button1.innerText = `Go to forest`;
    button2.innerText = `Fight the boss`;
    button3.innerText = `Go to shop`;
    text.innerText = `You're in your camp⛺`;
    button1.addEventListener('click', forestEntered);
    button2.addEventListener('click', bossfight);
    button3.addEventListener('click', buy);
    if(healths < 98){health.innerText = healths = 100}
    else if(healths == 100){text.innerText = ``}
}

button1.addEventListener('click', forestEntered);
button2.addEventListener('click', bossfight);
button3.addEventListener('click', buy);
button1.innerText = `forest`;
button2.innerText = `boss`;
button3.innerText = `store`;