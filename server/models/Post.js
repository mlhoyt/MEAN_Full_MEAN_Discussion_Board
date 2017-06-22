// -*- javascript -*-

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = function( globals ) {
  let PostSchema = new mongoose.Schema(
    {
      text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
      },
      _user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      _topic: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
      },
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

  let Post = mongoose.model( 'Post', PostSchema );
}
