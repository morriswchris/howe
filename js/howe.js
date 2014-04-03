//main
$(document).ready(function() {
    var services = {
        "plex": "32400/manage/index.html#!/dashboard",
        "couchpotato": "5050/home/",
        "sickbeard": "8081/home/",
        "transmission": "9091/transmission/web/",
        "sabnzbd": "8082/sabnzbd/"
    };

    function service_switch(e) {

        e.preventDefault();
        var service = $(this).data("id"),
            domain = 'http://' + document.domain + ":",
            serviceUrl = services[service];
        if (serviceUrl) {
            $("iframe").attr('src', domain+serviceUrl);
            $('.sidebar').sidebar("hide");
            $(".item").removeClass("active");
            $(this).addClass("active");
        }
        return false;
    }

    function frameResize() {
        var frame = $("#service-frame");
        if (frame.length > 0) {
            var documentHeight = $(window).innerHeight(),
                newHeight = (documentHeight) + 'px';
            frame.css('height', newHeight);
        }
    }

    $(".sidebar .item").on("click", service_switch);
    $('.sidebar').sidebar('attach events', '#menu-btn');

    $(window).resize(function() {
        frameResize();
    });

    //main
    frameResize();
    var items = $(".item");
    if( items[0]){
        $(items[0]).trigger("click");
    }
});
