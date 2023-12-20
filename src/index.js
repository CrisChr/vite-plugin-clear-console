import {fileReg, getFileType} from './utils'

export default function ClearConsole(options = {consoleType: ['log']}) {
  const {consoleType} = options; // 要移除的console类型（log、error、warn），默认只移除log
  return {
    name: "vite-plugin-clear-console",
    apply: 'build', // 应用于build阶段
    enforce: "post", // 在vite生产环境插件执行之后、Vite内置后置插件执行之前执行该插件
    transform(code, id) {
      if (/node_modules/.test(id)) return code; // node_modules里的文件不执行该插件
      const isJs = fileReg.test(getFileType(id)); // 过滤文件类型
      if (!isJs) return; // 如果不是指定的文件类型，直接返回，执行下一个插件
      let transformCode = code;
      let consoles = [];
      consoleType.forEach(type => {
        consoles.push(new RegExp(`console.${type}()`));
      });
      consoles.forEach(consoleReg => {
        transformCode = transformCode.replace(consoleReg, "").trim();
      });
      return transformCode;
    }
  };
}
