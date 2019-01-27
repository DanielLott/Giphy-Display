var topics = ["dogs", "cats"];

for (i = 0; i < topics.length; i++) {
    $("#button-space").append("<button type='button' id=" + topics[i] + ">" + topics[i] + "</button> &nbsp")
};





var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=u7in95n6bpAdSKokF8jxhfo3dX55hm7B&limit=10");
xhr.done(function(data) {
    console.log("success got data", data);
 });