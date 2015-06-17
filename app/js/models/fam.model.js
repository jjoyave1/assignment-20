;(function (){

  'use strict';

  app.Models.Contact = Backbone.Model.extend({

    idAttribute: "_id", //MongoDB syntax

    defaults: {
      name: "",
      lastName: "",
      image: "#",
      age: "",
      favColor: ""

    }

  });

}());
