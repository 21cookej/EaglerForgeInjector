function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}

let iframe = document.createElement('iframe');
iframe.src = "https://wikipedia.org/wiki/Microsoft";
iframe.style.height = "100%";
iframe.style.width = "100%";
iframe.style.position = "absolute";
iframe.style.left = "0px";
iframe.style.border = "0px";
iframe.style.display = "none";
document.body.appendChild(iframe);

document.addEventListener('keydown', function(event) {
  if (event.code == 'Escape') {
    changeFavicon('https://revistas.unal.edu.co/public/site/images/agonzalez1/logo_W.png');
    document.title = "Microsoft - Wikipedia";
    iframe.style.display = "unset";
  }
});