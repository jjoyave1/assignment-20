;(function (){

  'use strict';

  app.Views.DescView = Backbone.View.extend({

    className: 'single',

    template: hbs.desc,

    events: {
      'click #delete' : 'deleteBookmark'
    },

    initialize: function (options) {

      var args = options || {};

      this.singleId = args.singleId;
      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    render: function () {

      var singleContact = this.collection.get(this.singleId);
      this.$el.html(this.template(singleContact.toJSON()));
    },

    deleteBookmark: function (event) {

      var button = event.target;
      var modelID = $(button).data('id');
      var whichOne = this.collection.get(modelID);

      whichOne.destroy().success( function () {
        console.log('Item deleted');
        new app.Views.Main();
      });
    }

  });

}());
