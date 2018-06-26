;(function($) {
  "use strict";
  
	var baMap;

	function initMap() {

		var poltava = {lat: 49.599999, lng: 34.530581};

		baMap = new google.maps.Map(
			document.querySelector('.ba-map'), 
			{
				center: poltava,
				zoom: 15,
        disableDefaultUI:true,
        styles: [
                  {
                      "featureType": "administrative",
                      "elementType": "labels.text.fill",
                      "stylers": [
                          {
                              "color": "#444444"
                          }
                      ]
                  },
                  {
                      "featureType": "landscape",
                      "elementType": "all",
                      "stylers": [
                          {
                              "color": "#f2f2f2"
                          }
                      ]
                  },
                  {
                      "featureType": "poi",
                      "elementType": "all",
                      "stylers": [
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "road",
                      "elementType": "all",
                      "stylers": [
                          {
                              "saturation": -100
                          },
                          {
                              "lightness": 45
                          }
                      ]
                  },
                  {
                      "featureType": "road.highway",
                      "elementType": "all",
                      "stylers": [
                          {
                              "visibility": "simplified"
                          }
                      ]
                  },
                  {
                      "featureType": "road.arterial",
                      "elementType": "labels.icon",
                      "stylers": [
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "transit",
                      "elementType": "all",
                      "stylers": [
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "water",
                      "elementType": "all",
                      "stylers": [
                          {
                              "color": "#ff802e"
                          },
                          {
                              "visibility": "on"
                          }
                      ]
                  }
              ]
      });
      var marker = new google.maps.Marker({
        position: {lat: 49.599999, lng: 34.530581},
        map: baMap,
        icon:'../img/marker.png'
        });    
    }

 // initMap();
window.addEventListener('load', initMap);

 
})(jQuery);