
$(".read_more_button.expand").on("click", function() {
    $(this).siblings(".expand_on_read_more").addClass("expanded");
    $(this).siblings(".read_more_button").addClass("expanded");
    $(this).addClass("expanded");
});
$(".read_more_button.collapse").on("click", function() {
    $(this).siblings(".expanded").removeClass("expanded");
    $(this).removeClass("expanded");
});