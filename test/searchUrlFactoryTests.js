const SearchUrlFactory = require('../services/searchUrlFactory')
require('dotenv').config()
const URL = require('url-parse');

describe('SearchUrlFactory', () => {
    describe('get custom search google api url', () => {

        // keyword ->  https://www.googleapis.com/customsearch/v1?key=API_KEY&cx=CUSTOMER_SEARCH_SYSTEM_ID&q=SEARCH_KEYWORD
        it('builds correct URL', async function(){
            let keyword = 'persevere';
            const factory = new SearchUrlFactory();
            var url = factory.getMedium(keyword);
            var parsedUrl = new URL(url, true);

            parsedUrl.protocol.should.eql("https:");
            parsedUrl.host.should.eql("www.googleapis.com");
            parsedUrl.pathname.should.eql("/customsearch/v1");
            parsedUrl.query["q"].should.eql(keyword);
            parsedUrl.query["cx"].should.not.be.empty;
            parsedUrl.query["key"].should.not.be.empty;
        });
    })
})
