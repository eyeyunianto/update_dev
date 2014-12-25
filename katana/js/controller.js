App.ModalController = Ember.ObjectController.extend({
  actions: {
    close: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
App.IndexController = Ember.ObjectController.extend({
  actions:{
    checkdate:function(){
      var currentDate = new Date();
      var release = new Date(2014, 11, 29);
      var diff = release.getTime() / 1000 - currentDate.getTime() / 1000
      if(diff<0){
        return location.href="#/home"
      }else{
        return location.href="#/countdown"
      }
    }
  }
})
App.CountdownController = Ember.ObjectController.extend({
  actions: {
    countdown:function(){
      var link = this;
      var clock;
    $('.clock').countdown('2014/12/29 00:00:00')
      .on('update.countdown', function(event) {
        var format = '%H:%M:%S';
        if(event.offset.days > 0) {
          format = '%-d day%!d<br>' + format;
        }
        if(event.offset.weeks > 0) {
          format = '%-w week%!w <br>' + format;
        }
        $(this).html(event.strftime(format));
      })
      .on('finish.countdown', function(event) {
        location.href="#/home"
      });
    },
    subscribe:function(){
      var txt = $('#txt_subscribe').val()
      if(txt!=''&& txt!='required'){
        alert('Your email '+txt+' was subscribe')
      }else{
        error_handling('#txt_subscribe','required')
      }
    }
  }
})
App.HomeController = Ember.ObjectController.extend({
  init:function(){
  },
  actions:{
  }
})