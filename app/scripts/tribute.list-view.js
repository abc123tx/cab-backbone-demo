app.views.TributeListView = (function (Backbone, _, $, app) {

  var View = Backbone.View.extend({
    tagName: 'div',
    id: 'tribute-posts',

    initialize: function () {
    },

    render: function () {

      this.collection.forEach(this.addOne, this);

      return this;
    },

    addOne: function(post) {
      var tributeView = new app.views.TributeView({ model: post });
      this.$el.append(tributeView.render().el);
    }

  });

  return View;

}(Backbone, _, $, app));
