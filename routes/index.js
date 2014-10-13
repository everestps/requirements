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
      },
      html: {
        href:'/html',
        text: 'HTML'
      }
    },
    current: 'Home'
  });
});

router.get('/about', function(req, res) {
  res.render('about', {
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
      },
      html: {
        href:'/html',
        text: 'HTML'
      }
    },
    current: 'About'
  });
});

router.get('/hardware', function(req, res) {
  res.render('hardware', {
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
      },
      html: {
        href:'/html',
        text: 'HTML'
      }
    },
    current: 'Hardware'
  });
});

router.get('/html', function(req, res) {
  res.render('html', {
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
      },
      html: {
        href:'/html',
        text: 'HTML'
      }
    },
    current: 'HTML'
  });
});

module.exports = router;
