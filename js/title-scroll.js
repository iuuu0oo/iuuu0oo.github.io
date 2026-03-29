let titleText = "🔥 欢迎来到我的博客 | 技术分享 | 前端开发 | 干货满满 🚀 ";
let index = 0;

function scrollTitle() {
  document.title = titleText.substring(index) + titleText.substring(0, index);
  index++;
  if (index >= titleText.length) index = 0;
}

setInterval(scrollTitle, 200);