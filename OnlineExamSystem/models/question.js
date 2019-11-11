var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuestionSchema = Schema( {
    question: { type: String, required: true},
    answer: { type: String, required: true},
    subject: {type: Schema.Types.ObjectId, ref:'Subject', required: true }
});


module.exports = mongoose.model('Question', QuestionSchema);