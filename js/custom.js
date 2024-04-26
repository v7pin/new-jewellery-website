// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});



function closeModal() {
    document.getElementById('buyNowModal').style.display = 'none';
}

function openModal() {
    document.getElementById('buyNowModal').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    const jewelBox = document.getElementById('jewelBox');
    const jootiBox = document.getElementById('jootiBox');
    const fabricBox = document.getElementById('fabricBox');
  
    jewelBox.addEventListener('click', function() {
      window.location.href = jewelBox.querySelector('a').href;
    });
    jootiBox.addEventListener('click', function() {
      window.location.href = jootiBox.querySelector('a').href;
    });
    fabricBox.addEventListener('click', function() {
      window.location.href = fabricBox.querySelector('a').href;
    });
  
    // Preventing redirection when clicking on 'Shop Now' links directly
    document.querySelectorAll('.box a').forEach(link => {
      link.addEventListener('click', function(event) {
        event.stopPropagation();
      });
    });
  });
