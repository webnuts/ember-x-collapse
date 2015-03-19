import Ember from 'ember';

export default Ember.Component.extend({
  selector: undefined,
  attributeBindings: ['type'],
  collapseOnClickLinkInsideSelector: false,

  didInsertElement: function() {
    var selector = $(this.get('selector'));
    if (this.get('collapseOnClickLinkInsideSelector')) {
      selector.find('a').on('click', function() {
        selector.collapse('hide');
      });
    }
  },

  willClearRender: function() {
    if (this.get('collapseOnClickLinkInsideSelector')) {
      $(this.get('selector')).find('a').off('click', '**');
    }
  },

  click: function() {
    $(this.get('selector')).collapse('toggle');
  }
});