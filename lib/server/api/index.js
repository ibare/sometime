'use strict';
/**
 * /api/* 이하의 라우팅을 처리하는 라우터 컴포넌트
 *
 **/
const express = require('express');
const router = express.Router();
const db = require('../../../_doc/index.json');
const version = 'v1';

router.all('/', (req, res) => {
  res.json({ api: 'root' });
});

router.all(`/${version}`, (req, res) => {
  res.json({ api: 'root - v1' });
});

router.get(`/${version}/:yyyy`, (req, res) => {
  var year = +req.params.yyyy;
  var docs = db.filter(doc => doc.year === year);

  res.json(docs);
});

router.get(`/${version}/:yyyy/:mm`, (req, res) => {
  var year = +req.params.yyyy;
  var month = +req.params.mm;
  var docs = db.filter(doc => doc.year === year && doc.month === month);

  res.json(docs);
});

router.get(`/${version}/:yyyy/:mm/:dd`, (req, res) => {
  var year = +req.params.yyyy;
  var month = +req.params.mm;
  var day = +req.params.dd;
  var docs = db.filter(doc => doc.year === year && doc.month === month && doc.day === day);

  res.json(docs);
});

router.get(`/${version}/:yyyy/:mm/:dd/:doc`, (req, res) => {
  res.json({ date: `${req.params.yyyy}/${req.params.mm}/${req.params.dd}/${req.params.doc}` });
});

module.exports = router;
