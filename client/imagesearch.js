
Template.imagesearch.helpers({
    results(){
        var data = History.findOne({}, {sort: {createdAt: -1}});
        console.log(data.terms, data.page);
        var offset = data.page * 10;
        //remove before git commit
        
        //return results;
        var url = "https://api.datamarket.azure.com/Bing/Search/Web?Query=%27" + data.terms + "%27&$skip=" + offset + "$format=json";
        $.ajax({
            type:'POST',
            url:url,
            headers: {
                "Authorization": "Basic " + encodedAppKey
            }
        }).done(function(data) {
    //alert(data);
    console.log(data);
    });
    }
});
