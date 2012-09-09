var active_menu = function(aid) {
    $("#navigation li[class='active']").removeClass("active");
    $("#navigation #" + aid).addClass("active");
};
