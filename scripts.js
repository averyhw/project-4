$(document).ready(function () {
  initMap();
});


$( function() {
    $( "#tabs" ).tabs();
  } );

var rapid = new RapidAPI("default-application_5a1d752ce4b0218e3e35df80", "fd731434-9692-49d7-8205-90cface226df");
rapid.call('LastFM', 'getTopTracksChart', {
	'apiKey': '08cf14083a04b47fac485d0f6a7c524a',
	'limit': '10'

}).on('success', function (payload) {
   parseData(payload);
}).on('error', function (payload) {
   console.log(payload);
});

function parseData(payload){
  console.log(payload);
  var html = "";
  var tempPath = payload["tracks"]["track"];
  var tracks = [];
  var track = "";
  var artist = "";
  var name = "";
  var image = [];
  var urlToPhoto = "";
  console.log(tempPath.length);


  for (var i = 0, len = tempPath.length; i < len; ++i){
    tracks.push(tempPath[i]);

    if(tempPath[i]["track"] == null){
      track = "";
    }else{
      track = tempPath[i]["track"];
    }

    html += '<a href="' + tempPath[i]["artist"]["url"] + '"target="_blank"><div class="all"><img class="hit image" src="' + tempPath[i]["image"][2]["#text"] + ' ">';
    html += '<h5 class="hit name barlow-semi-condensed">' + tempPath[i]["name"] + '</h5><br/>';
    html += '<p class="hit artist barlow">' + tempPath[i]["artist"]["name"] + '</p></div></a><br/><br/>';

  }
  html += '<p class="footnote">**Based off data from <a href="https://www.last.fm/home">Last.FM</a> music streaming service</p>';

  $("#info").html(html);

}



//ARTISTS

var rapid2 = new RapidAPI("default-application_5a1d752ce4b0218e3e35df80", "fd731434-9692-49d7-8205-90cface226df");

rapid2.call('LastFM', 'getTopArtistsChart', {
	'apiKey': '08cf14083a04b47fac485d0f6a7c524a',
	'limit': '10'

}).on('success', function (payload2) {
	 console.log(payload2);
	 parseData2(payload2);
}).on('error', function (payload2) {
});

function parseData2(payload2){
  console.log(payload2);
  var html = "";
  var tempPath2 = payload2["artists"]["artist"];
  var artists = [];
  var artist2 = "";
  var name2 = "";
  var image2 = [];
  var url = "";
	var playcount = "";

	for (var i = 0, len = tempPath2.length; i < len; ++i){
    artists.push(tempPath2[i]);

    if(tempPath2[i]["artist"] == null){
      artist2 = "";
    }else{
      artist2 = tempPath2[i]["artist"];
    }

    html += '<a href="' + tempPath2[i]["url"] + '"target="_blank"><div class="all"><img class="hit image" src="' + tempPath2[i]["image"][2]["#text"] + ' ">';
    html += '<h5 class="hit name barlow">' + tempPath2[i]["name"] + '</h5><br/>';
    html += '<p class="hit artist barlow">Playcount: ' + tempPath2[i]["playcount"] + '</p></div></a><br/><br/>';

  }
html += '<p class="footnote">**Based off data from <a href="https://www.last.fm/home">Last.FM</a> music streaming service</p>';

$("#info2").html(html);


}


//MAP


function initMap() {
  var map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 2,
    center: {lat:31.700130, lng:-15.292969}
  });

  var abbeyRoadsStudio = {lat:51.5321, lng:0.1781};
  var theDungeon = {lat: 25.7617, lng:-80.1918};
  var muscleShoals = {lat:34.7651, lng:-87.6986};
  var tridentSound = {lat:51.5144, lng:0.1343};
  var sunsetSound = {lat:34.09797, lng:-118.334973};
  var headleyGrange = {lat:51.1147, lng:0.8211};
  var motown = {lat:42.364167, lng:-83.088444};
  var electricStudio = {lat:40.733056, lng:-73.998889};
  var sun = {lat:35.1495, lng:-90.0490};
  var capitol = {lat:34.1031, lng:-118.3262};
  var kingston = {lat:17.983333, lng:-76.8};
  var chasePark = {lat:33.9519, lng:-83.3576};

  var label = "<a href='https://www.abbeyroad.com/' target='_blank'><p class='barlow'>Abbey Road Studios</p></a>";
  var popUp = new google.maps.InfoWindow({
    content: label
  });
  var marker = new google.maps.Marker({
    position: abbeyRoadsStudio,
    map: map2
  });
  marker.addListener('click', function(){
    popUp.open(map2, marker);
  });


  var label2 = "<a href='https://www.dungeonrecording.com/' target='_blank'><p class='barlow'>The Dungeon</p></a>";
  var popUp2 = new google.maps.InfoWindow({
    content: label2
  });
  var marker2 = new google.maps.Marker({
    position: theDungeon,
    map: map2
  });
  marker2.addListener('click', function(){
    popUp2.open(map2, marker2);
  });


  var label3 = "<a href='http://www.msmusicfoundation.org/' target='_blank'><p class='barlow'>Muscle Shoals Studios</p></a>";
  var popUp3 = new google.maps.InfoWindow({
    content: label3
  });
  var marker3 = new google.maps.Marker({
    position: muscleShoals,
    map: map2
  });
  marker3.addListener('click', function(){
    popUp3.open(map2, marker3);
  });


  var label4 = "<a href='http://www.tridentstudios.com/' target='_blank'><p class='barlow'>Trident Studios</p></a>";
  var popUp4 = new google.maps.InfoWindow({
    content: label4
  });
  var marker4 = new google.maps.Marker({
    position: tridentSound,
    map: map2
  });
  marker4.addListener('click', function(){
    popUp4.open(map2, marker4);
  });


  var label5 = "<a href='http://www.sunsetsound.com/' target='_blank'><p class='barlow'>Sunset Sound Studios</p></a>";
  var popUp5 = new google.maps.InfoWindow({
    content: label5
  });
  var marker5 = new google.maps.Marker({
    position: sunsetSound,
    map: map2
  });
  marker5.addListener('click', function(){
    popUp5.open(map2, marker5);
  });


  var label6 = "<a href='http://www.headley-grange.com/' target='_blank'><p class='barlow'>Headley Grange Studios</p></a>";
  var popUp6 = new google.maps.InfoWindow({
    content: label6
  });
  var marker6 = new google.maps.Marker({
    position: headleyGrange,
    map: map2
  });
  marker6.addListener('click', function(){
    popUp6.open(map2, marker6);
  });


  var label7 = "<a href='https://www.motownmuseum.org/' target='_blank'><p class='barlow'>Motown and Hitsville, U.S.A.</p></a>";
  var popUp7 = new google.maps.InfoWindow({
    content: label7
  });
  var marker7 = new google.maps.Marker({
    position: motown,
    map: map2
  });
  marker7.addListener('click', function(){
    popUp7.open(map2, marker7);
  });


  var label8 = "<a href='http://electricladystudios.com/' target='_blank'><p class='barlow'>Electric Lady Studios</p></a>";
  var popUp8 = new google.maps.InfoWindow({
    content: label8
  });
  var marker8 = new google.maps.Marker({
    position: electricStudio,
    map: map2
  });
  marker8.addListener('click', function(){
    popUp8.open(map2, marker8);
  });


  var label9 = "<a href='https://www.sunstudio.com/' target='_blank'><p class='barlow'>Sun Studio</p></a>";
  var popUp9 = new google.maps.InfoWindow({
    content: label9
  });
  var marker9 = new google.maps.Marker({
    position: sun,
    map: map2
  });
  marker9.addListener('click', function(){
    popUp9.open(map2, marker9);
  });


  var label10 = "<a href='http://www.capitolstudios.com/' target='_blank'><p class='barlow'>Capitol Records</p></a>";
  var popUp10 = new google.maps.InfoWindow({
    content: label10
  });
  var marker10 = new google.maps.Marker({
    position: capitol,
    map: map2
  });
  marker10.addListener('click', function(){
    popUp10.open(map2, marker10);
  });


  var label11 = "<a href='http://studioonerecords.com/' target='_blank'><p class='barlow'>Studio One Records</p></a>";
  var popUp11 = new google.maps.InfoWindow({
    content: label11
  });
  var marker11 = new google.maps.Marker({
    position: kingston,
    map: map2
  });
  marker11.addListener('click', function(){
    popUp11.open(map2, marker11);
  });


  var label12 = "<a href='http://www.chaseparktransduction.com/' target='_blank'><p class='barlow'>Chase Parks Transduction Studios</p></a>";
  var popUp12 = new google.maps.InfoWindow({
    content: label12
  });
  var marker12 = new google.maps.Marker({
    position: chasePark,
    map: map2
  });
  marker12.addListener('click', function(){
    popUp12.open(map2, marker12);
  });

}
