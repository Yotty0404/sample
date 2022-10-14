$(document).ready(function () {
    if ($.cookie('visited_count') == null) {
        $.cookie('visited_count', 1)
    }
    else {
        $.cookie('visited_count', Number($.cookie('visited_count')) + 1)
        $("#visited_count").text($.cookie('visited_count'));
    }
});

function buttonClick() {
    var name = $("#name").val();
    if (name == "") {
        return;
    }

    location.href = 'hello.html?name=' + encodeURIComponent(name);
}
