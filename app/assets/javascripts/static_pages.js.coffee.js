/* Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/ */

    <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : 291617821255179,
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

<!-- Twitter API connection -->

<script>window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));</script>




    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="html5lightbox/html5lightbox.js"></script>
    <script type="text/javascript" src="slick/slick.min.js"></script>
    <script src="https://apis.google.com/js/platform.js"></script>
    <script type="text/javascript">
      $(document).ready(function(){
        $('.carousel').slick({
          dots: true,
          infinite: true,
          speed: 1500,
          fade: true,
          autoplay: true,
          autoplaySpeed: 6000,
          cssEase: 'linear'
        });
      });
      var MyViewModel = function MyViewModel() {
      var self = this;
      self.myURL = ko.observable('http://jes.al/');
      self.showPreview = ko.observable();

      self.initLinkPreview = function () {
          $.ajax({
              type: "POST",
              url: "/echo/json/",
              data: {
                  json: '{"headers":{"x-frame-options":"ALLOW"}}'
              },
              success: function (data) {
                  var headers = data.headers;
                  if (headers['x-frame-options'] && (headers['x-frame-options'].toUpperCase() == 'DENY' || headers['x-frame-options'].toUpperCase() == 'SAMEORIGIN')) {
                      self.showPreview(false);
                  } else {
                      self.showPreview(true);
                  }
              }
          });

      };
  };

ko.applyBindings(new MyViewModel());


//fullscreen video button


var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}
function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
    // only functional if "loop" is removed 
     vid.pause();
  // to capture IE10
  vidFade();
});
pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
  if (vid.paused) {
vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
        vid.pause();
        pauseButton.innerHTML = "Paused";
  }
});

// tabs

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();
//$(document).ready(function(){
$(document).ready(function(){
  var happy = 1;
});

$("#a").click(function(){
    happy = 1;
});
$("#b").click(function(){
    happy = 2;
});
$("#c").click(function(){
    happy = 3;
});
if(happy == 1){
  document.getElementById("d").click();
}
else if(happy == 2){
  document.getElementById("e").click();
}
else if(happy == 3){
  document.getElementById("f").click();
}

// Smooth scrolling after button click
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
    </script>