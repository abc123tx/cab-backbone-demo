app.views.TributeView = (function (Backbone, $, _) {

  var View = Backbone.View.extend({

    template: [
      '<div style="margin:10px;">',
      '<h4 class="title"> <%= title %> </h4>',
      '<p><%= content %></p>',
      '</div>'
    ].join(''),

    initialize: function () {
      this.template = _.template(this.template);
    },

    render: function () {

      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  return View;

}(Backbone, $, _))
