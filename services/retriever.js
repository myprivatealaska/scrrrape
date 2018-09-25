const request = require('request-promise')
const SearchUrlFactory = require('./searchUrlFactory')

class Retriever{
    constructor(){
        this.searchUrlFactory = new SearchUrlFactory();
    }

    searchMedium(keyword){
        const options = {
            uri: this.searchUrlFactory.getMedium(keyword),
            json: true
        }
        return request(options);
    }

    getPage(url){
        return request(url)
    }

}

module.exports = Retriever;