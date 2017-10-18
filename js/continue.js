$(function() {
  Promise.all([getData('/db/continue.json'), getData('/temple/mankas.html')]).then(function (res) {
    var data = res[0];
    var temp = res[1];
    var html = doT.template(temp)(data);
    var container = document.querySelector('.manka_container');
    container.innerHTML = html;
  })
});