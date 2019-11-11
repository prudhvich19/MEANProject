var mongoose = require('mongoose');
var moment = require('moment');

var Question = require('../models/question');

var Schema = mongoose.Schema;

var TestSchema = new Schema( {
    test_name: { 
        type: String,
        required: true,
        max: 10 
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    created_on: {
        type: Date,
        required: true
    },
    content: [new Schema({
        question: { type: String, required: true},
        answer: { type: String, required: true}
            })]
});

TestSchema
.virtual('created_on_formatted')
.get(function () {
  return this.created_on ? moment(this.created_on).format('DD-MM-YYYY') : '';
});

module.exports = mongoose.model('Test', TestSchema);