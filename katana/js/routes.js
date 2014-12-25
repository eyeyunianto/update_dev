App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    // this.transitionTo('countdown')
    var controller = App.IndexController.create();
    controller.send('checkdate')
  },
  actions:{
    openModal: function(modalName, model) {
      setTimeout(function(){
        if(modalName=='register'){
          console.log('reg')
          if(signup[1]){
            $('#reg_email').val(signup[1])
          }
          if(signup[2]){
            $('#reg_pass').val(signup[2]);
            $('#reg_pass2').val(signup[2]);
          }
        }
      });
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