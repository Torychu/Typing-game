// 타자 연습 문장을 랜덤하게 섞기 위한 shuffle 함수
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let quotes = [
  "등잔 밑이 어둡다.",
  "떡 본 김에 제사 지낸다.",
  "목 마른 사람이 우물 판다.",
  "믿는 도끼에 발등 찍힌다.",
  "Study Programming Algorithm Myself",
  "런천미트보단 스팸이지",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non orci bibendum, dictum libero quis, dapibus massa. Suspendisse in ligula elit. ",
  "발 없는 말이 천 리 간다.",
  "아니 땐 굴뚝에 연기 나랴",
  "엎드려 절 받기",
  "우물 안 개구리",
  "울며 겨자 먹기",
  "인명은 재천이다.",
  "원수는 외나무다리에서 만난다.",
  "윗물이 맑아야 아랫물이 맑다.",
  "자라 보고 놀란 가슴 솥뚜껑 보고 놀란다.",
  "입이 열이라도 할 말이 없다.",
  "지렁이도 밟으면 꿈틀한다.",
  "소 잃고 외양간 고친다.",
  "티끌 모아 태산",
  "실패는 성공의 어머니다.",
  "필요는 발명의 어머니다.",
  "콩 심은데 콩 나고 팥 심은 데 팥 난다.",
  "모난 돌이 정 맞는다.",
  "닭 쫓던 개 지붕 쳐다보듯",
  "말이 씨가 된다.",
  "수박 겉핥기.",
  "천 리 길도 한 걸음부터.",
  "사공이 많으면 배가 산으로 간다.",
  "가는 날이 장날.",
  "오늘 도시의 별 하나가 진다.",
];

shuffleArray(quotes); // 문장을 랜덤하게 섞음

let currentQuoteIndex = 0;
let startTime, endTime;

const body = document.querySelector("body");
const quoteElement = document.getElementById("quote");
const userInputElement = document.getElementById("userInput");
const feedbackElement = document.getElementById("feedback");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");

function startGame() {
  if (currentQuoteIndex >= quotes.length) {
    currentQuoteIndex = 0;
    shuffleArray(quotes); // 모든 문장을 연습한 후에 다시 섞음
  }

  const quote = quotes[currentQuoteIndex];
  quoteElement.textContent = quote;
  userInputElement.value = "";
  userInputElement.focus();
  feedbackElement.textContent = "";

  startTime = new Date();
  startButton.disabled = true;
  resetButton.disabled = false;
}

function endGame() {
  endTime = new Date();
  const elapsedTime = (endTime - startTime) / 1000;
  const userText = userInputElement.value;
  const quote = quotes[currentQuoteIndex];

  if (userText === quote) {
    feedbackElement.textContent = `성공! 소요 시간: ${elapsedTime.toFixed(
      2
    )} 초`;
  } else {
    feedbackElement.textContent = "오답입니다. 다시 시도하세요.";
  }

  startButton.disabled = false;
  resetButton.disabled = true;

  currentQuoteIndex++;
}

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", endGame);

userInputElement.addEventListener("input", function () {
  const userText = userInputElement.value;
  const quote = quotes[currentQuoteIndex];

  console.log("userText:", userText); // 디버그 출력
  console.log("quote:", quote); //
  console.log(typeof userText, typeof quote); //
  if (userText === quote) {
    console.log("확인용");
    endGame();
  }
});

body.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    startGame();
  }
});
// 초기화
resetButton.disabled = true;
