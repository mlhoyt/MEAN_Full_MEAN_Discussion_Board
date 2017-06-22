// -*- javascript -*-

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = function( globals ) {
  let CommentSchema = new mongoose.Schema(
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
      _comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      }
    },
    {
      timestamps: true,
    }
  );

  let Comment = mongoose.model( 'Comment', CommentSchema );
}
