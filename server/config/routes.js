// -*- javascript -*-

let bodyParser = require( 'body-parser' );
let path = require( 'path' );

module.exports = function( globals ) {
  // globals.app.use( bodyParser.urlencoded( { extended: true } ) );
  globals.app.use( bodyParser.json() );

  let Category_ctrlr = require( '../controllers/Category.js' );
  let Topic_ctrlr = require( '../controllers/Topic.js' );
  let Post_ctrlr = require( '../controllers/Post.js' );
  let User_ctrlr = require( '../controllers/User.js' );
  let Comment_ctrlr = require( '../controllers/Comment.js' );

  globals.app.post   ( '/api/categories',     ( req, res ) => Category_ctrlr.create   ( req, res ) );
  globals.app.get    ( '/api/categories',     ( req, res ) => Category_ctrlr.read_all ( req, res ) );
  globals.app.get    ( '/api/categories/:pk', ( req, res ) => Category_ctrlr.read_one ( req, res ) );
  globals.app.put    ( '/api/categories/:pk', ( req, res ) => Category_ctrlr.update   ( req, res ) );
  globals.app.delete ( '/api/categories/:pk', ( req, res ) => Category_ctrlr.delete   ( req, res ) );

  globals.app.post   ( '/api/topics',     ( req, res ) => Topic_ctrlr.create   ( req, res ) );
  globals.app.get    ( '/api/topics',     ( req, res ) => Topic_ctrlr.read_all ( req, res ) );
  globals.app.get    ( '/api/topics/:pk', ( req, res ) => Topic_ctrlr.read_one ( req, res ) );
  globals.app.put    ( '/api/topics/:pk', ( req, res ) => Topic_ctrlr.update   ( req, res ) );
  globals.app.delete ( '/api/topics/:pk', ( req, res ) => Topic_ctrlr.delete   ( req, res ) );

  globals.app.post   ( '/api/posts',     ( req, res ) => Post_ctrlr.create   ( req, res ) );
  globals.app.get    ( '/api/posts',     ( req, res ) => Post_ctrlr.read_all ( req, res ) );
  globals.app.get    ( '/api/posts/:pk', ( req, res ) => Post_ctrlr.read_one ( req, res ) );
  globals.app.put    ( '/api/posts/:pk', ( req, res ) => Post_ctrlr.update   ( req, res ) );
  globals.app.delete ( '/api/posts/:pk', ( req, res ) => Post_ctrlr.delete   ( req, res ) );

  globals.app.post   ( '/api/users',     ( req, res ) => User_ctrlr.create   ( req, res ) );
  globals.app.get    ( '/api/users',     ( req, res ) => User_ctrlr.read_all ( req, res ) );
  globals.app.get    ( '/api/users/:pk', ( req, res ) => User_ctrlr.read_one ( req, res ) );
  globals.app.put    ( '/api/users/:pk', ( req, res ) => User_ctrlr.update   ( req, res ) );
  globals.app.delete ( '/api/users/:pk', ( req, res ) => User_ctrlr.delete   ( req, res ) );

  globals.app.post   ( '/api/comments',     ( req, res ) => Comment_ctrlr.create   ( req, res ) );
  globals.app.get    ( '/api/comments',     ( req, res ) => Comment_ctrlr.read_all ( req, res ) );
  globals.app.get    ( '/api/comments/:pk', ( req, res ) => Comment_ctrlr.read_one ( req, res ) );
  globals.app.put    ( '/api/comments/:pk', ( req, res ) => Comment_ctrlr.update   ( req, res ) );
  globals.app.delete ( '/api/comments/:pk', ( req, res ) => Comment_ctrlr.delete   ( req, res ) );

  let mongoose = require('mongoose');
  let User = mongoose.model( 'User' );

  globals.app.post ( '/actions/login', ( req, res ) => {
    User.findOne( { name: req.body.name } )
      .catch( err => res.status( 500 ).json( err ) )
      .then( data => {
        if( data ) {
          req.session.user_id = data._id;
          console.log( "Debug: server: /actions/login: then: req.session.user_id:", req.session.user_id );
          return res.json( data );
        }
        else {
          let user = new User( { name: req.body.name } );
          user.save()
            .catch( err => res.status( 500 ).json( err ) )
            .then( () => {
              req.session.user_id = user._id;
              console.log( "Debug: server: /actions/login: then: req.session.user_id:", req.session.user_id );
              res.json( user );
            });
        }
      });
  });

  globals.app.get ( '/actions/logout', ( req, res ) => {
    console.log( "Debug: server: /actions/logout: logging out:", req.session.user_id );
    req.session.destroy();
    res.redirect( '/' );
  });

  // Default (delegate to front-end router)
  globals.app.all( '*', ( req, res ) => res.sendFile( path.resolve( './client/dist/index.html' ) ) );
}
