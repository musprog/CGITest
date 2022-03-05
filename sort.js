//This module sort Map based on keys, which is words occrrence.
//The parameter is converted to an Array in order to by sorted.

module.exports = {

  sorting: function (map) {

    const tempArray = [];

    for (var key in map)
      tempArray.push([key, map[key]]);
    tempArray.sort(function (a, b) {
      return b[1] - a[1]
    });

    return tempArray;
  }
}