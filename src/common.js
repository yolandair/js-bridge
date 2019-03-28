// 缓存 window 对象到 W，用来处理多 Window 对象的情况
var W = window;
// 判断当前存在多个 window 对象时（如 iframe 嵌套）
// 重新定义对象 W 为最外层 window
try {
  if (top.location !== location) {
    W = top;
  }
} catch (e) {
  console.log(e);
}

module.exports = W;
