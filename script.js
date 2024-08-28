const QuizData = [
  {
    Question: "How Many Legs Does a Donkey Have?",
    a: "4",
    b: "8",
    c: "2",
    d: "100",
    Correct: "a",
  },

  {
    Question: "Who wrote Chitty Chitty Bang Bang?",
    a: "John Le Carre",
    b: "Charlie Higson",
    c: "Ian Fleming",
    d: "JRR Tolkien",
    Correct: "c",
  },

  {
    Question: "Who sings Espresso?",
    a: "Taylor Swift",
    b: "Sabrina Carpenter",
    c: "Billie Eilish",
    d: "Anne Marie",
    Correct: "b",
  },

  {
    Question: "How many Infinity Stones are there on the Infinity Gauntlet?",
    a: "2",
    b: "4",
    c: "6",
    d: "8",
    Correct: "c",
  },
];

const question_number = document.getElementById("question-number");
const question_text = document.getElementById("question-text");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score;
let currentAnswer = undefined;

LoadQuiz();

function GetSelected() {
  const answerElements = document.querySelectorAll(".answer");

  let answer = undefined;

  answerElements.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });

  return answer;
}

function LoadQuiz() {
  const currentQuizData = QuizData[currentQuiz];
  question_number.innerText = "Question " + (currentQuiz + 1) + ":";
  question_text.innerText = currentQuizData.Question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

submit.addEventListener("click", () => {
  const answer = GetSelected();

  if (answer) {
    if (answer === QuizData[currentQuiz].Correct) {
      currentQuiz++;
      score++;
      if (currentQuiz < QuizData.length) {
        LoadQuiz();
      } else {
        alert("Questions Completed");
      }
    }
  }
});
