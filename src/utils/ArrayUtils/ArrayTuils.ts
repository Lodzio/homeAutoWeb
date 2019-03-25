export const createChunks = (arr: any[], len: number) => {

    const chunks = [];
    let i = 0;
    const {length} = arr;
  
    while (i < length) {
      chunks.push(arr.slice(i, i += len));
    }
  
    return chunks;
  }