'use strict';
{
  let snowContainer  = document.querySelector(".snow-container");

  const createSnow = () => {
    // 雪の要素を生成
    let snow = document.createElement("span");
    snow.className = "snow";

    //雪のサイズ
    const minSize = 5;
    const maxSize = 10;

    //雪の大きさをランダムに決める
    let snowSize = Math.random() * (maxSize - minSize) + minSize;

    snow.style.width = snowSize + "px";
    snow.style.height = snowSize + "px";

    //雪の振りはじめの位置を決定する
    snow.style.left = Math.random() * 100 + "%";

    snowContainer.appendChild(snow);

    //10病後に雪を消す
    setTimeout(() => {
      snow.remove();
    }, 9900);  //10000ミリ秒 = 10秒


    // snow.addEventListener('animationend', () => {
    //  snow.remove();
    // });
  };

  setInterval(createSnow, 100);
}