const questions = [
  {
      question: "What is your birthday?",
      choices: ["10/28/06", "07/24/06", "06/08/06", "12/20/06"],
      correct: "12/20/06"
  },
  {
      question: "What was the color of the main part of the first piece of jewelry I got you?",
      choices: ["Pink", "White", "Light Green", "Light Blue"],
      correct: "White"
  },
  {
      question: "What was the first actual sushi I made you try on our first date?",
      choices: ["Maguro Sushi", "Sexy Roll", "Dragon Roll", "California Roll"],
      correct: "Sexy Roll"
  },
  {
    question: "What gift did you get me on my birthday?",
    choices: ["Chocolate", "Money", "Pants", "Posters"],
    correct: "Posters"
  },
  {
    question: "What did we do immediately after our first kiss?",
    choices: ["Smile out of pure delight!", "Fall down a hill", "Take a selfie", "Make out passionately"],
    correct: "Take a selfie"
  },
  {
    question: "How much do I curl 💪💪💪💪💪💪?",
    choices: ["30 lbs", "20 lbs", "25 lbs", "35 lbs"],
    correct: "30 lbs"
  },
  {
    question: "How heavy is the weight of the dumbell you took to COSMOS?",
    choices: ["40 lbs", "30 lbs", "20 lbs", "35 lbs"],
    correct: "40 lbs"
  },
  {
    question: "What's the first song I sent you?",
    choices: ["LOYALTY", "Show Me", "Not Like Us", "Diablo"],
    correct: "Diablo"
  },
  {
    question: "You got me a gift from Japan, how'd you get it?",
    choices: ["Stole it 😈", "Got it from a street vendor after struggling to find money", "Got materials for it and made it there", "Went into a store and bought it"],
    correct: "Got it from a street vendor after struggling to find money"
  },
  {
    question: "We went on two dates for our 1 year anniversary, what were the color of the flowers I got you on the first date?",
    choices: ["White and Pink", "Pink", "White and Blue", "Pink"],
    correct: "Pink"
  },
  {
    question: "Will you marry me (eventually)>",
    choices: ["Yes", "No"],
    correct: "Yes"
  },
];

let currentQuestionIndex = 0;
const quizContainer = document.getElementById('quiz-container');


function loadQuestion() {
  if (currentQuestionIndex >= questions.length) {
      flowerHTML = '<img src="giphy (1).gif" width="900">';
      quizContainer.innerHTML = "<p>Bruh if you answered all these questions and you're not Gaheera this shit just weird at this point how the fuck do you know all this shit fuck ass. Or you're a fucking nerd and cheated like a bitch. Either way you're weird. <br> Anyways, hey Gaheera! This is Rohin. I'm really sad we could barely see each other this summer, and I'm especially sad I couldn't be there in person to tell you how amazing of a girlfriend you are. You are deadass my therapist, emotional punching bag, lover, shitter, and best friend all together. You make my day better no matter the situation either of us are in, and I constantly look forward to talking to you, seeing your beautiful face, feeling your perfect body, making you laugh, and finally getting to see that gorgeous smile. I truly love you from the depths of my heart, and I hope you can feel extra appreciated and loved today <3</p>" + flowerHTML;
      return;
  }

  const questionData = questions[currentQuestionIndex];
  quizContainer.innerHTML = `
      <h2 class="text-xl font-bold mb-4 bg-red-400 rounded-full p-8 text-white py-8">${questionData.question}</h2>
      <ul>
          ${questionData.choices.map(choice => `
              <li>
                  <button class="bg-pink-200 text-white px-4 py-2 rounded-lg mb-2 w-full hover:bg-red-700" onclick="handleAnswer('${choice}')">${choice}</button>
              </li>
          `).join('')}
      </ul>
  `;
}

function handleAnswer(selectedChoice) {
  const questionData = questions[currentQuestionIndex];
  if (selectedChoice === questionData.correct) {
      currentQuestionIndex++;
      loadQuestion();
  } else {
      localStorage.setItem('incorrectAnswer', 'true');
      quizContainer.innerHTML = "<p>You are not Gaheera bruh wtf are you doing here creep ass weird fuck</p>";
      close();
  }
}

function checkPreviousAttempt() {
  if (localStorage.getItem('incorrectAnswer') === 'true') {
      quizContainer.innerHTML = "<p>You are not Gaheera Babbar, why tf are you still here</p>";
  } else {
      loadQuestion();
  }
}

checkPreviousAttempt();
