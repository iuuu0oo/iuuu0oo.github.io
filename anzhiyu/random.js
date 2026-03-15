var posts=["2026/03/15/hello-world/","2026/03/16/seqing/","2026/03/16/字体文章测试/","2026/03/15/测试地址/","2026/03/15/测试密码/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };