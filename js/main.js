function getData(url) {
  return new Promise(function(resolve) {
    $.get(url, function(data) {
      resolve(data);
    });
  })
}
