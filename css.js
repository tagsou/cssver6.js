window.addEventListener('load', function() {
  parent.console.log('[+] css.js loaded successfully');
  parent.console.log('fullscreenEnabled:', document.fullscreenEnabled);
  parent.console.log('featurePolicy:', document.featurePolicy.allowedFeatures());

  var btn = document.createElement('div');
  btn.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:99999;cursor:pointer;background:rgba(255,0,0,0.1);';

  btn.addEventListener('click', function() {
    document.documentElement.requestFullscreen()
      .then(function() {
        parent.console.log('[+] FULLSCREEN WORKS');
      })
      .catch(function(e) {
        parent.console.log('[-] fullscreen failed:', e.message);
      });
  });

  document.body.appendChild(btn);
  parent.console.log('[+] click trap ready');
});
