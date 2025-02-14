let score = 0; // 总得分
let currentQuestion = 0; // 当前问题索引
let timer; // 倒计时
const timeLimit = 20; // 每题时间限制

// 问题和反馈数据
const questions = [
  {
    question: "你觉得爱情中最重要的是什么？",
    options: [
      { text: "A. 信任", score: 1 },
      { text: "B. 占有", score: 3 },
      { text: "C. 自由", score: -2 },
    ],
    feedback: {
      trust: "你真是个温柔的人呢，但我希望你能更依赖我。",
      possess: "很好，你已经开始理解我的爱了。",
      freedom: "自由？你真的觉得我会给你自由吗？",
    },
  },
  {
    question: "如果我不在你身边，你会怎么做？",
    options: [
      { text: "A. 等你回来", score: 2 },
      { text: "B. 找别人聊天", score: -3 },
      { text: "C. 独自享受时光", score: -1 },
    ],
    feedback: {
      wait: "你果然是最懂我的人。",
      chat: "找别人？看来我需要更紧地抓住你了。",
      enjoy: "独自享受？你真的不需要我吗？",
    },
  },
  // 添加更多问题...
];

// 初始化页面
function init() {
  showQuestion();
  startTimer();
}

// 显示当前问题
function showQuestion() {
  const questionData = questions[currentQuestion];
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <p>${questionData.question}</p >
    ${questionData.options
      .map(
        (option) => `
      <div class="option" data-score="${option.score}">${option.text}</div>
    `
      )
      .join("")}
  `;
  document.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", handleAnswer);
  });
}

// 处理答案选择
function handleAnswer(event) {
  const selectedOption = event.target;
  const selectedScore = parseInt(selectedOption.getAttribute("data-score"));
  score += selectedScore;
  showFeedback(selectedOption.textContent);
  clearInterval(timer); // 停止倒计时
  setTimeout(nextQuestion, 2000); // 2秒后跳转下一题
}

// 显示反馈信息
function showFeedback(choice) {
  const feedbackContainer = document.getElementById("feedback
