(function () {
  var links = document.links;
  for (var i = 0; i < links.length; i++) {
    if (links[i].hostname != window.location.hostname && !/mailto:/.test(links[i].href)) {
      links[i].target = '_blank';
    }
  }
}());