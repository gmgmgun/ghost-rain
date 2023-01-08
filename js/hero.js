class Hero {
  constructor() {
    this.hero = document.getElementById("hero");
    // hero.className = document.getElementById("hero").className;
    // hero.offsetLeft = document.getElementById("hero").offsetLeft;
    // hero.style.left = document.getElementById("hero").style.left;
  }

  //용사 이동범위를 더 매끄러운 방법으로 제한해야 함.
  move() {
    document.addEventListener("keydown", function (e) {
      switch (e.key) {
        case "ArrowRight":
          hero.className = "right"; // 오른쪽을 바라보는 이미지로 갱신.
          console.log(this);
          // 다음 동작 수행 시 용사가 배경의 범위 밖으로 넘어가면 범위 끝으로 고정시킴.
          if (hero.offsetLeft + 17.5 >= 766) {
            console.log("hero.offsetLeft = " + hero.offsetLeft);
            hero.style.left = 766 + "px";
            return;
          }
          hero.style.left = hero.offsetLeft + 17.5 + "px";
          break;

        case "ArrowLeft":
          hero.className = "left"; // 왼쪽을 바라보는 이미지로 갱신.

          // 다음 동작 수행 시 용사가 배경의 범위 밖으로 넘어가면 범위 끝으로 고정시킴.
          if (hero.offsetLeft - 17.5 <= 0) {
            hero.style.left = 0 + "px";
            return;
          }

          hero.style.left = hero.offsetLeft - 17.5 + "px";
          break;

        case "ArrowDown":
          //hero가 움직일 필요는 없음.
          hero.className = "down"; // 정면을 바라보는 이미지로 갱신.
          break;
      }
    });
  }
}
