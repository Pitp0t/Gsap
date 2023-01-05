const buyButton = document.getElementById("buyButton");
const back = document.getElementById("backButton");
const ligthMode = document.getElementById("lightMode");
const ligthMode2 = document.getElementById("lightMode2");
const image = document.getElementById("heroImg");
const hero = document.getElementById("heroSection");
const links = document.querySelector("link");

let t1 = gsap.timeline({ paused: true, reversed: true });
let t2 = gsap.timeline({ paused: true, reversed: true });
let t3 = gsap.timeline({ paused: true, reversed: true });

buyButton.addEventListener("click", () => {
  t2.play();
});

ligthMode.addEventListener("click", () => {
  hero.style.color = "#ffffff";
  t3.play();
});

ligthMode2.addEventListener("click", () => {
  hero.style.color = "black";
  t3.reverse();
});

back.addEventListener("click", () => {
  t2.reverse();
});

t1.play();

t1.to(".teslaImg", {
  ease: "elastic.out(1, .8)",
  top: "10%",
  rotate: 0,
  duration: 1.5,
});

t1.to(
  ".menu",
  {
    ease: "elastic.out(1, .8)",
    left: 0,
    duration: 1,
  },
  0.3
);

t1.to(
  ".user",
  {
    ease: "elastic.out(1, .8)",
    right: 0,
    duration: 1,
  },
  0.3
);

t1.to(
  ".titleProduct",
  {
    ease: "elastic.out(1, .8)",
    top: 20,
    rotate: 0,
    duration: 1.5,
  },
  0
);

t1.to(
  ".subProduct",
  {
    ease: "elastic.out(1, .8)",
    bottom: 0,
    rotate: 0,
    duration: 1.5,
  },
  0
);

t1.from(
  ".buy",
  {
    ease: "elastic.out(1, .8)",
    scale: 0,
    duration: 1.5,
  },
  0.1
);

t2.to(".teslaImg", {
  ease: "elastic.out(1, .8)",
  top: "-120%",
  duration: 2,
});

t2.to(
  ".menu",
  {
    ease: "elastic.out(1, .8)",
    left: -50,
    duration: 1.5,
  },
  0
);

t2.to(
  ".user",
  {
    ease: "elastic.out(1, .8)",
    right: -50,
    duration: 1.5,
  },
  0
);

t2.to(
  ".titleProduct",
  {
    ease: "elastic.out(1, .8)",
    top: 100,
    rotate: 0,
    duration: 1.5,
  },
  0
);

t2.to(
  ".subProduct",
  {
    ease: "elastic.out(1, .8)",
    bottom: -100,
    rotate: 0,
    duration: 1.5,
  },
  0
);

t2.to(
  ".back",
  {
    ease: "elastic.out(1, .8)",
    left: 20,
    duration: 1.5,
  },
  0
);

t2.to(
  ".buy i",
  {
    ease: "power1.inOut",
    scale: 0,
    duration: 0.3,
  },
  0
);

t2.to(
  ".buy",
  {
    ease: "power1.inOut",
    scale: 8,
    width: 350,
    duration: 0.3,
  },
  0.3
);

//LightMode TimeLine

t3.to(
  ".darkMode",
  {
    ease: "power1.inOut",
    scale: 100,
    width: 1200,
    height: 1200,
    duration: 1,
    backgroundColor: "#232323",
  },
  0.3
);

t3.to(
  ".darkMode i",
  {
    ease: "power1.inOut",
    scale: 0,
    duration: 0.3,
  },
  0
);

t3.to(
  ".lightMode",
  {
    ease: "elastic.out(1, .8)",
    right: 20,
    duration: 1,
  },
  0.3
);
