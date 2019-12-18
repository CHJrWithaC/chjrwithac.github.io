

$(".carousel_next").click( function () {
    // Find current displayed carousel item's corresponding dot
    var carousel_nav_bar = $(this).parent();
    var carousel_dot_current = carousel_nav_bar.find(".carousel_dot.is_displaying");
    // Find current displayed carousel item
    var carousel_wrapper = carousel_nav_bar.parent();
    var carousel_item_current = carousel_wrapper.find(".carousel_item.is_displaying");
    // Remove .is_displaying from both
    carousel_item_current.removeClass("is_displaying");
    carousel_dot_current.removeClass("is_displaying");
    // Pause video if carousel item is a video
    if (carousel_item_current.find("video").length != 0) {
        carousel_item_current.find("video")[0].pause();
    }

    var carousel_item_next = null;
    var carousel_dot_next = null;
    // Getting next carousel item
    if (carousel_item_current.next(".carousel_item").length != 0) {
        carousel_item_next = carousel_item_current.next(".carousel_item");
    } else {
        carousel_item_next = carousel_item_current.siblings(".carousel_item").first();
    }
    // Getting next carousel dot
    if (carousel_dot_current.next(".carousel_dot").length != 0) {
        carousel_dot_next = carousel_dot_current.next(".carousel_dot");
    } else {
        carousel_dot_next = carousel_dot_current.siblings(".carousel_dot").first();
    }
    // Add .is_displaying class to both
    carousel_item_next.addClass("is_displaying");
    carousel_dot_next.addClass("is_displaying");
});

$(".carousel_prev").click( function () {
    // Find current displayed carousel item's corresponding dot
    var carousel_nav_bar = $(this).parent();
    var carousel_dot_current = carousel_nav_bar.find(".carousel_dot.is_displaying");
    // Find current displayed carousel item
    var carousel_wrapper = carousel_nav_bar.parent();
    var carousel_item_current = carousel_wrapper.find(".carousel_item.is_displaying");
    // Remove .is_displaying from both
    carousel_item_current.removeClass("is_displaying");
    carousel_dot_current.removeClass("is_displaying");
    // Pause video if carousel item is a video
    if (carousel_item_current.find("video").length != 0) {
        carousel_item_current.find("video")[0].pause();
    }

    var carousel_item_next = null;
    var carousel_dot_next = null;
    // Getting prev carousel item
    if (carousel_item_current.prev(".carousel_item").length != 0) {
        carousel_item_prev = carousel_item_current.prev(".carousel_item");
    } else {
        carousel_item_prev = carousel_item_current.siblings(".carousel_item").last();
    }
    // Getting prev carousel dot
    if (carousel_dot_current.prev(".carousel_dot").length != 0) {
        carousel_dot_prev = carousel_dot_current.prev(".carousel_dot");
    } else {
        carousel_dot_prev = carousel_dot_current.siblings(".carousel_dot").last();
    }
    // Add .is_displaying class to both
    carousel_item_prev.addClass("is_displaying");
    carousel_dot_prev.addClass("is_displaying");
});