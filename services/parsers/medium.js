const cheerio = require("cheerio")
const nlp = require("compromise")


// TODO: just return text from here for further processing by the matcher
function parse(htmlPage) {
    const $ = cheerio.load(htmlPage);
    let text = "";
    $('p').each(function (i, elem) {
        text += $(elem).text();
    });
    return nlp(text);
}

// TODO: move matcher to separate class
function match(keyword, htmlPage){
    const doc = parse(htmlPage)
    let word = doc.match(keyword);
    let sentences = doc.sentences();
    word.tag('keyword')
    return sentences.match('#keyword').out('text')
}

module.exports = match;