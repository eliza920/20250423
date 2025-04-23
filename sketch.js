let stars = [];
let colors = ['#0d3b66', '#f4d35e', '#ee964b', '#f95738'];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#faf0ca'); // 背景顏色

  // 產生40個星星
  for (let i = 0; i < 40; i++) {
    let star = {
      x: random(width),
      y: random(height),
      size: random(30, 100),
      color: random(colors),
      vx: random(-2, 2), // 水平速度
      vy: random(-2, 2)  // 垂直速度
    };
    stars.push(star);
  }
}

function draw() {
  background('#faf0ca'); // 重繪背景

  // 更新並繪製星星
  for (let star of stars) {
    // 更新星星位置
    star.x += star.vx;
    star.y += star.vy;

    // 碰到邊界時反彈
    if (star.x < 0 || star.x > width) {
      star.vx *= -1;
    }
    if (star.y < 0 || star.y > height) {
      star.vy *= -1;
    }

    // 繪製星星
    fill(star.color);
    noStroke();
    drawStar(star.x, star.y, star.size, star.size / 2, 5);
  }
}

// 繪製星星的函式
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius1;
    let sy = y + sin(a) * radius1;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius2;
    sy = y + sin(a + halfAngle) * radius2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 畫布隨視窗大小調整
}