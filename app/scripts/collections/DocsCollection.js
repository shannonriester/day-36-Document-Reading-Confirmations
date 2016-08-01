import Backbone from 'backbone';

import DocModel from '../models/DocModel';

const DocsCollection = Backbone.Collection.extend({
  model: DocModel,
  data: [
    {
      id: 1,
      title: 'First Dox',
      body: 'Next level poutine lumbersexual, PBR&B twee sartorial kinfolk sustainable tattooed meh hammock tilde. Heirloom try-hard photo booth pork belly pinterest cornhole. Thundercats bicycle rights echo park venmo, pickled +1 tumblr cred humblebrag. Thundercats freegan narwhal wolf pork belly mlkshk. Small batch crucifix tilde, williamsburg letterpress cold-pressed vinyl. Pabst 90\'s wayfarers, gluten-free seitan bespoke plaid. Microdosing neutra offal forage humblebrag flannel, knausgaard next level migas venmo.',
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
    }]
});

export default DocsCollection;
