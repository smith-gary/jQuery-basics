function func1() {
  // $("#img1").fadeToggle(3000);
  // $("div").css("background-color", "orange");
  $(".para").css("font-style", "italic");
  $("#div1, #div3").css("background-color", "blue");
  $("#div2, li").css("background-color", "purple");
  $("div > p").fadeToggle();
  $("p:first").css("font-weight", "bold");
  $("li:odd").fadeToggle();
}
