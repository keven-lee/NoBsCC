$(document).ready(function() {
    $(".full-screen").css("min-height", $(window).height()), $(".down-arrow").on("click", function(event) {
        event.preventDefault();
        var e = $(this).parents("header").next("nav");
        $("html,body").animate({
            scrollTop: e.offset().top
        }, "normal", "swing")
    });
});

function parallax(a, b, c) {
    var d = $(window).scrollTop();
    a.css("top", -(d * c) + b + "px")
}

$(window).resize(function() {
    $(".full-screen").css("min-height", $(window).height())

});

$(window).scroll(function() {
    parallax($(".main-copy"), 300, .7),
        parallax($(".diagonal-shape-1"), 64, .1), parallax($(".diagonal-shape-2"), 634, .6), $(window).scrollTop() > $("header").height() - $("nav").height() ? $("nav").addClass("topfix") : $("nav").removeClass("topfix")
});