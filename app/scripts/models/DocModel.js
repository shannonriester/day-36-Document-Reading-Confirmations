import Backbone from 'backbone';
import store from '../store'

const DocModel = Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    isRead: false,
    confirmed: false
  },
  markAsRead: function(){
    this.set('isRead', true);
    this.set('confirmed', false);
  },
  cancel: function(){
    this.set('isRead', false);
    this.set('confirmed', false);
  },
  // confirmRead: function(id){
  //   console.log(id);
  //   let readDocs = store.session.get('readDocs')
  //   confirmedDoc = store.docsCollection.get('id');
  // },
});

export default DocModel;
