import Backbone from 'backbone';

import DocModel from '../models/DocModel';

const DocsCollection = Backbone.Collection.extend({
  model: DocModel
});

export default DocsCollection;
