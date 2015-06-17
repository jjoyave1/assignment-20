(function (){

  'use strict';

  var allContacts = new app.Collections.Contacts();

  allContacts.fetch().done(function(){

    new app.Routers.MainRouter({
      collection : allContacts
    });

    Backbone.history.start();
  });

  // creating color spans
  allContacts.forEach(function() {
    var x = this.favColor;
    console.log(x);
    $('.colors').css("background-color", x.toString());
  });

}());
