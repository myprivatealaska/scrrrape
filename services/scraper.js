const Retriever = require("./retriever")
const parse = require("./parsers/medium")
const findMatchedSentences = require("./matcher")

class Scraper{

    constructor(){
        this.retriever = new Retriever()
    }

    async findSentencesOnMedium(keyword){
        let sentences = [];

        let data = await this.retriever.searchMedium(keyword);

        if(data.items.length == 0){
            console.log("no search results")
            return sentences;
        }

        await Promise.all(data.items.map(async ({link}) => {
            let page =  await this.retriever.getPage(link);
            let text = await parse(page);
            let matches = await findMatchedSentences(keyword, text);
            sentences.push(matches);
        }));

        return sentences;
    }
}
module.exports = Scraper;