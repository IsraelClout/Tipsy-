# <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pics Up</title>
  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content="#000">
</head>
<body>
  <h1>Pics Up</h1>

  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
    import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-messaging.js";

    const firebaseConfig = {
      apiKey: "AIzaSyDbfOhcqEcUX2pNfM4XP29kHGG3xVtkzfI",
      authDomain: "tipsy-ffc0d.firebaseapp.com",
      projectId: "tipsy-ffc0d",
      storageBucket: "tipsy-ffc0d.firebasestorage.app",
      messagingSenderId: "905745727324",
      appId: "1:905745727324:web:94849a45a9d48e25654b99",
      measurementId: "G-6W12DN2J2H"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const messaging = getMessaging(app);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/firebase-messaging-sw.js');
    }

    async function initPush() {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        const token = await getToken(messaging, { 
          vapidKey: "BHEEGVtZiL3Poma7ho3TXFaLTgZ4jHCoqJU92qrNyDkawqe3GLV9Sz8xIsO9WuHQp2E939qHeXC7KNJkRwfPDlM" 
        });
        console.log("FCM Token:", token);
      }
    }
    initPush();

    onMessage(messaging, (payload) => {
      alert(`New: ${payload.notification.title}\n${payload.notification.body}`);
    });
  </script>
</body>
</html>-
