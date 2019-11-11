var Test = require('../models/test');

exports.create_post = function (req, res, next) {
    
  console.log(req.body)
  var newTest = new Test({
      test_name: req.body.test_name,
      test: req.body.test,
      subject: req.body.subject,
      created_on: req.body.created_on,
      content: req.body.content
    });
    newTest.save((err, doc) => {
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

    Test.find().populate('subject')
    .exec((err, docs) => {
        if(err){
          next(err);
        } else{
          console.log(docs);
          res.json({msg: "Succesfully Read",
                    result: docs          
                  });
        }
    });
};

exports.read_detail_post = function (req, res, next) {
  
  var id = req.params.id;
  Test.findById(id).exec((err, docs) => {
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

exports.read_detail_bySubject_post = function(req, res, next) {

  var sid = req.params.sid;
  Test.find().where({subject: sid}).exec((err, docs) => {
      if(err){
        next(err);
      } else{
        res.json({msg: "Succesfully saved",
                  result: docs         
                });
      }
    });
}

exports.delete_post = function (req, res, next) {
  
    var id = req.params.id;

    Test.findByIdAndRemove(id).exec((err, docs) => {
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

exports.update_post = function (req, res, next) {
  
  var id = req.params.id;
  var content = req.body.content;

  console.log(content);

  /*Test.findByIdAndUpdate(id, {new : true})
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
  });*/

  Test.findById(id, function(err, test) {
    if (!test)
      return next(new Error('Could not load Document'));
    else {
        test.content = req.body.content;
       // test.sub_code = req.body.sub_code;
        test.save().then(docs => {
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

