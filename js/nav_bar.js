
var html_includes_loaded = false;

$( document ).ready(function() {
    $(function(){
        $("#nav_bar").load("/html/nav_bar.html", function() {  // Includes contents for #nav_bar
            // These run only when nav_bar.html contents have been successfully loaded
            $("#menu_icon_wrapper").on("click", function() {
                $("#nav_bar_list").addClass("opened");
                $("#menu_icon_wrapper").addClass("opened");
                $("#back_icon_wrapper").addClass("opened");
                $("body").css("overflow-y", "hidden" );
            });
            $("#back_icon_wrapper").on("click", function() {
                $("#nav_bar_list").removeClass("opened");
                $("#menu_icon_wrapper").removeClass("opened");
                $("#back_icon_wrapper").removeClass("opened");
                $("body").removeAttr("style");
            });
        });
    });
});