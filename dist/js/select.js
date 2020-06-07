$("#select-threat").on("change", function () {
  switch ($("#select-threat").val()) {
    case "Organisation and procedures":
        $("#result-threat").removeClass("pickpocket");
        $("#result-threat").removeClass("names");
      $("#result-threat").addClass("violence");
      break;
    case "Pickpocketing":
      $("#result-threat").removeClass("violence");
      $("#result-threat").removeClass("names");
      $("#result-threat").addClass("pickpocket");
      break;
    case "Name 2":
      $("#result-threat").removeClass("violence");
      $("#result-threat").removeClass("pickpocket");
      $("#result-threat").addClass("names");
      break;
    case "Name 3":
      $("#result-threat").removeClass("violence");
      $("#result-threat").removeClass("pickpocket");
      $("#result-threat").addClass("names");

      break;
    case "Others":
      $("#result-threat").removeClass("violence");
      $("#result-threat").removeClass("pickpocket");
      $("#result-threat").addClass("names");
      break;
  }
  $("#result-threat").css("visibility", "visible");

  $("#result-threat").html(
    $(this).val() + '<span class="cross"> &#10005</span>'
  );
});
$("#select-solution").on("change", function () {
  $("#result-solution").html(
    $(this).val() + '<span class="cross"> &#10005</span>'
  );
});
