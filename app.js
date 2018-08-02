var key = 'AIzaSyAIw12In1c7pS2PXaIR2m-5FX8BURBTw2g'; 

$ (function() {
    $("select").on("change", function(e) {
        e.preventDefault();
        //prepare request for YT API
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($(instrumentalType).val()).replace(/%20/g, "+"),
            maxResults: 5
        });
        //execute this request
        request.execute(function(response) {
            console.log(response);
        });
    });
});

function init() {
    gapi.client.setApiKey(key);
    gapi.client.load("youtube", "v3", function() {
        //YT API is ready! XD
    });
}