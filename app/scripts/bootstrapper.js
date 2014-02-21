(function (app) {

  'use strict';

  var $tributes = $('#tributes');
  console.log('the app', app);

  var tributeCollection = new app.collections.TributeCollection();

  // fetch posts
  tributeCollection.fetch().then(function () {
    console.log(app.views);

    var tributeListView = new app.views.TributeListView({ collection: tributeCollection });
    $tributes.append(tributeListView.render().el);
  });


  /*var tributeModel = new app.models.TributeModel();

  var tributeView = new app.views.TributeView({ model: tributeModel });
  tributeView.render();*/



}(window.app));
