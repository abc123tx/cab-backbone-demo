app.collections.TributeCollection = (function (Backbone, _, $) {

  var Collection = Backbone.Collection.extend({
    url: 'http://172.16.0.40:3002/posts',

    parse: function (response) {
      return response.posts;
    }
  });

  return Collection;

}(Backbone, _, $))
