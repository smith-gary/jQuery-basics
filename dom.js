$(document).ready(function () {
  // $(".div1").click(function () {
  //   var x = $(".p1").html();
  //   $("#span1").text(x);
  // });

  // $(".div1").click(function () {
  //   alert($(".p1").text());
  // });

  // $("#btn1").click(function (e) {
  //   e.preventDefault();
  //   $(".p1").attr("id", "p2id");
  // });

  // $(".p1").click(function (e) {
  //   e.preventDefault();
  //   alert($(".p1").attr("id"));
  // });

  // $("#btn1").click(function (e) {
  //   e.preventDefault();
  //   $(".div1").css("background-color", "green");
  // });

  // $(".div1").click(function (e) {
  //   e.preventDefault();
  //   alert($(".div1").css("background-color"));
  // });

  // $("#btn1").click(function (e) {
  //   e.preventDefault();
  //   $(".div1").append("<p>this is para 2</p>");
  // });

  $("#btn1").click(function (e) {
    e.preventDefault();
    $(".div1").append(
      "<img src=https://ericjuden.com/wp-content/uploads/2009/07/jQuery-Logo.png height=100px width=100px />"
    );
  });

  $("#btn2").click(function (e) {
    e.preventDefault();
    $(".div1").prepend(
      "<img src=https://ericjuden.com/wp-content/uploads/2009/07/jQuery-Logo.png height=100px width=100px />"
    );
  });

  // also after and before methods. just handle outside of the element.

  $("#btn3").click(function (e) {
    e.preventDefault();
    $(".div1").remove();
  });

  $("#btn4").click(function (e) {
    e.preventDefault();
    $(".div1").empty();
  });
});
