var express = require('express');
var router = express.Router();

var subjectController = require('../controllers/subjectController');
var questionController = require('../controllers/questionController');
var testController = require('../controllers/testController');

//=====SUBJECT ROUTES=========
router.post('/subject/create', subjectController.create_post);

router.post('/subject/:id/delete', subjectController.delete_post);

router.post('/subject/:id/update', subjectController.update_post);

router.get('/subjects', subjectController.read_post);

router.get('/subject/:id', subjectController.read_detail_post);


//=======QUESTIONS ROUTES=============

router.post('/question/create', questionController.create_post);

router.post('/question/:id/delete', questionController.delete_post);

router.post('/question/:id/update', questionController.update_post);

router.get('/questions', questionController.read_post);

router.get('/question/:id', questionController.read_detail_post);

//=========QUESTION ROUTES===============

router.post('/question/create', questionController.create_post);

router.post('/question/:id/delete', questionController.delete_post);

router.post('/question/:id/update', questionController.update_post);

router.get('/questions', questionController.read_post);

router.get('/question/:id', questionController.read_detail_post);

router.get('/question/subject/:sid', questionController.read_detail_bySubject_post);


//========TEST ROUTES=====================

router.post('/test/create', testController.create_post);

router.post('/test/:id/delete', testController.delete_post);

router.post('/test/:id/update', testController.update_post);

router.get('/tests', testController.read_post);

router.get('/test/:id', testController.read_detail_post);

router.get('/test/subject/:sid', testController.read_detail_bySubject_post);


//==========SEARCHING ROUTES=============
router.get('/searchsubs/:name', subjectController.read_search)


module.exports = router;
