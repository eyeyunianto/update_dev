App.ModalDialogComponent = Ember.Component.extend({
  actions: {
    close: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});