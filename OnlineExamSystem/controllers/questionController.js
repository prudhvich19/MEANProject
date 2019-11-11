var Question = require('../models/question');

exports.create_post = function (req, res, next) {
    var newQuestion = new Question({
      question: req.body.question,
      answer: req.body.answer,
      subject: req.body.subject
    });
    newQuestion.save((err, doc) => {
      if(err){
        next(err);
      } else{
        res.json({msg: "Succesfully saved",
                  result: doc          
                });
      }
    });
};

exports.read_post = function (req, res, next) {

    Question.find().populate('subject').exec((err, docs) => {
        if(err){
          next(err);
        } else{
          res.json({msg: "Succesfully Read",
                    result: docs          
                  });
        }
    });
};

exports.read_detail_post = function (req, res, next) {
  
  var id = req.params.id;
  Question.findById(id).populate('question').exec((err, docs) => {
    if(err){
      next(err);
    } else{
      if(docs){
        res.json({msg: "Succesfully Read details ",
                result: docs          
              });
      } else {
        res.json({msg: "ID NOT FOUND. TRY AGAIN",
        result: docs          
      });
      }
    }
  });
};

exports.read_detail_bySubject_post = function (req, res, next) {

  var sid = req.params.sid;
  Question.find().where({subject: sid}).exec((err, docs) => {
      if(err){
        next(err);
      } else{
        res.json({msg: "Succesfully saved",
                  result: docs         
                });
      }
    });
};

exports.delete_post = function (req, res, next) {
  
    var id = req.params.id;

    Question.findByIdAndRemove(id, (err, docs) => {
      if(err){
        next(err);
      } else{
        if(docs){
          res.json({msg: "Succesfully deleted ",
                  result: docs          
                });
        } else {
          res.json({msg: "ID NOT FOUND. TRY AGAIN",
          result: docs          
        });
        }
      }
    });
};

/*exports.update_post = function (req, res, next) {
  
  var id = req.params.id;
  console.log(req.body);
  
  Question.findByIdAndUpdate(id, { $set: req.body}, {new : true}).populate('question')
  .exec((err, docs) => {
    if(err){
      next(err);
    } else {
      if(docs){
        res.json({msg: "Succesfully updated ",
                result: docs          
              });
      } else {
        res.json({msg: "ID NOT FOUND. TRY AGAIN",
        result: docs          
      });
      }
    }
  });
};*/

exports.update_post = function (req, res, next) {
  
  var id = req.params.id;
  console.log(req.body);
  
  Question.findById(id, function(err, question) {
    if (!question)
      return next(new Error('Could not load Document'));
    else {
        question.question = req.body.question;
        question.answer = req.body.answer;
        question.save().then(docs => {
          res.json({msg: "Succesfully updated ",
          result: docs          
        });
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });

};