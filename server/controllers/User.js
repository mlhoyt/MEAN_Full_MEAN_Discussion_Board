// -*- javascript -*-

let mongoose = require('mongoose');

let User = mongoose.model( 'User' );

module.exports = {
  create: function( req, res ) {
    let item = new User( req.body );
    item.save()
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },

  read_all: function( req, res ) {
    User.find({})
      // .sort( '{{FIELD_NAME}}|-{{FIELD_NAME}}') // createdAt, -createdAt
      .catch( err => res.status( 500 ).json( err ) )
      .then( data => res.json( data ) );
  },

  read_one: function( req, res ) {
    User.findOne({ _id: req.params.pk })
      .catch( err => res.status( 500 ).json( err ) )
      .then( data => res.json( data ) );
  },

  update: function( req, res ) {
    User.updateOne({ _id: req.params.pk }, {$set: req.body})
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },

  delete: function( req, res ) {
    User.remove({ _id: req.params.pk })
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },
}
