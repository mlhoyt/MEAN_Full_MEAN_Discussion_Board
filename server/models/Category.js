// -*- javascript -*-

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = function( globals ) {
  let CategorySchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1,
      },
      _topics: [{
        type: Schema.Types.ObjectId,
        ref: 'Topic',
        default: [],
      }],
    },
    {
      timestamps: true,
    }
  );

  let Category = mongoose.model( 'Category', CategorySchema );
}
