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




const popup=document.createElement("div");
popup.classList.add("popup")
popup.id="popup";
const closeButton=document.createElement("button");
const closeButtonIcon=document.createElement("i");
closeButtonIcon.classList.add("fa-solid", "fa-x")
closeButtonIcon.id="closeButtonIcon";
closeButton.classList.add("closeButton")
closeButton.id="closeButton";
closeButton.append(closeButtonIcon);
const heading=document.createElement("h1");
heading.textContent="Welcome to Typing Test"
heading.classList.add("popup-heading");
heading.id='popupHeading';
const para=document.createElement("p");
para.classList.add("popup-para")
para.id='popupPara';
para.textContent="Test your typing skills with 30 sec, 60 sec, 120 sec and custom time duration."
popup.style.position="absolute";
popup.style.top="50%"
popup.style.left="50%"
popup.style.transform="translate(-50%,-50%)"
const startBtn = document.createElement("button");
startBtn.textContent="Proceed";
startBtn.classList.add("startBtn");
startBtn.id="startBtn"
const popHeading2=document.createElement("h2");
popHeading2.textContent="Tell us more about yourself";
popHeading2.classList.add("popHeading2")
popHeading2.id="popHeading2"
const popInput=document.createElement("input")
popInput.classList.add("popInput")
popInput.id="popInput"
popInput.setAttribute('placeholder','Enter your name');
const difficultyDiv=document.createElement("div")
difficultyDiv.classList.add("difficultyDiv")
difficultyDiv.id="difficultyDiv"
const popHeading3=document.createElement("h3");
popHeading3.textContent="Select Difficulty:";
popHeading3.classList.add("popHeading3")
popHeading3.id="popHeading3"
const difficulty = document.createElement("select");
difficulty.id="difficulty";
const easyDifficulty=document.createElement("option")
easyDifficulty.textContent="Easy";
easyDifficulty.value="Easy"
const mediumDifficulty=document.createElement("option")
mediumDifficulty.textContent="Medium";
mediumDifficulty.value="Medium"
const hardDifficulty=document.createElement("option")
hardDifficulty.textContent="Hard";
hardDifficulty.value="Hard"

difficulty.append(easyDifficulty,mediumDifficulty,hardDifficulty)

difficultyDiv.append(popHeading3,difficulty)

popup.append(closeButton,heading,para,startBtn,popHeading2,popInput,difficultyDiv);

document.body.append(popup)
const overlayDiv=document.createElement('div');
overlayDiv.id="overlayDiv"
overlayDiv.classList.add("overlayDiv");
document.body.append(overlayDiv);





closeButton.addEventListener("click",()=>{
    closeButton.parentElement.remove();
    overlayDiv.style.display="none";
})
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




// Result div popup
const resultDiv = document.createElement("div");
resultDiv.id = "resultDiv";
resultDiv.classList.add("resultDiv");

let typingSpeed=34;
const heading2=document.createElement("h2");
let typingCharacter="Turtle"
heading2.textContent="You're a ";
const span=document.createElement("span")
span.textContent=typingCharacter;



heading2.append(span);


const headingOther=document.createElement("h2");
headingOther.textContent="Your typing speed is ";
const span2=document.createElement('span');
span2.textContent=typingSpeed+" WPM";
headingOther.append(span2)


const resultStats=document.createElement("div");
resultStats.id="resultStats";
const wordsResult=document.createElement("div");
wordsResult.id="wordsResult"
const resultHeading1=document.createElement("h3");
resultHeading1.textContent=`WPM : ${typingSpeed}`
wordsResult.append(resultHeading1)
const accuracyResult=document.createElement("div");
accuracyResult.id="accuracyResult"
const resultHeading2=document.createElement("h3");
resultHeading2.textContent=`Accuracy : 94%`
accuracyResult.append(resultHeading2)
const timeTaken=document.createElement("div");
timeTaken.id="timeTaken"
const resultHeading3=document.createElement("h3");
resultHeading3.textContent=`Time : ${timeDuration}`
timeTaken.append(resultHeading3)

const resultCloseBtn = document.createElement("button");
const resultCloseBtnIcon = document.createElement("i");
resultCloseBtnIcon.classList.add("fa-solid", "fa-x");
resultCloseBtn.id="resultCloseBtn";
resultCloseBtn.append(resultCloseBtnIcon);



resultStats.append(wordsResult,accuracyResult,timeTaken);
resultDiv.append(heading2,resultStats,headingOther,resultCloseBtn)
document.body.append(resultDiv);


const gifDiv=document.createElement("div");
gifDiv.id="gifDiv";


document.body.append(gifDiv);




// Adding event listener on result close button
resultCloseBtn.addEventListener("click",()=>{
    gifDiv.style.display="none";
    resultCloseBtn.parentElement.remove();
})