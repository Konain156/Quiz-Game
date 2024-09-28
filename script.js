var quizQuestions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      choices: ["<scripting>", "<script>", "<js>", "<javascript>"],
      answer: "<script>"
    },
    {
      question: "How do you create a function in JavaScript?",
      choices: ["function:myFunction()", "function = myFunction()", "function myFunction()"],
      answer: "function myFunction()"
    },
    {
      question: "How to write an IF statement in JavaScript?",
      choices: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"],
      answer: "if (i == 5)"
    },
    {
      question: "How does a WHILE loop start?",
      choices: ["while i = 1 to 10", "while (i < 10; i++)", "while (i <= 10)"],
      answer: "while (i <= 10)"
    },
    {
      question: "How does a FOR loop start?",
      choices: ["for i = 1 to 5", "for (i = 0; i <=5)", "for (i = 0; i <= 5; i++)", "for (i <= 5; i++)"],
      answer: "for (i = 0; i <= 5; i++)"
    }
  ];

  var currentQuestionIndex = 0;
  var score = 0;
  var totalQuestions = quizQuestions.length;

  function loadQuestion() {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;

    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.onclick = () => checkAnswer(choice);
      choicesDiv.appendChild(button);
    });
  }

  function checkAnswer(selectedChoice) {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedChoice === currentQuestion.answer) {
      score++;
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }

    document.getElementById('next').style.display = 'block';
  }

  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
      loadQuestion();
      document.getElementById('next').style.display = 'none';
    } else {
      showScore();
    }
  }

  function showScore() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('score').textContent = `You scored ${score} out of ${totalQuestions}!`;
    document.getElementById('score').style.display = 'block'; 
  }

  loadQuestion();