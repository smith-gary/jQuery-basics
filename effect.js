$("document").ready(() => {
  // $("#btn1").click(() => {
  //   $("#img1").hide(2000);
  // });
  // $("#btn2").click(() => {
  //   $("#img1").show(2000);
  // });
  // $("#btn3").click(() => {
  //   $("#img1").toggle(3000);
  // });
  // $("#btn4").click(() => {
  //   $("#img1").fadeIn(2000);
  // });
  // $("#btn5").click(() => {
  //   $("#img1").fadeOut(2000);
  // });
  // $("#btn6").click(() => {
  //   $("#img1").fadeToggle(2000);
  // });
  // $("#btn7").click(() => {
  //   $("#img1").slideUp(2000);
  // });
  // $("#btn8").click(() => {
  //   $("#img1").slideDown(2000);
  // });
  // $("#btn9").click(() => {
  //   $("#img1").slideToggle(2000);
  // });

  $("#btn").click(() => {
    $("#img1").animate(
      {
        left: "150px",
        opacity: "1",
        height: "400px",
        width: "400px",
      },
      "slow",
      () => {
        alert("animated");
      }
    );
  });
  $("#btn1").click(function () {
    $("#img1").animate(
      {
        left: "10px",
        opacity: "0.4",
        height: "250px",
        width: "250px",
      },
      "slow",
      () => {
        alert("de-animated");
      }
    );
  });
});
