// TODO: replace with regex
const mm = require('micromatch');


// TODO: move matcher to separate class
function match(keyword, text){
    return new Promise(function(resolve, reject){
        const sentenceRegEx = /[^\.\!\?]*[\.\!\?]/g;
        let m;
        let sentences = [];
        while (m = sentenceRegEx.exec(text)) {
            sentences.push(m[0]);
        }

        let results = mm(sentences, ['*'+ keyword +'*']);
        return resolve(results);
    })
        .catch(function(err){
            //TODO: logging
            return err;
        });
}

module.exports = match;