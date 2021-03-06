const Tweet = require('../models/Tweet');
const moment = require('moment');

const marriageService = require('../services/marriage');

// The default controller for this app
// The home page
exports.indexPage = async (req, res) => {
  try {
    const tweets = await Tweet.find({})
      .populate('author')
      .limit(50)
      .sort({ created: 'desc' });
    res.render('index', { tweets, moment });
  } catch (e) {
    console.log(e);
    res.redirect('/error');
  }
};

// Dashboard page
exports.dashboard = async function (req, res) {
  try {
    const marriages = await marriageService.getAll();
    res.render('dashboard', { marriages });
  } catch (e) {
    console.log(e);
    res.redirect('/error');
  }
};

// Get the verify page
exports.verifyPage = async (req, res) => {
  res.render('age_verification');
};

// Getting the account page
