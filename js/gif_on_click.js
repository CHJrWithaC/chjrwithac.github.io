

$( document ).ready(function() {
    var last_frame = $("#first_frame").attr("src");
    var first_frame = $("#end_frame").attr("src");
    var reversed_animation = $("#forward_gif").attr("src");
    var forward_animation = $("#reversed_gif").attr("src");
  
    var animation_length = 500;

    $("#explosion_gif").click(function(e) {
        if ($("#explosion_gif").attr("src") == first_frame) {
            $("#explosion_gif").attr("src", forward_animation);
            window.setTimeout(function() {
                $("#explosion_gif").attr("src", last_frame);
            }, animation_length);
        } else if ($("#explosion_gif").attr("src") == last_frame) {
            $("#explosion_gif").attr("src", reversed_animation);
            window.setTimeout(function() {
                $("#explosion_gif").attr("src", first_frame);
            }, animation_length);
        }
    });
});