// browser support and registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('service_worker.js')
      .then(res => {
        console.log('service worker registered');
      })
      .catch(err => {
        console.log(`Not registered : Error ${err}`);
      });
  });
}
