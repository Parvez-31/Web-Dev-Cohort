if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      newArr.push(userFn(this[i], i));
    }
    return newArr;
  };
}

const mapArr = [3, 4, 5, 6, 7];

const map = mapArr.myMap(function (mov, i) {
  return mov * 2;
});

console.log(map);
