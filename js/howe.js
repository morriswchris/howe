//main
$(document).ready(function() {
  var services = {
    "plex": "32400/manage/index.html#!/dashboard",
    "couchpotato": "5050/home/",
    "sickbeard": "8081/home/",
    "sabnzbd": "8082/sabnzbd/"
  };



  function service_switch(e) {
    e.preventDefault();
    var service = $(this).data("id");
    frame_switch(service)
    return false;
  }

  function frame_switch(service) {
    var serviceUrl = services[service],
    domain = 'http://' + document.domain + ":";
    if (serviceUrl) {
      window.location.href = "#"+service;
      $("iframe").attr('src', domain+serviceUrl);
      $('.sidebar').sidebar("hide");
      $(".item").removeClass("active");
      $(this).addClass("active");
    }
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

  $("#close").on("click", function(){
    $('.sidebar').sidebar('hide');
  });

  //main
  frameResize();
  var items = $(".item .menu .item"),
  hash = window.location.hash.replace("#", "");

  if(services[hash]) {
    frame_switch(hash);
  }
  else if( items[0]){
    $(items[0]).trigger("click");
  }
  $('.sidebar').sidebar('show');
});
