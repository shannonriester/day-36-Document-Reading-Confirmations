import React from 'react';

import DocsCollection from './collections/DocsCollection';
import DocModel from './models/DocModel';

const store = {
  docsCollection: new DocsCollection(),
  docModel: new DocModel()
}

export default store;
