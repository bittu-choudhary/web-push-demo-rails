if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/serviceworker.js', { scope: './' })
        .then(function(reg) {
            console.log('[Companion]', 'Service worker registered!');
        });
}

navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
  serviceWorkerRegistration.pushManager
  .subscribe({
    userVisibleOnly: true,
    applicationServerKey: window.vapidPublicKey
  });
});

$(function(){
  $(".webpush-button").on("click", function(e) {
    navigator.serviceWorker.ready
    .then((serviceWorkerRegistration) => {
      serviceWorkerRegistration.pushManager.getSubscription()
      .then((subscription) => {
        $.post("/push", { subscription: subscription.toJSON(), message: "You clicked a button!" });
      });
    });
  });
});