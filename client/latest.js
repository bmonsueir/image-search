
Template.latest.helpers({
    data(){
        var data = History.find({}, {sort: {createdAt: -1}, limit: 20});
        return data;
    }
});
