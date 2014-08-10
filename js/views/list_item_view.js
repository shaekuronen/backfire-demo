define([
  "js/collections/list_collection",
  "hbs!templates/list_item_template",
  "jquery",
  "backbone",
  "firebase",
  "backfire"
], function (
  ListCollection,
  listItemTemplate,
  $,
  Backbone,
  Firebase
) {
  "use strict";

  var ListItemView = Backbone.View.extend({

    tagName: 'li',

    template: listItemTemplate,

    events: {

    },

    initialize: function () {


    },

    render: function () {
      console.log('this.render model happen');
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

  });

  return ListItemView;

});