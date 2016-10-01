var feed = new Instafeed({
  get: 'popular',
  userId: 'lowankim',
  clientId: '74ddc75f03b348e0a22eae4ecc37843b',
  template: '<a class="animation" href="{{link}}"><img src="{{image}}" /></a>'

});

feed.run();

console.log("hi");