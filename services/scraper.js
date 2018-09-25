const Retriever = require("./retriever")
const mediumParser = require("./parsers/medium")

class Scraper{

    constructor(){
        this.retriever = new Retriever()
    }

    findSentencesOnMedium(keyword){
        let sentences = [];

        this.retriever.searchMedium(keyword)
            .then(data => {
                if(data.items.length == 0){
                    console.log("no search results")
                    return;
                }

                data.items.forEach(({link}) => {
                    this.retriever.getPage(link)
                                  .then(page => sentences.push(mediumParser(page)))
                                  .catch(err => console.log(err));
                })

                console.log(sentences);


            })
            .catch(err => {
                console.log(err)
            })

    }
}
module.exports = Scraper;