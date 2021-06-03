"use script";

$(document).ready(function () {
  $("#owl-carousel-1").owlCarousel({
    loop: true,
    rtl: true,
    nav: true,
    margin: 40,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

  $("#owl-carousel-2").owlCarousel({
    loop: true,
    rtl: true,
    nav: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 4,
      },
    },
  });

  // the carousel of app one

  $num = $(".my-card").length;
  $even = $num / 2;
  $odd = ($num + 1) / 2;

  if ($num % 2 == 0) {
    $(".my-card:nth-child(" + $even + ")").addClass("active");
    $(".my-card:nth-child(" + $even + ")")
      .prev()
      .addClass("prev");
    $(".my-card:nth-child(" + $even + ")")
      .next()
      .addClass("next");
  } else {
    $(".my-card:nth-child(" + $odd + ")").addClass("active");
    $(".my-card:nth-child(" + $odd + ")")
      .prev()
      .addClass("prev");
    $(".my-card:nth-child(" + $odd + ")")
      .next()
      .addClass("next");
  }

  $num = $(".my-card").length;
  $even = $num / 2;
  $odd = ($num + 1) / 2;

  if ($num % 2 == 0) {
    $(".my-card:nth-child(" + $even + ")").addClass("active");
    $(".my-card:nth-child(" + $even + ")")
      .prev()
      .addClass("prev");
    $(".my-card:nth-child(" + $even + ")")
      .next()
      .addClass("next");
  } else {
    $(".my-card:nth-child(" + $odd + ")").addClass("active");
    $(".my-card:nth-child(" + $odd + ")")
      .prev()
      .addClass("prev");
    $(".my-card:nth-child(" + $odd + ")")
      .next()
      .addClass("next");
  }

  $(".my-card").click(function () {
    $slide = $(".active").width();
    console.log($(".active").position().left);

    if ($(this).hasClass("next")) {
      $(".my-carousel")
        .stop(false, true)
        .animate({ left: "-=" + $slide });
    } else if ($(this).hasClass("prev")) {
      $(".my-carousel")
        .stop(false, true)
        .animate({ left: "+=" + $slide });
    }

    $(this).removeClass("prev next");
    $(this).siblings().removeClass("prev active next");

    $(this).addClass("active");
    $(this).prev().addClass("prev");
    $(this).next().addClass("next");
  });

  // Keyboard nav
  $("html body").keydown(function (e) {
    if (e.keyCode == 37) {
      // left
      $(".active").next().trigger("click");
    } else if (e.keyCode == 39) {
      // right
      $(".active").prev().trigger("click");
    }
  });

  $("#next-project").click(function () {
    $(".active").next().trigger("click");
  });

  $("#prev-project").click(function () {
    $(".active").prev().trigger("click");
  });

  // back to top btn
  let btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});

function responsiveCarousel() {
  let images = document.querySelectorAll(".my-carousel .my-card img");
  if (window.innerWidth <= 767) {
    for (let image of images) {
      image.classList.add("img-fluid");
    }
  } else {
    for (let image of images) {
      image.classList.remove("img-fluid");
    }
  }
}

responsiveCarousel();
window.addEventListener("resize", responsiveCarousel);
