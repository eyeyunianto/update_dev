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
      // $(document).ready(function() {
      //   var currentDate = new Date();
      //   var release = new Date(2014, 11, 29);
      //   var diff = release.getTime() / 1000 - currentDate.getTime() / 1000
      //   console.log(diff)
      //   console.log(release)
      //   console.log(currentDate)
      //   clock = $('.clock').FlipClock(diff, {
      //     clockFace: 'DailyCounter',
      //     countdown:true,
      //     callbacks:{
      //       stop:function(){
      //         link.transitionTo('home')
      //       }
      //     }
      //   });
      // });
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
    }
  }
})
App.HomeController = Ember.ObjectController.extend({
  init:function(){
  },
  actions:{
  }
})