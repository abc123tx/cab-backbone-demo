app.models.TributeModel = (function () {

  var Model = Backbone.Model.extend({

    defaults: {
      title: 'no title',
      content: 'no content'
    }

  });

  return Model;

}(Backbone, _));
