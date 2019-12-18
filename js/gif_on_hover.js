$( document ).ready(function() {
  var last_frame = $("#first_frame").attr("src");
  var first_frame = $("#end_frame").attr("src");
  var reversed_animation = $("#forward_gif").attr("src");
  var forward_animation = $("#reversed_gif").attr("src");

  var animation_length = 500;
  var playing = false;
  var checking_if_playing = false;

  function playForward() {
    if ($("#explosion_gif").is(":hover")){
      playing = true;
      $("#explosion_gif").attr("src", forward_animation);
      window.setTimeout(function () {
        $("#explosion_gif").attr("src", last_frame);
        playing = false;
      }, animation_length);
    }
    else {
      $("#explosion_gif").attr("src", first_frame);
    }
  }

  function playBackward() {
    if ($("#explosion_gif").is(":hover")) {
      $("#explosion_gif").attr("src", last_frame);
    }
    else {
      playing = true;
      $("#explosion_gif").attr("src", reversed_animation);
      window.setTimeout(function () {
        $("#explosion_gif").attr("src", first_frame);
        playing = false;
      }, animation_length);
    }
  }

  $("#explosion_gif").mouseover(function (e) {
      if (!checking_if_playing) {
        checking_if_playing = window.setInterval(function () {
          if (!playing) {
            window.clearInterval(checking_if_playing);
            playForward();
            checking_if_playing = false;
          }
        }, 0);
      }
  });

  $("#explosion_gif").mouseout(function (e) {
      if (!checking_if_playing) {
        checking_if_playing = window.setInterval(function () {
          if (!playing) {
            window.clearInterval(checking_if_playing);
            playBackward();
            checking_if_playing = false;
          }
        }, 0);
      }
  });
});