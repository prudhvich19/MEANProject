var Subject = require('../models/subject');

exports.create_post = function (req, res, next) {
    var newSub = new Subject({
      sub_name: req.body.sub_name,
      sub_code: req.body.sub_code
    });
    newSub.save((err, doc) => {
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
 
    Subject.find((err, docs) => {
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
  Subject.findById(id, (err, docs) => {
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


exports.delete_post = function (req, res, next) {
  
    var id = req.params.id;

    Subject.findByIdAndRemove(id, (err, docs) => {
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

  Subject.findByIdAndUpdate(id, req.body , {new : true}, (err, docs) => {
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
  
  Subject.findById(id, function(err, subject) {
    if (!subject)
      return next(new Error('Could not load Document'));
    else {
        subject.sub_name = req.body.sub_name;
        subject.sub_code = req.body.sub_code;
        subject.save().then(docs => {
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


exports.read_search = function (req, res, next) {
  term = req.params.name;

  Subject.find({sub_name: {$text: {$search: term}}} , (err, docs) => {
    if(err){
      next(err);
    } else{
      res.json({msg: "Succesfully Searched",
                result: docs          
              });
    }
  });
}