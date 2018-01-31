export const linearSearch = (arr, input) => {
    let ticks = 0;
    for (let i=0; i < arr.length; i++) {
      ticks++;
      // console.log('arr[i]', arr[i]);
      if (arr[i] == input) {
        return `Item found and it took ${ticks} ticks`;
      } 
    }
    return `Item not found and it took ${ticks} ticks`;
  };