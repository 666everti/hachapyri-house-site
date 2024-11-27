document.querySelectorAll(".topnav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const box = document.getElementById("enlargeBox");

box.addEventListener("mouseover", function () {
  this.style.transform = "scale(1.1)";
  this.style.transition = "transform 0.4s ease";
});

box.addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
  this.style.transition = "transform 1s ease";
});
