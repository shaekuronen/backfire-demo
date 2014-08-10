define([
    "js/models/list_item_model",
    "jquery",
    "backbone",
    "firebase",
    "backfire"
], function (
    listItem,
    $,
    Backbone,
    Firebase
) {
  "use strict";

    var ListCollection = Backbone.Firebase.Collection.extend({
        model: listItem,
        firebase: new Firebase("https://glowing-fire-3267.firebaseio.com/items")
    });

	return ListCollection;

});
