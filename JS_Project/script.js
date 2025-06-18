let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  navigator.geolocation.getCurrentPosition((position) => {
    map = new Map(document.getElementById("map"), {
      center : {lat : position.coords.latitude, lng : position.coords.longitude},
      zoom : 20,
    });
  }, (error) => {
    console.log(error);
  });

}

initMap();