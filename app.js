const text = "the quick brown fox jumps over the lazy dog a journey of a thousand miles begins with a single step practice makes a man perfect every cloud has a silver lining actions speak louder than words time and tide wait for none the early bird catches the worm honesty is the best policy where there is a will there is a way slow and steady wins the race all that glitters is not gold better late than never knowledge is power hard work beats talent when talent does not work hard success is not final failure is not fatal it is the courage to continue that counts the only way to do great work is to love what you do in the middle of every difficulty lies opportunity we must accept finite disappointment but never lose infinite hope the future belongs to those who believe in the beauty of their dreams it does not matter how slowly you go as long as you do not stop believe you can and you are halfway there everything you have ever wanted is on the other side of fear do what you can with all you have wherever you are either you run the day or the day runs you the secret of getting ahead is getting started your time is limited so do not waste it living someone else life if you are going through hell keep going only those who dare to fail greatly can ever achieve greatly";
const typingSound=new Audio();
const arr1 = text.split(" ");

const frag = document.createDocumentFragment();
let wordsArray = [];
for (let i = 0; i < arr1.length; i++) {
    wordsArray.push(arr1[i].split(""));
}
const alphaArray = wordsArray.flat(Infinity);

console.log(wordsArray);

const wordDiv = document.querySelector(".textDisplay");
const inputDiv = document.querySelector(".typingDiv");

function fillWordContainer() {
    const startIdx = Math.floor(Math.random() * (247 - 50))
    const endIdx = startIdx + 50

    const fragment = document.createDocumentFragment();
    for (let i = startIdx; i <= endIdx; i++) {
      
        const wordSpan = document.createElement('span')
        wordSpan.classList.add('word')

      
        arr1[i].split("").forEach(letter => {
            const letterSpan = document.createElement('span')
            letterSpan.classList.add('letter')
            letterSpan.textContent = letter
            wordSpan.appendChild(letterSpan)
        })

     
        const spaceSpan = document.createElement('span')
        spaceSpan.classList.add('space')
        spaceSpan.textContent = " "
        wordSpan.appendChild(spaceSpan)

        fragment.appendChild(wordSpan)
    }
    wordDiv.appendChild(fragment);
}
fillWordContainer();


let currentIndex=0;
let words=0;
inputDiv.addEventListener("input",(e)=>{
    let input=e.data;
   
    checkAndCompare(input);
    
})

function checkAndCompare(input){

    let div=document.querySelector('.textDisplay')
    div.children[currentIndex].children[words].style.transition="all 0.1s ease-in";
    if(input==" " && input==div.children[currentIndex].children[words].textContent){
       console.log("space printed");
        typingSound.src="./sounds/2.mp3"
        typingSound.play();
       currentIndex++;
       words=0;
    }
    else if(input==div.children[currentIndex].children[words].textContent){
        div.children[currentIndex].children[words].style.color="green";
        words++;
         typingSound.src="./sounds/2.mp3"
        typingSound.play();
        console.log("input matched successfully");
        
    }else{
        typingSound.src="./sounds/typing-error.mp3"
        typingSound.play();
        div.children[currentIndex].children[words].style.color="red";
        div.children[currentIndex].children[words].style.backgroundColor="black";
        div.children[currentIndex].children[words].style.display = "inline-block";
        div.children[currentIndex].children[words].style.transform="scale(1.3)";
         console.log("wrong input");
    }

}
let timerStatDiv=document.querySelector('#timerStat');
let timer = document.querySelector('#timerStat>.statValue>p>span');
timer.style.transition="all 0.2s ease-in";

let durationDivs=document.querySelectorAll('.durationDivsChild')
let durationArray=Array.from(durationDivs);
for(let duration of durationArray){
    duration.addEventListener('click',(e)=>{
        timer.textContent=e.target.textContent;
    })
}

const customButton=document.querySelector("#customButton");
const customInput=document.querySelector("#customInput")
customButton.addEventListener('click',(e)=>{
    timer.textContent=customInput.textContent;
})  



const overlayDiv = document.querySelector("#overlayDiv");
const closeButton=document.querySelector("#popCloseBtn");
closeButton.addEventListener("click",()=>{
    closeButton.parentElement.remove();
    overlayDiv.style.display="none";
})
const startBtn=document.querySelector("#startBtn");
startBtn.addEventListener("click",()=>{
    startBtn.parentElement.remove();
    overlayDiv.style.display="none";
})


let timeDuration=+timer.textContent;
// const countDownTimer=setInterval(()=>{
//     timer.textContent-=1;
//     if(timer.textContent<=10){
//         typingSound.src="./sounds/10sec.mp3"
//         typingSound.play();
//         timerStatDiv.style.borderColor="red";
//        Array.from(timerStatDiv.children).forEach(child=>{
//         child.style.color="red"
//        });
//     }
// },1000)

// setTimeout(() => {
//     clearInterval(countDownTimer);
//      typingSound.src="./sounds/whatsapp-send.mp3"
//      typingSound.play();
// }, timeDuration*1000);




// Result div popup section
const resultDiv=document.querySelector("#resultDiv");
let typingSpeed=34;
const resultHeadingSpan1=document.querySelector(".resultHeading1>span");
const resultHeadingSpan2=document.querySelector(".resultHeading2>span");

let typingCharacter="Turtle"
resultHeadingSpan1.textContent=typingCharacter;
resultHeadingSpan2.textContent=typingSpeed;

const gifDiv=document.querySelector("#gifDiv");
// Adding event listener on result close button
const resultCloseBtn=document.querySelector("#resultCloseBtn");
resultCloseBtn.addEventListener("click",()=>{
    gifDiv.style.display="none";
    resultCloseBtn.parentElement.remove();
})

