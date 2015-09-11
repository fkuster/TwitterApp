var tweetCounter=0;
var tweetsBySec=0;
var lang="";
$(function () {
    $('#container2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            events: {
                load: function () {


                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {

                      var updated=0;
                        //  series.data[0].update({y:tweetCounter});

                        for (index = 0; index < series.data.length; ++index) {

                          if(series.data[index].code==lang){
                            series.data[index].update({y:series.data[index].y+1});
                          //  updated=1;
                          }
                        }

                      //  if(updated==0)  series.addPoint([lang, 1], true, true);

                    }, 200);
                }
            }
        },
        title: {
            text: 'Prikaz zastupljenosti pojedinog jezika u objavama'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: "Jezik",
            colorByPoint: true,
            data: [
  {

    "code": "fr",
    "status": "production",
    "name": "Francuski",y:0
  },
  {
    "code": "en",
    "status": "production",
    "name": "Engleski",y:0

  },
  {
    "code": "ar",
    "status": "production",
    "name": "Arapski",y:0
  },
  {
    "code": "ja",
    "status": "production",
    "name": "Japanski",y:0
  },
  {
    "code": "es",
    "status": "production",
    "name": "Španjolski",y:0
  },
  {
    "code": "de",
    "status": "production",
    "name": "Njemački",y:0
  },
  {
    "code": "it",
    "status": "production",
    "name": "Talijanski",y:0
  },
  {
    "code": "id",
    "status": "production",
    "name": "Indonezijski",y:0
  },
  {
    "code": "pt",
    "status": "production",
    "name": "Portugalski",y:0
  },
  {
    "code": "ko",
    "status": "production",
    "name": "Korejski",y:0
  },
  {
    "code": "tr",
    "status": "production",
    "name": "Turski",y:0
  },
  {
    "code": "ru",
    "status": "production",
    "name": "Ruski",y:0
  },
  {
    "code": "nl",
    "status": "production",
    "name": "Nizozemski",y:0
  },
  {
    "code": "fil",
    "status": "production",
    "name": "Filipinski",y:0
  },
  {
    "code": "msa",
    "status": "production",
    "name": "Malezijski",y:0
  },
  {
    "code": "zh-tw",
    "status": "production",
    "name": "Tradicionalni kineski",y:0
  },
  {
    "code": "zh-cn",
    "status": "production",
    "name": "Pojednostavljeni kineski",y:0
  },
  {
    "code": "hi",
    "status": "production",
    "name": "Hindi",y:0
  },
  {
    "code": "no",
    "status": "production",
    "name": "Norveški",y:0
  },
  {
    "code": "sv",
    "status": "production",
    "name": "Švedski",y:0
  },
  {
    "code": "fi",
    "status": "production",
    "name": "Finski",y:0
  },
  {
    "code": "da",
    "status": "production",
    "name": "Danski",y:0
  },
  {
    "code": "pl",
    "status": "production",
    "name": "Poljski",y:0
  },
  {
    "code": "hu",
    "status": "production",
    "name": "Mađarski",y:0
  },
  {
    "code": "fa",
    "status": "production",
    "name": "Farsi",y:0
  },
  {
    "code": "he",
    "status": "production",
    "name": "Hebrejski",y:0
  },
  {
    "code": "ur",
    "status": "production",
    "name": "Urdu",y:0
  },
  {
    "code": "th",
    "status": "production",
    "name": "Thai",y:0
  },
  {
    "code": "en-gb",
    "status": "production",
    "name": "Engleski UK",y:0
  }
]
        }]
    });
});$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#container3').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {


                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = tweetsBySec;
                                tweetsBySec=0;
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Broj objava u sekundi'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Zbroj objava'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Broj objava u sekundi',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -25; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: 0
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});

$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#container').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {


                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = tweetCounter;
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Kumulativ objava'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Zbroj objava'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Kumulativ objava',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -25; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: 0
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});

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
  lang="";
  socket.disconnect();
});
$( "#startData" ).on( "click",function(){socket.emit('start',{kljuc:$('#key').val()}); });
$( "#start" ).on( "click",function(){
      socket = io.connect('127.0.0.1:3000');
      var text = document.getElementById("tweet")
      var user = document.getElementById("user")


      socket.on('tweet', function (data) {
        tweetCounter++;
        tweetsBySec++;
        lang = data.lang;


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
