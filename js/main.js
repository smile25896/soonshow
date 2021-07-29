$(document).ready(function () {
  $(".single-item").slick({
    autoplay: true,
  });

  $(".group-buying-box").slick({
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".user-slider-box").slick({
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".share-slider").slick({
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".channel-box").slick({
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    // dots: true,
    // responsive: [
    //   {
    //     breakpoint: 1220,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 840,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  });

  setCountdownInterval("#countdown1", new Date("2021/08/11 18:00:00"));
  setCountdownInterval("#countdown2", new Date("2021/08/11 18:00:00"));
  setCountdownInterval("#countdown3", new Date("2021/08/11 18:00:00"));
  setCountdownInterval("#countdown4", new Date("2021/08/11 18:00:00"));
  setCountdownInterval("#countdown5", new Date("2021/08/11 18:00:00"));
});

function setCountdownInterval(id, destDay) {
  setInterval(() => {
    setCountDown(id, destDay);
  }, 1000);
}

function setCountDown(id, destDay) {
  const diffTime = destDay - new Date();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

  document.querySelector(id + " .time-item .day").textContent =
    padZero(diffDays);
  document.querySelector(id + " .time-item .hour").textContent =
    padZero(diffHours);
  document.querySelector(id + " .time-item .minute").textContent =
    padZero(diffMinutes);
  document.querySelector(id + " .time-item .second").textContent =
    padZero(diffSeconds);
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
