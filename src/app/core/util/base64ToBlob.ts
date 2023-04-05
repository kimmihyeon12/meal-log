export const dataURLtoFile = (dataurl: string, fileName: string) => {
  var arr = dataurl.split(',');
  let mime = arr[0]!.match(/:(.*?);/)![1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
}

export function dataURLtoBlob(dataurl: string) {
  let arr = dataurl.split(','), mime = arr[0]!.match(/:(.*?);/)![1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

