// -*- javascript -*-

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = function( globals ) {
  let UserSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
        minlength: 1,
        trim: true,
      },
      _xposts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
        default: [],
      }],
      _topics: [{
        type: Schema.Types.ObjectId,
        ref: 'Topic',
        default: [],
      }],
      _comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        default: [],
      }],
    },
    {
      timestamps: true,
    }
  );

  let User = mongoose.model( 'User', UserSchema );
}
