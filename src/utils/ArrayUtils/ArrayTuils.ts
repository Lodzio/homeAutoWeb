export const createChunks = (arr: any[], len: number) => {

    const chunks = [];
    let i = 0;
    const {length} = arr;
  
    while (i < length) {
      chunks.push(arr.slice(i, i += len));
    }
  
    return chunks;
  }

export const getLowestUnusedId = (devices: IDevice[]) => {
  let id = 0;
  while(true){
    const foundDevice = devices.find(device => device.id === id);
    if (!foundDevice){
      return id;
    } else {
      id++;
    }
  }
}