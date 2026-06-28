importScripts("https://www.gstatic.com/firebasejs/12.15.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.15.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDbfOhcqEcUX2pNfM4XP29kHGG3xVtkzfI",
  authDomain: "tipsy-ffc0d.firebaseapp.com",
  projectId: "tipsy-ffc0d",
  storageBucket: "tipsy-ffc0d.firebasestorage.app",
  messagingSenderId: "905745727324",
  appId: "1:905745727324:web:94849a45a9d48e25654b99"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon-192.png"
  });
});
