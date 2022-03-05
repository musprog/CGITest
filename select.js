//Takes in the sorted Map list.
//Retuerns the first 10 items which has the most occerrence in the qeuery.
//After selection the Array is converted back to Map.

module.exports = {

    selecting: function (map) {

        const size = 10;
        const list = map.slice(0, size);


        const sortedMap = {};
        list.forEach(function (el) {
            sortedMap[el[0]] = el[1]
        });

        return sortedMap;
    }
}