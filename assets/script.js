var startGame = document.getElementById('start');
var next = document.getElementById('next');
var questions = document.getElementById('questions');
var container = document.getElementById('question');
var answer = document.getElementById('answer');

var score = 0;

var CurrentIndex, Shuffle;

var questions = [
    {
        question: 'Which of the following is my favorite flavor of coffe?',
        answer : [
            {text : 'Vanilla', correct : false},
            {text : 'Hazel Nut', correct : true},
            {text : 'Chocolate', correct : false},
            {text : 'Black Coffee', correct : false},
        ]
    },
    
    {
        question: 'What are my CURRENT favorite hobbies?',
        answer : [
            {text : 'Gym and Golf', correct : true},
            {text : 'Reading and Hiking', correct : false},
            {text : 'Sleeping', correct : false},
            {text : 'Basketball and Soccer', correct : false},
        ]
    },

    {
        question: 'How old am I?',
        answer : [
            {text : '27', correct : false},
            {text : '18', correct : false},
            {text : '33', correct : false},
            {text : '25', correct : true},
        ]
    },
    {
        question: 'What was my major in college?',
        answer : [
            {text : 'Computer Science', correct : false},
            {text : 'Mechanical ngineering', correct : true},
            {text : 'Biology', correct : false},
            {text : 'Business', correct : false},
        ]
    },
    
    {
        question: 'What is my name?',
        answer : [
            {text : 'Tommy', correct : false},
            {text : 'Jon', correct : false},
            {text : 'Josh', correct : false},
            {text : 'Chris', correct : true},
        ]

    },

    {
        question: 'What is my favorite Ice Cream Flavor',
        answer : [
            {text : 'Mint Chocolate Chip', correct : true},
            {text : 'Strawberry flavor', correct : false},
            {text : 'Coffee flavor', correct : false},
            {text : 'Vanilla Bean flavor', correct : false},
        ]
    }

]

startGame.addEventListener('click', start);

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if(seconds === 0) {
            alert('Game Over!')
        }
    }, 1000);
}

startGane.addEventListener('click',start);
startGame.addEventListener('click', function(){
    var threeMin = 60 * 3,
    display = document.querySelector('#time');
    startTimer(threeMin, display);
});

function start(){
    startGame.classList.add('hide');
    Shuffle = questions.ariaSort(() => Math.random() + 1 );
    questions.classList.remove('hide');
    CurrentIndex = 0;
    next();
    next.classList.remove('hide');
}

function Appear(question){
    question.innerText = question.question
    console.log(question)
    question.answers.foreach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')

        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonelement.appendChild(button)
    })
        
    }

function reset(){
    clearStatusClass(document.body)
    next.classList('hide')
    while (answerButtonelement.firstChild){
        answerButtonelement.removeChild(answerButtonelement.firstChild)
    }
}

    function questionredo(question){

        for(var i = 0; i < questions.clientHeight; i++);
        questions.innerText('#question');
        if (answer.correct){
            button.dataset.correct = answer.correct
            score ++ ;
        }
        score.innerText('Good Job!')
    }


    function next(){
        showQuestion(suffle[currentQuestionIndex]);
    }