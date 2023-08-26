const gameState = {
  ballX: 50,
  ballY: 50,
};

let speedX = 2;
let speedY = 2;

/* 自動で動く */
/* 何も書かなければ動かない */
function update(): void {
  // gameState.ballX += speedX;
  // gameState.ballY += speedY;

  // // 画面の端に到達したら反対方向へ
  // if (gameState.ballX <= 0 || gameState.ballX >= canvas.width) {
  //   speedX = -speedX;
  // }
  // if (gameState.ballY <= 0 || gameState.ballY >= canvas.height) {
  //   speedY = -speedY;
  // }
}

/* keyが入力されたときの動き */
document.addEventListener("keydown", function(event) {
  /* 入力しなくても動く */
  // if (event.key === "ArrowUp") {
  //   speedY = -Math.abs(speedY);  // 上に移動
  // }
  // if (event.key === "ArrowDown") {
  //   speedY = Math.abs(speedY);  // 下に移動
  // }
  // if (event.key === "ArrowLeft") {
  //   speedX = -Math.abs(speedX);  // 左に移動
  // }
  // if (event.key === "ArrowRight") {
  //   speedX = Math.abs(speedX);  // 右に移動
  // }
/* 入力しない限り動かない */
// 画面の端でない限り動く
  const moveAmount = 10;
  if (event.key === "ArrowUp" && gameState.ballY > 0) {
    gameState.ballY -= moveAmount;
  }
  if (event.key === "ArrowDown" && gameState.ballY < canvas.height) {
    gameState.ballY += moveAmount;
  }
  if (event.key === "ArrowLeft" && gameState.ballX > 0) {
    gameState.ballX -= moveAmount;
  }
  if (event.key === "ArrowRight" && gameState.ballX < canvas.width) {
    gameState.ballX += moveAmount;
  }
});


const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

/* カーソルに合わせた動き */
// canvas.addEventListener("mousemove", function(event) {
//   const rect = canvas.getBoundingClientRect();
//   const x = event.clientX - rect.left;
//   const y = event.clientY - rect.top;

//   gameState.ballX = x;
//   gameState.ballY = y;
// });

function draw(): void {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#FFFFFF";
  ctx.beginPath();
  ctx.arc(gameState.ballX, gameState.ballY, 10, 0, Math.PI * 2);
  ctx.fill();
}

function gameLoop(): void {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
