function play(){
    hidelementbyID('home-screen');
    hidelementbyID('End');
    showlementbyID('play-ground');
    const Lastscoreelement=document.getElementById('score');
    const final=parseInt(Lastscoreelement.innerText);
     Lastscoreelement.innerText=0;

     const currentElement = document.getElementById('life');
        let currentLifeText = currentElement.innerText;
        let life = parseInt(currentLifeText);
        currentElement.innerText = 5;


    continuegame();
}
function gameover(){
    hidelementbyID('play-ground')
    showlementbyID('End')

    const Lastscoreelement=document.getElementById('score');
     const final=parseInt(Lastscoreelement.innerText);

     const setElement=document.getElementById('final-score');
     setElement.innerText=final;

}
function handleKeyboardpress(event){
    const playerpressed = event.key;
    console.log('player pressed',playerpressed);
    const currentAlphabetElement=document.getElementById('currentAlphabet')
    const currentAlphabet=currentAlphabetElement.innerText.toLowerCase();
    console.log(playerpressed,currentAlphabet);

   
    if(playerpressed===currentAlphabet){
        console.log('you got a point');
        removeBackgroundColorByID(currentAlphabet)
        const scoreElement=document.getElementById('score');
        let score= parseInt(scoreElement.innerText);

        score = score + 1;
        scoreElement.innerText=score;
       console.log(score);
        continuegame();
    }
   else {
        const currentElement = document.getElementById('life');
        let currentLifeText = currentElement.innerText;
        let life = parseInt(currentLifeText);
        life--;
        currentElement.innerText = life;
        console.log('You missed it');
        
        if (life === 0){
            console.log('Game over');
            gameover();
            
        }
    }
}

document.addEventListener('keyup',handleKeyboardpress);

function continuegame(){
    // 1generate a random alphabet;
    const alphabet=getRandomAlphabet()
    const currentAlphabetElement=document.getElementById('currentAlphabet')
    currentAlphabetElement.innerText=alphabet.toUpperCase();
    addBackgroundColorByID(alphabet);
}

function addBackgroundColorByID(elementID) {
    const element = document.getElementById(elementID);
    // console.log(element);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorByID(elementID) {
    const element = document.getElementById(elementID);
    // console.log(element);
    element.classList.remove('bg-orange-400');
}

function hidelementbyID(elementID){
    const element= document.getElementById(elementID);
    element.classList.add('hidden');
}
function showlementbyID(elementID){
    const element1= document.getElementById(elementID);
    element1.classList.remove('hidden');
}

function getRandomAlphabet(){
    const alphabetstring='abcdefghijklmnopqrstuvwxyz';
   const alphabets= alphabetstring.split('');
//    get a random index 0-25;
const random=Math.random()*25;
const randomNumber=Math.round(random);
const alphabet=alphabets[randomNumber];
// console.log(alphabet);
return alphabet;
}
