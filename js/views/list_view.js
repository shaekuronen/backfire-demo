define([
	"js/collections/list_collection",
	"js/views/list_item_view",
	"jquery",
	"backbone",
	"firebase",
	"backfire"
], function (
	ListCollection,
	ListItemView,
	$,
	Backbone,
	Firebase
) {
  "use strict";

	var ListView = Backbone.View.extend({

		el: "#bfd-list-view",

		events: {

		},

		initialize: function () {

			this.collection = new ListCollection();

			this.listenTo(this.collection, 'sync', this.render);

		},

		render: function () {

			var listViewElement = this.$el;

			this.collection.each(function(item) {
				var view = new ListItemView({model: item});
				listViewElement.append(view.render().el);
			});

			return this;
		},

	});

	return ListView;

});