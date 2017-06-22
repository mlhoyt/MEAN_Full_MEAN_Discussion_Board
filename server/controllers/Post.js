// -*- javascript -*-

let mongoose = require('mongoose');

let Post = mongoose.model( 'Post' );

module.exports = {
  create: function( req, res ) {
    let item = new Post( req.body );
    item.save()
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },

  read_all: function( req, res ) {
    Post.find({})
      // .sort( '{{FIELD_NAME}}|-{{FIELD_NAME}}') // createdAt, -createdAt
      .catch( err => res.status( 500 ).json( err ) )
      .then( data => res.json( data ) );
  },

  read_one: function( req, res ) {
    Post.findOne({ _id: req.params.pk })
      .catch( err => res.status( 500 ).json( err ) )
      .then( data => res.json( data ) );
  },

  update: function( req, res ) {
    Post.updateOne({ _id: req.params.pk }, {$set: req.body})
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },

  delete: function( req, res ) {
    Post.remove({ _id: req.params.pk })
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },
}
