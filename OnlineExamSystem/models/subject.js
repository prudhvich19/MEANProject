var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SubjectSchema = Schema({
    sub_name: { type: String, required: true, default: '', max: 10},
    sub_code: { type:  String, required: true, default: '', max: 5}
});

SubjectSchema.index({sub_name: 'text'});

module.exports = mongoose.model('Subject', SubjectSchema);