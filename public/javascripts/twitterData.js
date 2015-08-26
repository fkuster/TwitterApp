function initialize(){
  var varazdin = new google.maps.LatLng(16.3366066, 46.305746);

  map = new google.maps.Map(document.getElementById('map_canvas'), {
    center: varazdin,
    zoom: 3,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
//Setup heat map and link to Twitter array we will append data to
var heatmap;

var liveTweets = new google.maps.MVCArray();
heatmap = new google.maps.visualization.HeatmapLayer({
data: liveTweets,
radius: 15
});
heatmap.setMap(map);
var socket;
$( "#stop" ).on( "click",function(){
  socket.emit('disconnectt');
  socket.disconnect();
});
$( "#startData" ).on( "click",function(){socket.emit('start',{kljuc:$('#key').val()}); });
$( "#start" ).on( "click",function(){
      socket = io.connect('127.0.0.1:3000');
      var text = document.getElementById("tweet")
      var user = document.getElementById("user")


      socket.on('tweet', function (data) {


      console.log(data.longitude)
      //Add tweet to the heat map array.
    var tweetLocation = new google.maps.LatLng(data.longitude,data.latitude);
    liveTweets.push(tweetLocation);
    text.value=data.text;
    user.value=data.user;
    $( "#tweeter" ).trigger( "click" );
    $( "#userr" ).trigger( "click" );
    text.value='';
    user.value='';
    //Flash a dot onto the map quickly
    // var image = "css/small-dot-icon.png";

    var marker = new google.maps.Marker({
     position: tweetLocation,
     map: map,

     //icon: image
    });
    setTimeout(function(){
     marker.setMap(null);
    },600);

    });});
}

  google.maps.event.addDomListener(window, "load", initialize);
