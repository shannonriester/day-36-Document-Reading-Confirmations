import React from 'react';

import DocsCollection from './collections/DocsCollection';
import DocModel from './models/DocModel';

const store = {
  docsCollection: new DocsCollection([
      {
        id: 1,
        title: 'Kitty Cat Dox',
        body: 'Hola te quiero sit on the laptop yet i am the best yet under the bed, for groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked! scratch the box. Destroy couch as revenge kitty loves pigs but you call this cat food? fall over dead (not really but gets sypathy) loves cheeseburgers. Hola te quiero run in circles you call this cat food? stare out the window scream at teh bath yet my left donut is missing, as is my right scratch the furniture. Find something else more interesting lick the plastic bag cat is love, cat is life but chase laser.',
      },
      {
        id: 2,
        title: 'Second Dox',
        body: 'Keffiyeh swag irony, gentrify meggings post-ironic aesthetic retro readymade gastropub flannel fanny pack bicycle rights 8-bit. Lumbersexual selfies helvetica, bicycle rights tacos lo-fi blue bottle paleo vinyl viral. Truffaut green juice tacos vinyl, cold-pressed synth small batch bushwick cornhole. 3 wolf moon sriracha cliche gochujang. Trust fund plaid chambray vegan. Bicycle rights literally locavore, kickstarter taxidermy salvia tote bag drinking vinegar whatever tumblr four dollar toast cardigan sustainable authentic. Fixie craft beer portland, literally before they sold out pug hoodie green juice cronut.',
      },
      {
        id:3,
        title: 'Third Dox',
        body: 'Occupy iPhone artisan, listicle actually distillery try-hard lumbersexual kogi pitchfork. Disrupt beard viral, chillwave next level YOLO literally tacos. Shabby chic helvetica health goth, craft beer ennui ethical brooklyn offal. Ugh chillwave cred semiotics plaid. Wolf church-key affogato, next level trust fund bitters waistcoat 3 wolf moon pug man braid umami fixie. Chia banh mi cliche celiac kombucha intelligentsia. Mumblecore listicle DIY yuccie pickled.',
      }]),
  docModel: new DocModel(),
}

export default store;
