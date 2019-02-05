function zipList(list1, list2) {
  const totalList = [];
  let j = 0;
  let k = 0;
  for (let i = 0; i < list1.length * 2; i++) {
    if (i % 2 === 0) {
      totalList[i] = list1[j++];
    } else {
      totalList[i] = list2[k++];
    }
  }
  return totalList;
}

console.log(zipList(['a', 'b', 'c'], ['1', '2', '3']));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(['a', 'b', 'c'], ['1', '2', '3']));
