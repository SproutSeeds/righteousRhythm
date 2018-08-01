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

//Stores selected type to a 
$('#instrumentalType').on('change', function(e){
 
        var era = eras[Math.floor (Math.random() * eras.length)];
        var instrumentalType = e.target.value + ' ' + era;
    
    // search(instrumentalType);
    console.log(instrumentalType);


    // $('#instrumentalGenerator').on('click', function(instrumentalType){
    //     console.log('event', instrumentalType.target.value);

    // })
 })

 
//////////////////This below searches the youtube data API ///////////////
 function search(query) {
    var q = query;
    var request = gapi.client.youtube.search.list({
      q: q,
      part: 'snippet'
    });
  
    request.execute(function(response) {
      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');
    });
  }