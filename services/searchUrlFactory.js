const buildUrl = require('build-url');

class SearchUrlFactory{

    getMedium(keyword){
        return buildUrl("https://www.googleapis.com", {
            path: "customsearch/v1",
            queryParams: {
                key: process.env.GOOGLE_CUSTOM_SEARCH_API_KEY,
                cx: process.env.GOOGLE_CUSTOM_SEARCH_MEDIUM_ID,
                q: keyword
            }
        })
    }
}
module.exports = SearchUrlFactory;