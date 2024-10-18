if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/js/service-worker.js').then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);

            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            console.log('New content is available; please refresh.');
                            if (confirm('New version available. Refresh now?')) {
                                window.location.reload();
                            }
                        } else {
                            console.log('Content is cached for offline use.');
                        }
                    }
                };
            };
        }).catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
    });

    navigator.serviceWorker.getRegistration().then(function(registration) {
        if (registration) {
            registration.update();
        }
    });
}
