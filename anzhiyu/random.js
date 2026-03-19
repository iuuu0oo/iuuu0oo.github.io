var posts=["2026/03/16/hello-world/","2026/03/20/翻墙教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };