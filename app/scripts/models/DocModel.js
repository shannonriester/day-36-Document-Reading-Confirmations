import Backbone from 'backbone';

const DocModel = Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    
  },
  completed: function(){},
});

export default DocModel;
