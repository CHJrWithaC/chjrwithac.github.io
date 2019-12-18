$( document ).ready(function() {
    var scroll =
        window.requestAnimationFrame
        || function(callback) {
            window.setTimeout(callback, 1000/60); // Sets a timeout, and upon timeout after 1000/60s, call the callback function
        };

    var forward_animation = "/project_media/project_nak/gifs/explosion_1/explosion_1_forward.gif";
    var reversed_animation = "/project_media/project_nak/gifs/explosion_1/explosion_1_reversed.gif";
    var elementsToAnimate = document.querySelectorAll(".animate_on_visible");

    function loop() {
        // Iterate through each element within elementsToAnimate
        elementsToAnimate.forEach(
            function(element) {
                if (isElementInViewport(element)) {
                    // Add class "is_visible" to element
                    element.classList.add("is_visible");
                } else {
                    if (element.classList.contains("on_load_only")) {
                        // Ignore elements that are to be animated once
                        // Remove .animate_on_visible from these elements after first play
                        element.classList.remove("animate_on_visible");
                    } else {
                        // Remove class "is_visible" to element
                        element.classList.remove("is_visible");
                    }
                }
            }
        );
        scroll(loop); // Upon scroll, call loop() again as the callback function, locking script into eternal loop()
        
        // TODO: Learn jQuery syntax and figure out how to play gif on visible
    }

    loop(); // Calls function loop()

    function isElementInViewport(el) {
        // Not sure what this if-block does
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        // Get bounding rectangle of element
        var rect = el.getBoundingClientRect();
        return (
            // True when element is halfway through top of viewport (vertically)
            (rect.top <= 0 && rect.bottom >= 0)
            // True when element is halfway through bottom of viewport (vertically)
            || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
                && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
            // True when element is completely within viewport (vertically)
            || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
    }
});