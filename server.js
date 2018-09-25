const Scraper = require('./services/scraper')
require('dotenv').config()

const scraper = new Scraper();
console.log(scraper.findSentencesOnMedium("persevere"));