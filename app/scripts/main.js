$(document).ready(function () {
  'use strict';

  var endPoint = 'http://172.16.0.40:3002/posts';

  /** function definitions **/

  var createtemplate = function () {
    return [
      '<div style="margin:10px;">',
        '<h4 class="title">' + this.title + '</h4>',
        '<p>' + this.content + '</p>',
      '</div>'
    ];
  };

  var appendTemplate = function (data) {
    var template = createtemplate.call(data);
    $('#tribute-messages').append(template);
  };

  var postMessage = function (title, content) {
    console.log(title, content);
    $.post(endPoint, { post: { title: title, content: content } }, function (data) {
      alert('Message Posted');
      appendTemplate(data.post);
      //getTributes();
    });
  };

  // Get All Tributes
  var getTributes = function (callback) {
    $.getJSON(endPoint, function (data) {
      callback(data);
    });
  };


  getTributes(function (data) {
    $.each(data.posts, function(index, post) {
      console.log(post);
      appendTemplate(post);
    });
  });


  // event handlers
  $('#post-button').click(function () {
    var title = $('#title').val();
    var content = $('#content').val();
    postMessage(title, content);
  });

});
