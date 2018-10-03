const cheerio = require("cheerio")

function parse(htmlPage) {
    return new Promise(function (resolve, reject) {
        const $ = cheerio.load(htmlPage);
        let text = "";
        $('p').each(function (i, elem) {
            text += $(elem).text();
        });
        if(text.length == 0){
            return reject("No text on the page!")
        }
        return resolve(text);

    })
    .catch(function(err){
        //return error;
        return err;
    });
}

module.exports = parse;