;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function(options) {

      var args = options || {};
      this.collection = args.collection;

    },

    routes: {

      '' : 'home',
      'contact/:id': 'singleContact'

    },

    home: function() {
      new app.Views.Main({

        collection : this.collection

      });
    },

    singleContact: function(id) {

      new app.Views.DescView({

        singleId: id,
        collection: this.collection

      });

    }

  });

}());
