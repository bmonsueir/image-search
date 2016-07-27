Router.configure({
    layoutTemplate:'layout'

});
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
//
//import { Short } from '/imports/api/shorty.js';
Router.map(function(){
    this.route('imagesearch', {path: '/imagesearch'});
    this.route('latest', {path: '/latest'});
    this.route('home', {path: '/'});
});
