if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    for (let i = 0; i < this.length; i++) {
      userFn(this[i], i);
    }
  };
}
const testArr = [12, 34, 56, 7];
// callback fn, mov, index
const testForEach = testArr.myForEach((mov, i) => {
  console.log(`My number is ${mov}, and i am number ${i + 1}`);
});
