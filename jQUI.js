let lang = [
  "javascript",
  "css",
  "html",
  "java",
  "react",
  "angular",
  "struts1",
  "struts2",
];

$(document).ready(function () {
  $("#date").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    showButtonPanel: true,
    changeMonth: true,
    changeYear: true,
    minDate: new Date(2016, 1, 5),
    maxDate: new Date(2023, 1, 6),
    numberOfMonths: 2,
  });

  $("#tool").tooltip({
    track: true,
    //can use content:"" instead of placing value in title in html
    show: { effect: "highlight", duration: 2000 },
    hide: { effect: "explode" },
  });

  $("#div2").accordion({
    collapsible: true,
    icons: { header: "ui-icon-arrow-1-n", activeHeader: "ui-icon-caret-1-n" },
    animate: 2000,
    // event: "mouseover",
  });

  $("#btnd").click(function (e) {
    e.preventDefault();
    $("#dialog").dialog("open");
  });

  $("#dialog").dialog({
    title: "title using prop",
    // draggable: false,
    // resizable: false,
    // closeOnEscape: false,
    modal: true,
    autoOpen: false,
  });

  $("#input").autocomplete(
    {
      // instead of making a source variable, you can add the array straight into the source parameter
      source: lang,
    },
    {
      delay: 1000,
      minLength: 3,
      autoFocus: true,
    }
  );

  $("#btnd1").click(function (e) {
    e.preventDefault();
    let modProp = $("#dialog1").dialog("option", "height");
    alert(modProp);
  });

  $("#btnd2").click(function (e) {
    e.preventDefault();
    $("#dialog1").dialog("option", "height", 300);
  });

  $("#dialog1").dialog({});
});
