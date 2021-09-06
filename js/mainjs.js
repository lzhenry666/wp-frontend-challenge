$("document").ready(function() {
  $(".navbar-toggler-icon img").click(function() {
    if ($(this).attr("src") === "/img/menu.png")
      $(this).attr("src", "/img/close.png");
    else if ($(this).attr("src") === "/img/close.png")
      $(this).attr("src", "/img/menu.png");
  });
});