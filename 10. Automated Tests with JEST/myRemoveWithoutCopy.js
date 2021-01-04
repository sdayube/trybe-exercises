function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (item === arr[i]) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  return arr;
}

module.exports = myRemoveWithoutCopy;
