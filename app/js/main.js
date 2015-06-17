(function (){

  'use strict';

  var allContacts = new app.Collections.Contacts();

  allContacts.fetch().done(function(){

    new app.Routers.MainRouter({
      collection : allContacts
    });

    Backbone.history.start();
  });

}());
