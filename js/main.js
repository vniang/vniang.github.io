function getData() {
  return new Promise(function(resolve) {
    $.get('/db/home.json', function(data) {
      resolve(data);
    });
  })
}
function getMankaTemp() {
  return new Promise(function(resolve) {
    $.get('/temple/mankas.html', function(data) {
      resolve(data);
    })
  })
}
$(function() {
  Promise.all([getData(), getMankaTemp()]).then(function (res) {
    var data = res[0];
    var temp = res[1];
    var html = doT.template(temp)(data);
    var container = document.querySelector('.manka_container');
    container.innerHTML = html;
  })
});

