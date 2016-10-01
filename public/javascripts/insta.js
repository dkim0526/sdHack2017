var feed = new Instafeed({
  get: 'popular',
  tagName: '',
  userId: 'lowankim',
  clientId: '74ddc75f03b348e0a22eae4ecc37843b',
  accessToken: '1412471275.1677ed0.d4b321d330e64446898f179a206ac1eb',
  template: '<a class="animation" href="{{link}}"><img src="{{image}}" /></a>'

});

feed.run();

console.log("hi");