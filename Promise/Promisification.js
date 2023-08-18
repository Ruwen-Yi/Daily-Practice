function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
}

let loadScriptPromisified = function(src) {
  return new Promise((resolve, reject) => {

    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
};

loadScriptPromisified('path/script.js')
  .then(script => {
    console.log('Script loaded:', script);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
