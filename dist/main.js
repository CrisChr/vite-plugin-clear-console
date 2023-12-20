const c = /(vue|svelte|js|[jt]sx?)$/;
function p(t) {
  const e = t.split(".");
  return e[e.length - 1];
}
function a(t = { consoleType: ["log"] }) {
  const { consoleType: e } = t;
  return {
    name: "vite-plugin-clear-console",
    apply: "build",
    // 应用于build阶段
    enforce: "post",
    // 在vite生产环境插件执行之后、Vite内置后置插件执行之前执行该插件
    transform(s, r) {
      if (/node_modules/.test(r))
        return s;
      if (!c.test(p(r)))
        return;
      let o = s, l = [];
      return e.forEach((n) => {
        l.push(new RegExp(`console.${n}()`));
      }), l.forEach((n) => {
        o = o.replace(n, "").trim();
      }), o;
    }
  };
}
export {
  a as default
};
