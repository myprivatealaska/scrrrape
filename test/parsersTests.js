const mediumMatcher = require("../services/parsers/medium");
const fs = require("fs");



describe("Parsers tests:", () => {

    describe("Medium parser", () => {
        it('should return sentences with specified keyword', () => {
            const keyword = "persevere";
            const stub = fs.readFileSync(__dirname + "/stub.html");
            const results = mediumMatcher(keyword, stub);
            console.log(results);
        })
    })

})