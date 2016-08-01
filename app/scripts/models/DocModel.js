import Backbone from 'backbone';
import store from '../store'

const DocModel = Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    isRead: false,
    confirmed: false
  },
  markAsRead: function(){
    // console.log(this);
    this.set('isRead', true);
    // this.set({'confirmed', false});
    // this.set({'isRead':true, 'confirmed':false});
  },
  cancel: function(){
    this.set('isRead', false);
    this.set('confirmed', false);
  },
  confirmAsRead: function(){
    this.set('isRead', true);
    this.set('confirmed', true);
  },
});

export default DocModel;
