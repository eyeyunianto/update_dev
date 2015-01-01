App = Ember.Application.create({
  LOG_TRANSITIONS:true
});

App.Router.map(function() {
  this.resource('countdown');
  this.resource('home');
  this.resource('howto')
});