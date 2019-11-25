// somethingToSort [{}, {}]
// customOrder ["", ""]
// name is the key which you want to sort in somethingToSort's each Object
// each key in customOrder is includes in object[name]
export const customSort = (somethingToSort, customOrder, name) => {
  //map for lookup of sortIndex
  let ordering = {};
  let orderForInput = {};

  let rst = [];
  if (
    !somethingToSort ||
    !customOrder ||
    !Array.isArray(customOrder) ||
    !Array.isArray(somethingToSort)
  ) {
    console.log(somethingToSort, customOrder);
  } else {
    for (let i = 0; i < customOrder.length; i++) {
      ordering[customOrder[i]] = i;
    }

    somethingToSort.forEach(eachObj => {
      customOrder.forEach(eachKey => {
        if (eachObj[name].toLowerCase().includes(eachKey.toLowerCase())) {
          orderForInput[eachObj[name]] = ordering[eachKey];
        }
      });
    });

    rst = somethingToSort.sort((a, b) => {
      return orderForInput[a[name]] - orderForInput[b[name]];
    });
  }

  return rst;
};
