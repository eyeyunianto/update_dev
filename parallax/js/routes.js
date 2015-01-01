App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    // this.transitionTo('countdown')
    var controller = App.IndexController.create();
    controller.send('checkdate')
  },
  actions:{
    openModal: function(modalName, model) {
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
App.CountdownRoute = Ember.Route.extend({
  setupController: function() {
    setTimeout(function(){
      var controller = App.CountdownController.create();
      controller.send('countdown')
    })
  }
});
App.HomeRoute = Ember.Route.extend({
  model: function() {
  },
  actions:{
  }
})