function getData(url) {
  return new Promise(function(resolve) {
    $.get(url, function(data) {
      resolve(data);
    });
  })
}

// 绘制背景
getData('/temple/bg.html').then((html) => {
  var bg = document.createElement('DIV');
  bg.className = 'bg';
  bg.innerHTML = doT.template(html)();
  document.body.appendChild(bg);
})