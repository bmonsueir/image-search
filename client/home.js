History = new Mongo.Collection("history");
Template.home.events({
    "submit"(event, template){
        event.preventDefault();
        var page = $('[name=page]').val();
        var terms = $('[name=terms]').val();
        History.insert({terms: terms,
                        page: page,
                        createdAt: new Date()});
        Router.go("imagesearch");
    },
    "click #history"(event){
        event.preventDefault();
        Router.go("latest");
    }
});
