const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('storeEntry', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
  `http://localhost:8000/api/entries`,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
);

console.log('backsync called')
