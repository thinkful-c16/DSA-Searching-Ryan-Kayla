export const binarySearch =  (arr, value, start, end) => {
 let ticks = 0;
 let notFound = null;
 console.log(ticks)

 findNum(arr, value, start, end);

  function findNum(arr, value, start, end) {

    start = start === undefined ? 0 : start;
    end = end === undefined ? arr.length : end;

    if (start > end){
      return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = arr[index];
    ticks++

    // console.log(start, end);
    if (item == value) {
        // console.log('ticks from inside findNum', ticks);
        return index;
    }
    else if (item < value) {
      ticks++
        return findNum(arr, value, index + 1, end);
    }
    else if (item > value) {
      ticks++
        return findNum(arr, value, start, index - 1);
    }
    else {
      notFound = true;
    }
  }
  if (notFound) {
    return `Not found and it took ${ticks} ticks`
  } else {
    return `Item found and it took ${ticks} ticks`;

  }
}