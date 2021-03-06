let myQuestions = [
  {
    question: "<div class=\"column\"><img src='img/poison-ivy-bark-iStock-525295871.jpg' width='270px'> </div>",
    answers: {
      a: 'Yes, this is poison ivy',
      b: 'This is not poison ivy'
    },
    correctAnswer: 'a',
    comment: ''
  },
  {
    question: "<div class=\"column\"><img src='img/poison-ivy.jpg' width='270px'> </div>",
    answers: {
      a: 'Yes, this is poison ivy',
      b: 'No, this is not poison ivy'
    },
    correctAnswer: 'a',
    comment: ''
  },
  {
    question: "<div class=\"column\"><img src='img/poisonIvy-berries-1484539073-huge.jpg' width='270px'> </div>",
    answers: {
      a: 'Yes, this is poison ivy',
      b: 'No, this is not poison ivy'
    },
    correctAnswer: 'a',
    comment: ''
  },
  {
    question: "<div class=\"column\"><img src='img/box-elder.jpg' width='270px'> </div>",
    answers: {
      a: 'Yes, this is poison ivy',
      b: 'No, this is not poison ivy'
    },
    correctAnswer: 'b',
    comment: '<div class=\"comment\">This is Box Elder (Acer negundo).<br />See <a href="https://bplant.org/compare/90-1409">comparison</a>.</div>'
  },

  {
    question: "<div class=\"column\"><img src='img/red-poison-ivy-AdobeStock_380922826.jpg' width='270px'> </div>",
    answers: {
      a: 'Yes, this is poison ivy',
      b: 'No, this is not poison ivy'
    },
    correctAnswer: 'a',
    comment: ''
  },
  {
    question: "<div class=\"column\"><img src='img/rubus-iStock-1257427951.jpg' width='270px'> </div>",
    answers: {
      a: 'Yes, this is poison ivy',
      b: 'No, this is not poison ivy'
    },
    correctAnswer: 'b',
    comment: '<div class=\"comment\">This is a berry (Rubus).<br /></div>'
  },

];

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    let output = [];
    let answers;
    let comments;

    // for each question...
    for(let i=0; i<questions.length; i++){

      // first reset the list of answers
      answers = [];
      comments = [];

      // for each available answer...
      for(let letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
          + '<input type="radio" name="question'+i+'" value="'+letter+'"> '
          // + letter + ': '
          + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="row"><div class="column question">' + questions[i].question + '</div>'
        + '<div class="column answers">' + answers.join('') + questions[i].comment +'</div></div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){

    // gather answer containers from our quiz
    let answerContainers = quizContainer.querySelectorAll('.answers');
    let commentContainers = quizContainer.querySelectorAll('.comment');


    // keep track of user's answers
    let userAnswer = '';
    let numCorrect = 0;

    // for each question...
    for(let i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[i].style.color = 'green';
        // elt = .querySelector('.comment');
        // elt.setAttribute("style", "display:block;");

      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
      if (i===3||i===5) {
        commentContainers[0].style.display = 'block';
        commentContainers[1].style.display = 'block';

      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}
