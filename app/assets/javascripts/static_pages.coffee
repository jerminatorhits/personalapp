# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="html5lightbox/html5lightbox.js"></script>
    <script type="text/javascript" src="slick/slick.min.js"></script>

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
  </script>

<!-- tabs -->

<script>
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

</script>

<script>
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>