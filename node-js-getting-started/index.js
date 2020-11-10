const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const cool = require('cool-ascii-faces');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/index', (req, res) => res.render('pages/index'))
  .get('/about', (req, res) => res.render('pages/about'))
  .get('/contact', (req, res) => res.render('pages/contact'))
  .get('/pricing', (req, res) => res.render('pages/pricing'))
  .get('/screenshots', (req, res) => res.render('pages/screenshots'))
  .get('/service', (req, res) => res.render('pages/service'))
  .get('/team', (req, res) => res.render('pages/team'))

  

  .get('/cool',(req,res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
