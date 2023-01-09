const heroClassNameMap = {
  ArrowRight: "right",
  ArrowLeft: "left",
  ArrowDown: "stop",
};

class Hero {
  constructor(hero) {
    this.hero = hero;
    this.classList = hero.classList;
    this.style = hero.style;
    this.movePoint = 17.5;
    console.log("this = " + this);
    console.log("this.hero = " + this.hero);
  }

  calPos(curPos, key) {
    let newPos = curPos.replace("px", "");
    let newNumPos = Number(newPos);
    if (key == "left") {
      newNumPos -= this.movePoint;
    }
    if (key == "right") {
      newNumPos += this.movePoint;
    }
    let nextPos = newNumPos + "px";
    return nextPos;
  }

  //용사 이동범위를 더 매끄러운 방법으로 제한해야 함.
  move(key) {
    if (key === "left") {
      console.log(hero.style.left);
      if (this.hero.offsetLeft - this.movePoint <= 0) {
        this.hero.style.left = 0 + "px";
        return;
      }
      this.hero.style.left = this.calPos(this.hero.style.left, key);
    }
    if (key === "right") {
      console.log(this.hero.style.left);
      if (this.hero.offsetLeft + this.movePoint >= 765) {
        this.hero.style.left = 765 + "px";
        return;
      }
      this.hero.style.left = this.calPos(this.hero.style.left, key);
    }
  }
}
