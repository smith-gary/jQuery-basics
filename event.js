// $("#btn").click(func2);
// $("#btn").click(() => {
//   $("#img1").css("width", "500px");
// });
// function func2() {
//   // document.getElementById("img1").style.width = "500px";
//   $("#img1").css("width", "500px");
// }

$("document").ready(() => {
  // $("#btn").dblclick(() => {
  //   $("#img1").css("width", "500px");
  // });

  // $("#img1").mouseenter(function () {
  //   $("#img1").css("width", "500px");
  // });

  // $("#img1").mouseleave(function () {
  //   $("#img1").css("width", "200px");
  // });

  $("#img1").hover(
    () => {
      // over
      $("#img1").css("width", "500px");
    },
    () => {
      // out
      $("#img1").css("width", "200px");
    }
  );
});
