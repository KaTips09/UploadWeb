function doFade() {
   var tl = gsap.timeline();
   var divTest = document.querySelector("#divtest");
  tl.to(divTest, {opacity:0, duration:3});
  divTest.className = "red";
  divTest.innerHTML = "End the test."
  tl.to(divTest, {opacity:100, duration:3, delay:1});
}