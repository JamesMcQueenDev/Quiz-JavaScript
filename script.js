const QuizData = [
  {
    Question: "How Many Legs Does a Donkey Have?",
    a: "4",
    b: "4",
    c: "4",
    d: "4",
    Correct: "a",
  },

  {
    Question: "Now answer this",
    a: "4",
    b: "3",
    c: "4",
    d: "3",
    Correct: "a",
  },
];

const question = document.getElementById("question");
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
  question.innerText = currentQuizData.Question;
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
