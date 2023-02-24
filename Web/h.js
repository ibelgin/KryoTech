let generateBtnH = document.getElementById("ShowH");

function randomNumH() {
  let minValueH = Number(100);
  let maxValueH = Number(205);
  if (minValueH > maxValueH) {
    minValueH = maxValueH + minValueH;
    maxValueH = minValueH - maxValueH;
    minValueH = minValueH - maxValueH;
    min.valueH = minValueH;
    max.valueH = maxValueH;
  }
  let numH = Math.floor(Math.random() * (maxValueH - minValueH + 1)) + minValueH;
  document.getElementById("resultH").innerTextH = numH;
}
window.addEventListener("loadH", randomNumH());
generateBtnH.addEventListener("clickH", randomNumH);

