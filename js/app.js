// reference: http://stackoverflow.com/questions/24235620/how-to-use-requirejs-with-backbone-firebase-and-backfire
define([
    "js/views/list_view",
    "jquery",
    "backbone",
    "firebase",
    "backfire"
], function (
    ListView,
    $,
    Backbone,
    Firebase
) {
  "use strict";

  $(function () {

    // #1 - this worked
    // var Person = Backbone.Model.extend({
    //     defaults: function() {
    //         return {
    //             fName: 'John',
    //             lName: 'Doe'
    //         };
    //     }
    // });

    // var Collection = Backbone.Firebase.Collection.extend({
    //   model: Person,
    //   firebase: new Firebase("https://glowing-fire-3267.firebaseio.com/")
    // });

    // var Items = new Collection();

    // Items.add(new Person({ fName: 'Matthew', lName: 'Hasbach' }));
    // #1 - this worked

    // #2 - this worked
    // var Item = Backbone.Model.extend({

    // });

    // var Collection = Backbone.Firebase.Collection.extend({
    //   model: Item,
    //   firebase: new Firebase("https://glowing-fire-3267.firebaseio.com/")
    // });

    // window.Items = new Collection();

    // Items.add(new Item({ test1: 'blahblahblah' }));

    // Items.add([
    //   {test3: 'testtest'}
    // ]);
    // end #2 - this worked

    // #3 - this worked
    // var Item = Backbone.Model.extend({

    // });

    // var Collection = Backbone.Firebase.Collection.extend({
    //   model: Item,
    //   firebase: new Firebase("https://glowing-fire-3267.firebaseio.com/items")
    // });

    // window.Items = new Collection();

    // Items.add([
    //   {test4: 'testtest'}
    // ]);
    // #3 - end this worked

    // #4 - this worked
    // var Collection = Backbone.Firebase.Collection.extend({
    //   firebase: new Firebase("https://glowing-fire-3267.firebaseio.com/items")
    // });

    // window.Items = new Collection();

    // Items.add([
    //   {test5: 'testtest'}
    // ]);
    // #4 - this worked

    // #5 - this worked
    // var Collection = Backbone.Firebase.Collection.extend({
    //   firebase: new Firebase("https://glowing-fire-3267.firebaseio.com/items")
    // });

    // var Items = new Collection();

    // Items.add([
    //   {test5: 'testtest'}
    // ]);
    // #5 - end this worked

    // #6 - this worked
    // var Collection = Backbone.Firebase.Collection.extend({
    //   firebase: new Firebase("https://glowing-fire-3267.firebaseio.com/items")
    // });

    // var Items = new Collection();

    // Items.on('sync', callback, context) {
    //     console.log('sync happened');
    //     debugger;
    // });
    // #6 - end this worked

    new ListView();

  });
});