// まずは、Canvas要素と2Dコンテキストを取得
const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

// ゲームの変数を初期化
let ballX = 50;
let ballY = 50;

function draw() {
  // 画面をクリア
  ctx.fillStyle = "#000000"; // 黒
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // ボールを描画
  ctx.fillStyle = "#FFFFFF"; // 白
  ctx.beginPath();
  ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
  ctx.fill();
}

function gameLoop() {
  draw();
  requestAnimationFrame(gameLoop);
}

// ゲームループを開始
gameLoop();
