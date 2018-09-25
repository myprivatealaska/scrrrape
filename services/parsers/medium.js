const cheerio = require("cheerio")

function parse(htmlPage) {
    const $ = cheerio.load(htmlPage);
    const paragraphs = $('p');
    return paragraphs.length;
}

module.exports = parse;