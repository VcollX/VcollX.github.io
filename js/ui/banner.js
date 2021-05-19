/**
 * @file 生成首页标语动画
 * @author YunYouJun <me@yunyoujun.cn>
 * @description https://github.com/YunYouJun/hexo-theme-yun
 */
//魔改by VcollX

/**
 * 生成介于 min 与 max 之间的随机数
 * @param {number} min
 * @param {number} max
 * @returns
 */
/*function random(min, max) {
  return Math.random() * (max - min) + min;
}*/

/**
 * 生成标语
 * @param {string} title
 */
function generateBanner(title) {
  let sumH = 0;
  let lineTop = document.querySelector(".vertical-line-top");
  let lineBottom = document.querySelector(".vertical-line-bottom");
  for (let i = 0; i < title.length; i++) {
    const char = title[i];
    let charBox = document.createElement("div");
    //let rn = random(1.5, 3.5); 取消随机大小
	let rn = 5;
    charBox.innerHTML = "<span class='char'>" + char + "</span>";
    let charSize = rn + "rem";
    banner.insertBefore(charBox, lineBottom);
    charBox.classList.add("char-box");
    if (i % 2 === 0) {
      charBox.classList.add("char-left");
      charBox.style.animationName = "char-move-left";
    } else {
      charBox.classList.add("char-right");
      charBox.style.animationName = "char-move-right";
    }
    charBox.style.setProperty("--banner-char-size", charSize);

    const height = window
      .getComputedStyle(document.getElementsByClassName("char-box")[i])
      .getPropertyValue("height");
    charBox.style.setProperty("--banner-empty-border-size", height);
      
    sumH += 0;
  }
  let center = "calc(50vw - " + sumH / 2 + "rem)";
  lineTop.style.setProperty("--banner-line-height", center);
  lineBottom.style.setProperty("--banner-line-height", center);

  // set animation name
  lineTop.style.animationName = "extend-line";
  lineBottom.style.animationName = "extend-line";
  // set subtitle
  let subBox = document.createElement("div");
  subBox.innerHTML = "<span class='subtitle'>" + "客官，要进来喝杯咖啡吗？(๑¯∀¯๑)" + "</span>";
  subBox.classList.add("subtitle-move");
  subBox.style.animationName = "wula";
  subBox.style.position = "absolute";
  subBox.style.right = "26vw";
  subBox.style.bottom = "40vh";
  banner.insertBefore(subBox, lineBottom);
  
}

/**
 * 初始化 banner
 */
function initBanner() {
  if (window.banner) {
    setTimeout(() => {
      generateBanner(CONFIG.title);
    }, 100);
  }
}

document.addEventListener("DOMContentLoaded", initBanner);
