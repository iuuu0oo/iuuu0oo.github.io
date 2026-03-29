var posts=["2026/03/29/123/","2026/03/29/456/","2026/03/16/hello-world/","2026/03/20/字体鉴赏/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };