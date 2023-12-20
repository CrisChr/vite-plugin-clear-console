export const fileReg = /(vue|svelte|js|[jt]sx?)$/;

export function getFileType(filePath) {
  const pathArr = filePath.split(".");
  return pathArr[pathArr.length - 1];
}