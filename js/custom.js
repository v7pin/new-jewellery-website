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

  document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.querySelector('.product-container');
    const nxtBtn = document.querySelector('.nxt-btn');
    const preBtn = document.querySelector('.pre-btn');
    const productCards = document.querySelectorAll('.product-card');
    let autoSlideInterval = 3000; // Interval in milliseconds for automatic sliding
    let currentIndex = 0;
  
    // Click events for navigation buttons
    nxtBtn.addEventListener('click', () => slideProduct('next'));
    preBtn.addEventListener('click', () => slideProduct('prev'));
  
    function slideProduct(direction) {
      if (direction === 'next') {
        if (currentIndex >= productCards.length - 1) {
          currentIndex = 0; // Reset to the first card
          productContainer.scrollLeft = 0; // Reset scroll position instantly
        } else {
          currentIndex++;
          productContainer.scrollLeft = currentIndex * (productCards[0].clientWidth + 40); // Assumes 40px gap
        }
      } else {
        if (currentIndex <= 0) {
          currentIndex = productCards.length - 1; // Move to the last card
          productContainer.scrollLeft = currentIndex * (productCards[0].clientWidth + 40);
        } else {
          currentIndex--;
          productContainer.scrollLeft = currentIndex * (productCards[0].clientWidth + 40);
        }
      }
    }
  
    // Automatic sliding
    setInterval(() => {
      slideProduct('next');
    }, autoSlideInterval);
  });
  
  