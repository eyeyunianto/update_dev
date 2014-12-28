App = Ember.Application.create({
  LOG_TRANSITIONS:true
});

App.Router.map(function() {
  this.resource('countdown');
  this.resource('home');
  this.resource('howto',function(){
  	this.route('featured');
  	this.route('activity');
  	this.route('feeds');
  	this.route('prayer');
  	this.route('qiblah');
  	this.route('masjid');
  })
});