

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  // searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}

// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//   searchForm.classList.toggle('active');
//   navbar.classList.remove('active');
//   cartItem.classList.remove('active');
// }

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
  cartItem.classList.toggle('active');
  navbar.classList.remove('active');
  // searchForm.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  // searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}


// image carousel
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]")
    
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
// end image carousel


// start clear contact form
// const btn = document.getElementById("contact");

// btn.addEventListener('submit', function handleSubmit(event) {
//   event.preventDefault();

//   const inputs = document.querySelectorAll('#name, #email, #message')

//   inputs.forEach(input => {
//     input.value = '';
//   });
// });
// end clear contact form





// start google API section
function initMap()  {


  // start map styling
  const mapTypeStylesArray = [
    {
      "featureType": "all",
      "elementType": "labels.text",
      "stylers": [
        {
          "hue": "#ff0000"
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "saturation": 36
        },
        {
          "color": "#959595"
        },
        {
          "lightness": 40
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#000000"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 17
        },
        {
          "weight": 1.2
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#793a29"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "lightness": 29
        },
        {
          "weight": 0.2
        },
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 18
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#6a6a6a"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#362723"
        },
        {
          "lightness": 19
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 8
        }
      ]
    }
  ]
// end map styling


// start map options
  let mapOptions = {
  center: { lat: 45.523064, lng: -122.676483 },
  zoom: 12,
  styles: mapTypeStylesArray,
  // zoom: 16,
  // mapTypeId: 'terrain',
  // mapTypeId: 'satellite',
  mapTypeControlOptions: {
    mapTypeIds: ['roadmap', 'hybrid']
  }
  }
  // end map options


  // new map
  let map = new google.maps.Map(document.getElementById("map"), mapOptions);
  // end new map


  // start markers
  let marker = new google.maps.Marker({
  position: { lat: 45.5084, lng: -122.6660 },
  map: map,
  });

  let marker2 = new google.maps.Marker({
  position: { lat: 45.5593, lng: -122.6552 },
  map: map,
  });

  let marker3 = new google.maps.Marker({
  position: { lat: 45.5193, lng: -122.6023 },
  map: map,
  });

  let marker4 = new google.maps.Marker({
  position: { lat: 45.5118, lng: -122.6231 },
  map: map,
  });

  let marker5 = new google.maps.Marker({
  position: { lat: 45.5525, lng: -122.6807 },
  map: map,
  });
  // end markers


  // start info window
  const infoWindowOptions = {
  position: { lat: 45.523064, lng: -122.676483 },
  maxWidth: 200
  }

  const infoWindow = new google.maps.InfoWindow(infoWindowOptions)

  infoWindow.setContent('meet me!')

  const infoWindowOpenOptions = {
  map: map,
  anchor: marker,
  shouldFocus: false
  }

  infoWindow.open(infoWindowOpenOptions);
  setTimeout(() => {
  infoWindowOpenOptions.anchor = marker2;
  infoWindow.open(infoWindowOpenOptions);
  }, 3000)
  setTimeout(() => {
  infoWindowOpenOptions.anchor = marker3;
  infoWindow.open(infoWindowOpenOptions);
  }, 6000)
  setTimeout(() => {
  infoWindowOpenOptions.anchor = marker4;
  infoWindow.open(infoWindowOpenOptions);
  }, 9000)
  setTimeout(() => {
  infoWindowOpenOptions.anchor = marker5;
  infoWindow.open(infoWindowOpenOptions);
  }, 12000)

  map.setTilt(45)
  }
  // end info window
// end google API section