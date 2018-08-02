// $(document).ready(function() {

//     var videos = [
//     'pRpvdcjkT3k',
//     'Te4wx4jtiEA',
//     'efTj6UYzvk4'
//     ];
    
//     var index=Math.floor(Math.random() * videos.length);
//     var html='<div id="video"><h3>Random Video</h3><iframe width="720" height="480"   src="http://www.youtube.com/embed/' + videos[index] + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div>';
//     document.write(html);
    
//     });




var eras = [2012, 2013, 2014, 2015, 2016, 2017, 2018];

 var instrumentalType = ' ';

//Stores selected type to variable instrumentalType
$('#instrumentalType').on('change', function(e){
 
        var era = eras[Math.floor (Math.random() * eras.length)];
        var instrumentalType = e.target.value + ' ' + era;
   
   //onClientLoad();
   //search(instrumentalType);
    
   // $('#instrumentalGenerator').on('click', search(instrumentalType));

   //console.log(instrumentalType);


    // $('#instrumentalGenerator').on('click', function(instrumentalType){
    //     console.log('event', instrumentalType.target.value);

    // })
 })



///////////////This below initializes the youtube API for possible searches to commence////////////////
//  function onClientLoad() {
//   gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
// }

// function onYouTubeApiLoad() {
//   gapi.client.setApiKey('AIzaSyCL4GAeAm8tzBAAQ0f7A4U_7S3lp6wwFxg');
// }
 
//////////////////This below searches the youtube data API ///////////////
//  function search(query) {
//     var q = query;
//     var request = gapi.client.youtube.search.list({
//       q: q,
//       part: 'snippet',
//       type: 'video'
//       //key: 'AIzaSyCL4GAeAm8tzBAAQ0f7A4U_7S3lp6wwFxg',
      
//     });
  
//       request.execute(function(response) {
//       var str = JSON.stringify(response.result);
//       $('#search-container').html('<pre>' + str + '</pre>');
//     });
//   }
