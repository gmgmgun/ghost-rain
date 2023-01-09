const newHero = new Hero(document.getElementById("hero"));

newHero.hero.style.left = 365 + "px";
newHero.classList.add("ArrowDown");
document.addEventListener("keydown", function (e) {
  newHero.classList.remove(...newHero.classList);
  newHero.classList.add(heroClassNameMap[e.key]);
  newHero.move(newHero.classList[0]);
});
