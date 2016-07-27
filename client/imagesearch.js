
Template.imagesearch.helpers({
    results(){
        var data = History.findOne({}, {sort: {createdAt: -1}});
        var offset;
        if(data.page){
            offset = data.page * 10;
            } else {
                offset = 0;
            }
        console.log(data.terms, offset);
        //remove before git commit
        var encodedAppKey = btoa(":licO1e5H4b90ZrM5LLKomN07zJR4HVJQSdyWxA1VZm8");
        //return results;
        var url = "https://api.datamarket.azure.com/Bing/Search/Image?Query=%27" + data.terms + "%27&$top=10&$skip=" + offset + "&$format=json";

        $.ajax({
                type:'POST',
                url:url,
                headers: {
                    "Authorization": "Basic " + encodedAppKey
                }
            }).done(function(bing) {
                var results = [];
                var newData = bing.d.results;
                for(var i in newData){
                    results[i] =({title: newData[i].Title,
                        display: newData[i].DisplayUrl,
                        source: newData[i].SourceUrl,
                        media: newData[i].MediaUrl});
        }
                console.log("results", results);
                 Session.set('result', results);
                //return results;
                });
        // for(var i = 0; i < 10; i++){
        //     results[i] = result[i];
        // }
        var results = Session.get('result');
         return results;
        }
});
