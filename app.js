const quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション２",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
  },
  {
    question: "私が最も好きな食べ物は？",
    answers: ["いちご", "りんご", "抹茶", "もち"],
    correct: "抹茶",
  },

  {
    question: "私の大学名は？",
    answers: ["東京大学", "京都大学", "多摩美術大学", "東京外国語大学"],
    correct: "東京外国語大学",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $buttons = document.getElementsByTagName("button");

// Function to set up the quiz
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $buttons.length;
  while (buttonIndex < buttonLength) {
    $buttons[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

// Function to handle button click
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }
  quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert(
      "終了！あなたの正解数は" + score + "/" + quizLength + "です！"
    );
  }
};

// Add click event listeners to the buttons
let handlerIndex = 0;
const buttonLength = $buttons.length;
while (handlerIndex < buttonLength) {
  $buttons[handlerIndex].addEventListener("click", clickHandler);
  handlerIndex++;
}

// Initial setup of the quiz
setupQuiz();
