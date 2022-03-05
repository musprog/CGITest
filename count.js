//Takes in a string from the body of the html.
//Returens a Map, word: occerrence.

module.exports = {

    countWords: function (str) {

        const map = {}
        const words = str.split(" ").filter(word => word !== "")

        for (let i = 0; i < words.length; i++) {
            const item = words[i]
            map[item] = (map[item] + 1) || 1
        }

        return map
    }
}
