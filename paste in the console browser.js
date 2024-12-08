// puxxa goated 🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐
// puxxa goated 🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐
// puxxa goated 🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐
// puxxa goated 🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐
// puxxa goated 🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐
// puxxa goated 🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐

var Version = '1.0.25'

var questions = [];
var info = {
    numQuestions: 0,
    questionNum: -1,
    lastAnsweredQuestion: -1,
    defaultIL:true,
    ILSetQuestion:-1,
};
var PPT = 950;
var Answered_PPT = 950;
var autoAnswer = false;
var showAnswers = false;
var inputLag = 100;

function FindByAttributeValue(attribute, value, element_type)    {
  element_type = element_type || "*";
  var All = document.getElementsByTagName(element_type);
  for (var i = 0; i < All.length; i++)       {
    if (All[i].getAttribute(attribute) == value) { return All[i]; }
  }
}

const uiElement = document.createElement('div');
uiElement.className = 'floating-ui';
uiElement.style.position = 'absolute';
uiElement.style.top = '5%';
uiElement.style.left = '5%';
uiElement.style.width = '33vw';
uiElement.style.height = 'auto';
uiElement.style.backgroundColor = '#381272';
uiElement.style.borderRadius = '1vw';
uiElement.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)';
uiElement.style.zIndex = '9999';

const handle = document.createElement('div');
handle.className = 'handle';
handle.style.fontFamily = '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;';
handle.style.fontSize = '1.5vw';
handle.textContent = 'Puxxa kahoot hacks';
handle.style.color = 'white';
handle.style.width = '97.5%';
handle.style.height = '2.5vw';
handle.style.backgroundColor = '#321066';
handle.style.borderRadius = '1vw 1vw 0 0';
handle.style.cursor = 'grab';
handle.style.textAlign = 'left';
handle.style.paddingLeft = '2.5%';
handle.style.lineHeight = '2vw';
uiElement.appendChild(handle);

const closeButton = document.createElement('div');
closeButton.className = 'close-button';
closeButton.textContent = '✕';
closeButton.style.position = 'absolute';
closeButton.style.top = '10px';
closeButton.style.right = '10px';
closeButton.style.width = '40px'; 
closeButton.style.height = '40px'; 
closeButton.style.backgroundColor = '#e74c3c'; 
closeButton.style.color = 'white';
closeButton.style.borderRadius = '5px'; 
closeButton.style.display = 'flex';
closeButton.style.justifyContent = 'center';
closeButton.style.alignItems = 'center';
closeButton.style.cursor = 'pointer';
closeButton.style.fontSize = '1.5em';
closeButton.style.transition = 'background-color 0.3s, transform 0.3s, box-shadow 0.3s'; 
closeButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';

closeButton.addEventListener('mouseover', () => {
    closeButton.style.backgroundColor = '#c0392b';  
    closeButton.style.transform = 'scale(1.1)'; 
    closeButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)'; 
});

closeButton.addEventListener('mouseout', () => {
    closeButton.style.backgroundColor = '#e74c3c'; 
    closeButton.style.transform = 'scale(1)'; 
    closeButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)'; 
});

handle.appendChild(closeButton);

const minimizeButton = document.createElement('div');
minimizeButton.className = 'minimize-button';
minimizeButton.textContent = '─';
minimizeButton.style.position = 'absolute';
minimizeButton.style.top = '10px';
minimizeButton.style.right = '60px'; 
minimizeButton.style.width = '40px'; 
minimizeButton.style.height = '40px'; 
minimizeButton.style.backgroundColor = '#3498db'; 
minimizeButton.style.color = 'white';
minimizeButton.style.borderRadius = '5px'; 
minimizeButton.style.display = 'flex';
minimizeButton.style.justifyContent = 'center';
minimizeButton.style.alignItems = 'center';
minimizeButton.style.cursor = 'pointer';
minimizeButton.style.fontSize = '1.5em';
minimizeButton.style.transition = 'background-color 0.3s, transform 0.3s, box-shadow 0.3s'; 
minimizeButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';

minimizeButton.addEventListener('mouseover', () => {
    minimizeButton.style.backgroundColor = '#2980b9'; 
    minimizeButton.style.transform = 'scale(1.1)'; 
    minimizeButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)'; 
});

minimizeButton.addEventListener('mouseout', () => {
    minimizeButton.style.backgroundColor = '#3498db'; 
    minimizeButton.style.transform = 'scale(1)'; 
    minimizeButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)'; 
});

handle.appendChild(minimizeButton);

const header = document.createElement('h2');
header.textContent = 'QUIZ ID';
header.style.display = 'block';
header.style.margin = '1vw';
header.style.textAlign = 'center';
header.style.fontFamily = '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;';
header.style.fontSize = '2vw';
header.style.color = 'white';
header.style.textShadow = `
  -1px -1px 0 rgb(47, 47, 47),
  1px -1px 0 rgb(47, 47, 47),
  -1px 1px 0 rgb(47, 47, 47),
  1px 1px 0 rgb(47, 47, 47)
`;

uiElement.appendChild(header);

const inputContainer = document.createElement('div');
inputContainer.style.display = 'flex';
inputContainer.style.justifyContent = 'center';

const inputBox = document.createElement('input');
inputBox.type = 'text';
inputBox.style.color = 'black';
inputBox.placeholder = 'Quiz Id here...';
inputBox.style.width = '90%'; 
inputBox.style.height = '40px'; 
inputBox.style.margin = '10px 0'; 
inputBox.style.padding = '10px';
inputBox.style.border = '1px solid #ccc'; 
inputBox.style.borderRadius = '0'; 
inputBox.style.outline = 'none';
inputBox.style.textAlign = 'center';
inputBox.style.fontSize = '1em'; 
inputBox.style.transition = 'border-color 0.3s'; 

inputBox.addEventListener('focus', () => {
    inputBox.style.borderColor = '#3498db'; 
});

inputBox.addEventListener('blur', () => {
    inputBox.style.borderColor = '#ccc'; 
});

inputContainer.appendChild(inputBox);
uiElement.appendChild(inputContainer);

const header2 = document.createElement('h2');
header2.textContent = 'POINTS PER QUESTION';
header2.style.display = 'block';
header2.style.margin = '1vw';
header2.style.textAlign = 'center';
header2.style.fontFamily = '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;';
header2.style.fontSize = '2vw';
header2.style.color = 'white';
header2.style.textShadow = `
  -1px -1px 0 rgb(47, 47, 47),
  1px -1px 0 rgb(47, 47, 47),
  -1px 1px 0 rgb(47, 47, 47),
  1px 1px 0 rgb(47, 47, 47)
`;

uiElement.appendChild(header2);

const sliderContainer = document.createElement('div');
sliderContainer.style.width = '80%';
sliderContainer.style.margin = '1vw auto';
sliderContainer.style.display = 'flex';
sliderContainer.style.alignItems = 'center';
sliderContainer.style.justifyContent = 'center';

const pointsLabel = document.createElement('span');
pointsLabel.textContent = 'Points per Question: 950';
pointsLabel.style.fontFamily = '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;';
pointsLabel.style.fontSize = '1.5vw';
pointsLabel.style.margin = '1vw';
pointsLabel.style.marginLeft = '1vw';
pointsLabel.style.marginRight = '1vw';
pointsLabel.style.color = 'white';
sliderContainer.appendChild(pointsLabel);

const pointsSlider = document.createElement('input');
pointsSlider.type = 'range';
pointsSlider.min = '500';
pointsSlider.max = '1000';
pointsSlider.value = '950';
pointsSlider.style.width = '70%';
pointsSlider.style.marginLeft = '1vw';
pointsSlider.style.marginRight = '1vw';


pointsSlider.style.border = 'none';
pointsSlider.style.outline = 'none';
pointsSlider.style.cursor = 'ew-resize';
pointsSlider.className = 'custom-slider';


sliderContainer.appendChild(pointsSlider);


uiElement.appendChild(sliderContainer);

pointsSlider.addEventListener('input', () => {
    const points = +pointsSlider.value;
    PPT = points;
    pointsLabel.textContent = 'Points per Question: ' + points;
});

const header3 = document.createElement('h2');
header3.textContent = 'ANSWERING';
header3.style.display = 'block';
header3.style.margin = '1vw';
header3.style.textAlign = 'center';
header3.style.fontFamily = '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;';
header3.style.fontSize = '2vw';
header3.style.color = 'white';
header3.style.textShadow = `
  -1px -1px 0 rgb(47, 47, 47),
  1px -1px 0 rgb(47, 47, 47),
  -1px 1px 0 rgb(47, 47, 47),
  1px 1px 0 rgb(47, 47, 47)
`;

uiElement.appendChild(header3);

const autoAnswerSwitchContainer = document.createElement('div');
autoAnswerSwitchContainer.className = 'switch-container';
autoAnswerSwitchContainer.style.display = 'flex';
autoAnswerSwitchContainer.style.alignItems = 'center';
autoAnswerSwitchContainer.style.justifyContent = 'center';
uiElement.appendChild(autoAnswerSwitchContainer);

const autoAnswerLabel = document.createElement('span');
autoAnswerLabel.textContent = 'Auto Answer';
autoAnswerLabel.className = 'switch-label';
autoAnswerLabel.style.fontFamily = '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;';
autoAnswerLabel.style.fontSize = '1.5vw';
autoAnswerLabel.style.color = 'white';
autoAnswerLabel.style.margin = '2.5vw'
autoAnswerSwitchContainer.appendChild(autoAnswerLabel);

const autoAnswerSwitch = document.createElement('label');
autoAnswerSwitch.className = 'switch';
autoAnswerSwitchContainer.appendChild(autoAnswerSwitch);

const autoAnswerInput = document.createElement('input');
autoAnswerInput.type = 'checkbox';
autoAnswerInput.addEventListener('change', function() {
    autoAnswer = this.checked;
    info.ILSetQuestion = info.questionNum
});
autoAnswerSwitch.appendChild(autoAnswerInput);

const autoAnswerSlider = document.createElement('span');
autoAnswerSlider.className = 'slider';
autoAnswerSwitch.appendChild(autoAnswerSlider);

const showAnswersSwitchContainer = document.createElement('div');
showAnswersSwitchContainer.className = 'switch-container';
showAnswersSwitchContainer.style.display = 'flex';
showAnswersSwitchContainer.style.alignItems = 'center';
showAnswersSwitchContainer.style.justifyContent = 'center';
uiElement.appendChild(showAnswersSwitchContainer);

const showAnswersLabel = document.createElement('span');
showAnswersLabel.textContent = 'Show Answers';
showAnswersLabel.className = 'switch-label';
showAnswersLabel.style.fontFamily = '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;';
showAnswersLabel.style.fontSize = '1.5vw';
showAnswersLabel.style.color = 'white';
showAnswersLabel.style.margin = '2.5vw'
showAnswersSwitchContainer.appendChild(showAnswersLabel);

const showAnswersSwitch = document.createElement('label');
showAnswersSwitch.className = 'switch';
showAnswersSwitchContainer.appendChild(showAnswersSwitch);

const showAnswersInput = document.createElement('input');
showAnswersInput.type = 'checkbox';
showAnswersInput.addEventListener('change', function() {
    showAnswers = this.checked;
});
showAnswersSwitch.appendChild(showAnswersInput);

const showAnswersSlider = document.createElement('span');
showAnswersSlider.className = 'slider';
showAnswersSwitch.appendChild(showAnswersSlider);


const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { color: #ff0000; }
        16% { color: #ff7f00; }
        33% { color: #ffff00; }
        50% { color: #00ff00; }
        66% { color: #0000ff; }
        83% { color: #4b0082; }
        100% { color: #8b00ff; }
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: url('https://media2.giphy.com/media/YqhIK6Gbor6CLeloBq/giphy.gif?cid=6c09b9528jgpkz0ib7fxyx88lkk3ct0ssuztfhpael3l6nnw&ep=v1_gifs_search&rid=giphy.gif&ct=g') no-repeat center center fixed; 
        background-size: cover; /* Assicura che il fondo copra tutta la schermata */
    }

    .floating-ui {
        background: url('https://media2.giphy.com/media/YqhIK6Gbor6CLeloBq/giphy.gif?cid=6c09b9528jgpkz0ib7fxyx88lkk3ct0ssuztfhpael3l6nnw&ep=v1_gifs_search&rid=giphy.gif&ct=g') no-repeat center center; /* Sfondo del menu */
        background-size: cover; /* Assicura che copra il contenitore */
        border-radius: 10px; /* Bordes arrotondati */
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Ombra */
        padding: 20px; /* Spaziatura interna */
        color: white; /* Testo bianco per contrasto */
    }

    .handle {
        background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); /* Sfondo arcobaleno statico */
        animation: rainbow 5s infinite; /* Animazione arcobaleno */
        color: white;
        border-radius: 10px 10px 0 0; /* Bordes arrotondati sopra */
        padding: 10px;
        text-align: center; /* Centrare il testo */
    }

    .close-button, .minimize-button {
        background-color: #ff3d00;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

    .close-button:hover, .minimize-button:hover {
        background-color: #ff5722;
    }

    .slider {
        animation: rainbow 5s infinite; /* Slider con effetto arcobaleno */
        border-radius: 5px;
    }

    .slider:before {
        background-color: #ffffff;
    }

    .switch {
        background-color: #6200ea;
    }

    .switch input:checked + .slider {
        background-color: #03dac5;
    }

    .switch-label {
        color: #333;
    }

    h2, h1 {
        color: white; /* Colore per contrasto */
    }

    span {
        animation: rainbow 5s infinite; /* Effetto arcobaleno sul testo */
    }
`;
document.head.appendChild(style);





const header4 = document.createElement('h2');
header4.textContent = 'INFO';
header4.style.display = 'block';
header4.style.margin = '1vw';
header4.style.textAlign = 'center';
header4.style.fontFamily = '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;';
header4.style.fontSize = '2vw';
header4.style.color = 'white';
header4.style.textShadow = `
  -1px -1px 0 rgb(47, 47, 47),
  1px -1px 0 rgb(47, 47, 47),
  -1px 1px 0 rgb(47, 47, 47),
  1px 1px 0 rgb(47, 47, 47)
`;

uiElement.appendChild(header4)

const questionsLabel = document.createElement('span');
questionsLabel.textContent = 'Question 0 / 0';
questionsLabel.style.display = 'block';
questionsLabel.style.fontFamily = '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;';
questionsLabel.style.fontSize = '1.5vw';
questionsLabel.style.textAlign = 'center';
questionsLabel.style.margin = '1vw';
questionsLabel.style.marginLeft = '1vw';
questionsLabel.style.marginRight = '1vw';
questionsLabel.style.color = 'white';
uiElement.appendChild(questionsLabel);

const inputLagLabel = document.createElement('span');
inputLagLabel.textContent = 'Input lag : 125 ms';
inputLagLabel.style.display = 'block';
inputLagLabel.style.fontFamily = '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;';
inputLagLabel.style.fontSize = '1.5vw';
inputLagLabel.style.textAlign = 'center';
inputLagLabel.style.margin = '1vw';
inputLagLabel.style.marginLeft = '1vw';
inputLagLabel.style.marginRight = '1vw';
inputLagLabel.style.color = 'white';
uiElement.appendChild(inputLagLabel);

const versionLabel = document.createElement('h1');
versionLabel.textContent = 'puxxa kahoot hack V'+Version;
versionLabel.style.fontFamily = '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;';
versionLabel.style.fontSize = '2.5vw';
versionLabel.style.display = 'block';
versionLabel.style.textAlign = 'center';
versionLabel.style.marginTop = '3.5vw';
versionLabel.style.marginLeft = '1vw';
versionLabel.style.marginRight = '1vw';
versionLabel.style.color = 'white';
uiElement.appendChild(versionLabel);

const githubContainer = document.createElement('div');
githubContainer.style.textAlign = 'center';
githubContainer.style.marginTop = '1vw';

const githubLabel = document.createElement('span');
githubLabel.textContent = 'GitHub: ';
githubLabel.style.fontFamily = '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;';
githubLabel.style.fontSize = '1.5vw';
githubLabel.style.margin = '0 1vw';
githubLabel.style.color = 'white';
githubContainer.appendChild(githubLabel);

const githubUrl = document.createElement('a');
githubUrl.textContent = 'puxxa';
githubUrl.href = 'https://github.com/puxxa';
githubUrl.target = '_blank';
githubUrl.style.fontFamily = '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;';
githubUrl.style.fontSize = '1.5vw';
githubUrl.style.margin = '0 1vw';
githubUrl.style.color = 'white';
githubContainer.appendChild(githubUrl);

const githubUrl2 = document.createElement('a');
githubUrl2.textContent = 'puxxa youtube';
githubUrl2.href = 'https://www.youtube.com/@puxxa4458?sub_confirmation=1';
githubUrl2.target = '_blank';
githubUrl2.style.fontFamily = '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;';
githubUrl2.style.fontSize = '1.5vw';
githubUrl2.style.margin = '0 1vw';
githubUrl2.style.color = 'white';
githubContainer.appendChild(githubUrl2);

uiElement.appendChild(githubContainer);

closeButton.addEventListener('click', () => {
    document.body.removeChild(uiElement);
  	autoAnswer = false;
  	showAnswers = false;
});

let isMinimized = false;

minimizeButton.addEventListener('click', () => {
    isMinimized = !isMinimized;

    if (isMinimized) {
        header.style.display = 'none';
        header2.style.display = 'none';
        header3.style.display = 'none';
        header4.style.display = 'none';
        inputContainer.style.display = 'none';
        questionsLabel.style.display = 'none';
        versionLabel.style.display = 'none';
        inputLagLabel.style.display='none';
        githubContainer.style.display = 'none';

        sliderContainer.style.display = 'none';
        autoAnswerSwitchContainer.style.display = 'none';
        showAnswersSwitchContainer.style.display = 'none';

        uiElement.style.height = '2.5vw';
        handle.style.height = '100%';
        closeButton.style.height = '100%';
        minimizeButton.style.height = '100%';
    } else {
        header.style.display = 'block';
        header2.style.display = 'block';
        header3.style.display = 'block';
        header4.style.display = 'block';
        inputContainer.style.display = 'flex';
        questionsLabel.style.display = 'block';
        versionLabel.style.display = 'block';
        inputLagLabel.style.display='block';
        githubContainer.style.display = 'block';

        handle.style.height = '2.5vw';
        uiElement.style.height = 'auto';
        closeButton.style.height = '2.5vw';
        minimizeButton.style.height = '2.5vw';

        sliderContainer.style.display = 'flex';
        autoAnswerSwitchContainer.style.display = 'flex';
        showAnswersSwitchContainer.style.display = 'flex';
    }
});

function parseQuestions(questionsJson){
    let questions = []
    questionsJson.forEach(function (question){
    let q = {type:question.type, time:question.time}
    if (['quiz', 'multiple_select_quiz'].includes(question.type)){
        var i=0
        q.answers = []
        q.incorrectAnswers = []
        question.choices.forEach(function(choise){
            if (choise.correct) {
                q.answers.push(i)
            }
            else{
                q.incorrectAnswers.push(i)
            }
            i++
        })
    }
    if (question.type == 'open_ended')
    {
        q.answers = []
        question.choices.forEach(function(choise){
            q.answers.push(choise.answer)
        })
    }
    questions.push(q)
})
    return questions
}

function handleInputChange() {
    const quizID = inputBox.value;
    const url = 'https://kahoot.it/rest/kahoots/' + quizID;

    if (quizID != "") {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('');
                }
                return response.json();
            })
            .then(data => {
                inputBox.style.backgroundColor = 'green'

                questions=parseQuestions(data.questions)
                info.numQuestions=questions.length
            })
            .catch(error => {
                inputBox.style.backgroundColor = 'red';

                info.numQuestions = 0
            });
    } else {
        inputBox.style.backgroundColor = 'white';
        info.numQuestions = 0

    }
}

inputBox.addEventListener('input', handleInputChange);

document.body.appendChild(uiElement);

let isDragging = false;
let offsetX, offsetY;

handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - uiElement.getBoundingClientRect().left;
    offsetY = e.clientY - uiElement.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        uiElement.style.left = x + 'px';
        uiElement.style.top = y + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});


function onQuestionStart(){
    console.log(inputLag)
    var question = questions[info.questionNum]
    if (showAnswers){
        highlightAnswers(question)
    }
    if (autoAnswer){
        answer(question, (question.time - question.time / (500/(PPT-500))) - inputLag)
    }
}

function highlightAnswers(question){
    question.answers.forEach(function (answer) {
        setTimeout(function() {
            FindByAttributeValue("data-functional-selector", 'answer-'+answer, "button").style.backgroundColor = 'rgb(0, 255, 0)'
        }, 0)
    })
    question.incorrectAnswers.forEach(function (answer) {
        setTimeout(function() {
            FindByAttributeValue("data-functional-selector", 'answer-'+answer, "button").style.backgroundColor = 'rgb(255, 0, 0)'
        }, 0)
    })
}

function answer(question, time) {
    Answered_PPT = PPT
    
    var delay = 0
    if (question.type == 'multiple_select_quiz') delay = 60
    setTimeout(function() {
        if (question.type == 'quiz') {
            const key=(+question.answers[0]+1).toString();
            const event = new KeyboardEvent('keydown', { key });
            window.dispatchEvent(event);
        }
        if (question.type == 'multiple_select_quiz') {
            question.answers.forEach(function (answer) {
                setTimeout(function() {
                    const key=(+answer+1).toString();
                    const event = new KeyboardEvent('keydown', { key });
                    window.dispatchEvent(event);
                        }, 0)
                    })
            setTimeout(function() {
               FindByAttributeValue("data-functional-selector", 'multi-select-submit-button', "button").click()
            }, 0)
        }
    }, time - delay)
}

let isHidden = false;
document.addEventListener('keydown', (event)=> {
    if (event.key == "h"  && event.altKey)
    {
        isHidden = !isHidden
    }

    if (event.key == "x" && event.altKey){
        document.body.removeChild(uiElement);
        autoAnswer = false;
        showAnswers = false;
    }

    if (isHidden)
    {
        uiElement.style.display = 'none'
    }
    else
    {
        uiElement.style.display = 'block'
    }
})

setInterval(function () {
    var textElement = FindByAttributeValue("data-functional-selector", "question-index-counter", "div")
    if (textElement){
        
        info.questionNum = +textElement.textContent - 1
    }
    if (FindByAttributeValue("data-functional-selector", 'answer-0', "button") && info.lastAnsweredQuestion != info.questionNum) 
    {
        info.lastAnsweredQuestion = info.questionNun
        onQuestionStart()
    }
    if (autoAnswer){
        if (info.ILSetQuestion != info.questionNum){
            var ppt = Answered_PPT
            if (ppt > 987) ppt = 1000
            var incrementElement = FindByAttributeValue("data-functional-selector", "score-increment", "span")
            if (incrementElement){
                info.ILSetQuestion = info.questionNum
                var increment = +incrementElement.textContent.split(" ")[1]
                if (increment != 0){
                    inputLag += (ppt-increment)*15
                    if (inputLag < 0) {
                        inputLag -= (ppt-increment)*15
                        inputLag += (ppt-increment/2)*15
                    }
                    inputLag = Math.round(inputLag)
                }
            }
        }
    }
    questionsLabel.textContent = 'Question '+(info.questionNum+1)+' / '+info.numQuestions;
    inputLagLabel.textContent = 'Input lag : '+inputLag+' ms';
}, 1)
