$("#select-threat").on("change", function () {
  // Pour le premier select
  switch ($("#select-threat").val()) {
    case "Violence against people":
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
    $(this).val() +
      '<a href="#" class="cross-link"><span class="cross"> &#10005</span></a>'
  );
  $(".cross-link").on("click", function () {
    $("#result-threat").css("visibility", "hidden");
  });
});

$("#select-solution").on("change", function () {
  // Pour le deuxième select
  switch ($("#select-solution").val()) {
    case "Organisation and procedures":
      $("#result-solution").removeClass("procedures");
      $("#result-solution").removeClass("names");
      $("#result-solution").removeClass("human");
      $("#result-solution").addClass("organisation");
      break;
    case "Procedures":
      $("#result-solution").removeClass("organisation");
      $("#result-solution").removeClass("names");
      $("#result-solution").removeClass("human");

      $("#result-solution").addClass("procedures");
      break;
    case "Human Factor":
      $("#result-solution").removeClass("organisation");
      $("#result-solution").removeClass("procedures");
      $("#result-solution").removeClass("names");
      $("#result-solution").addClass("human");
      break;
    case "Name 3":
      $("#result-solution").removeClass("organisation");
      $("#result-solution").removeClass("procedures");
      $("#result-solution").removeClass("human");
      $("#result-solution").addClass("names");
      break;
    case "Name 4":
      $("#result-solution").removeClass("organisation");
      $("#result-solution").removeClass("procedures");
      $("#result-solution").addClass("names");
      break;
  }
  $("#result-solution").css("visibility", "visible");

  $("#result-solution").html(
    $(this).val() +
      '<a href="#" class="cross-link"><span class="cross"> &#10005</span></a>'
  );
  $(".cross-link").on("click", function () {
    $("#result-solution").css("visibility", "hidden");
  });
});
