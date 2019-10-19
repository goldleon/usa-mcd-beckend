export const searchInArray = (arrayOfData, searchedTermArray) => {
    var myArray = [];
    var found = arrayOfData.map(function (item) {
        if (item.includes(searchedTermArray)) myArray.push(item)
    });
    return myArray;
}