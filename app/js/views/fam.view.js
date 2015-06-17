;(function (){

  'use strict';

  app.Views.Main = Backbone.View.extend({

    className: 'main',

    events: {
      'submit #addContact': 'addContact'
    },

    template: hbs.main,

    initialize: function(options) {

      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);

    },

    render: function() {
      this.$el.html(this.template({ contact: this.collection.toJSON() }));
    },

    addContact: function(event) {

      event.preventDefault();

      // get form and form values
      var self = this,
          form = $(event.target),
          lastName = form.find('#last-name').val(),
          firstName = form.find('#first-name').val(),
          age = form.find('#age').val(),
          favColor = form.find('#fav-color').val(),
          imageURL = form.find('#image-url').val();

      var name = firstName + " " + lastName;

      // call contact instance
      var f = new app.Models.Contact({

        name : name,
        lastName : lastName,
        age : age,
        favColor : favColor,
        image : imageURL

      });

      // add instance to collection
      this.collection.add(f).save().success( function(){

        self.render();

      });

    }

  });

}());
