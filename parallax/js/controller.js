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
      var release = new Date(2015, 1, 12);
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
    $('.clock').countdown('2015/1/12 00:00:00')
      .on('update.countdown', function(event) {
        var format = '%H:%M:%S';
        if(event.offset.days > 0) {
          format = '<span class="c_txt">%-d day%!d</span><br>' + format;
        }
        if(event.offset.weeks > 0) {
          format = '<span class="c_txt">%-w week%!w</span><br>' + format;
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
    setTimeout(function(){
      load_parallax()
    })
  },
  actions:{
  }
})