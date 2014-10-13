var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Alex\'s Website',
    links: {
      home: {
        href: '/',
        text: 'Home'
      },
      about: {
        href: '/about',
        text: 'About Me'
      },
      hardware: {
        href: '/hardware',
        text: 'Hardware'
      }
    },
    current: 'Home'
  });
});

router.get('/about', function(req, res) {
  res.render('index', {
    title: 'Alex\'s Website',
    links: {
      home: {
        href: '/',
        text: 'Home'
      },
      about: {
        href: '/about',
        text: 'About Me'
      },
      hardware: {
        href: '/hardware',
        text: 'Hardware'
      }
    },
    current: 'About'
  });
});

router.get('/hardware', function(req, res) {
  res.render('index', {
    title: 'Alex\'s Website',
    links: {
      home: {
        href: '/',
        text: 'Home'
      },
      about: {
        href: '/about',
        text: 'About Me'
      },
      hardware: {
        href: '/hardware',
        text: 'Hardware'
      }
    },
    current: 'Hardware'
  });
});

module.exports = router;
