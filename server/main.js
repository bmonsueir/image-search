import { Meteor } from 'meteor/meteor';
History = new Mongo.Collection("history");
Meteor.startup(() => {
  // code to run on server at startup
});
