// -*- javascript -*-

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = function( globals ) {
  let TopicSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
      },
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
      _category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
      },
      _xposts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
        default: [],
      }],
    },
    {
      timestamps: true,
    }
  );

  let Topic = mongoose.model( 'Topic', TopicSchema );
}
