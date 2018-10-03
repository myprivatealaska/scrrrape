const Scraper = require('./services/scraper')
require('dotenv').config()

const scraper = new Scraper();
scraper.findSentencesOnMedium("persevere").then(result => console.log(result));
