$(document).ready(function () {
    if ($.cookie('visited_count') == null) {
        $.cookie('visited_count', 1)
    }
    else {
        $.cookie('visited_count', $.cookie('visited_count') + 1)
        $("#visited_count").text($.cookie('visited_count'));
    }
});

function buttonClick(e) {
    if ($("#name").val() == "") {
        return;
    }

    location.href = 'hello.html?name=' + encodeURIComponent($("#name").val());
}