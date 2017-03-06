function WallSpritesPool() {
  this.createWindows();
  this.createDecorations();
  this.createFrontEdges();
  this.createBackEdges();
}

WallSpritesPool.prototype.createWindows = function() {
  this.windows = [];

  this.addWindowSprites(6, 'window_01');
  this.addWindowSprites(6, 'window_02');

  this.shuffle(this.windows);
};

WallSpritesPool.prototype.createDecorations = function() {
  this.decorations = [];

  this.addDecorationSprites(6, 'decoration_01');
  this.addDecorationSprites(6, 'decoration_02');
  this.addDecorationSprites(6, 'decoration_03');

  this.shuffle(this.decorations);
};

WallSpritesPool.prototype.createFrontEdges = function() {
  this.frontEdges = [];

  this.addFrontEdgeSprites(2, 'edge_01');
  this.addFrontEdgeSprites(2, 'edge_02');

  this.shuffle(this.frontEdges);
};

WallSpritesPool.prototype.createBackEdges = function() {
  this.backEdges = [];

  this.addBackEdgeSprites(2, 'edge_01');
  this.addBackEdgeSprites(2, 'edge_02');

  this.shuffle(this.backEdges);
};

WallSpritesPool.prototype.addWindowSprites = function(amount, frameID) {
  for (var i = 0; i < amount; i++) {
    var sprite = PIXI.Sprite.fromFrame(frameID);
    this.windows.push(sprite);
  }
};

WallSpritesPool.prototype.addDecorationSprites = function(amount, frameID) {
  for (var i = 0; i < amount; i++) {
    var sprite = new PIXI.Sprite(PIXI.Texture.fromFrame(frameID));
    this.decorations.push(sprite);
  }
};

WallSpritesPool.prototype.addFrontEdgeSprites = function(amount, frameID) {
  for (var i = 0; i < amount; i++) {
    var sprite = new PIXI.Sprite(PIXI.Texture.fromFrame(frameID));
    this.frontEdges.push(sprite);
  }
};

WallSpritesPool.prototype.addBackEdgeSprites = function(amount, frameID) {
  for (var i = 0; i < amount; i++) {
    var sprite = new PIXI.Sprite(PIXI.Texture.fromFrame(frameID));
    sprite.anchor.set(1, 0);
    sprite.scale.set(-1, 1);
    this.backEdges.push(sprite);
  }
};

WallSpritesPool.prototype.borrowWindow = function() {
  return this.windows.shift();
};

WallSpritesPool.prototype.returnWindow = function(sprite) {
  this.windows.push(sprite);
};

WallSpritesPool.prototype.borrowDecoration = function() {
  return this.decorations.shift();
};

WallSpritesPool.prototype.returnDecoration = function(sprite) {
  this.decorations.push(sprite);
};

WallSpritesPool.prototype.borrowFrontEdge = function() {
  return this.frontEdges.shift();
};

WallSpritesPool.prototype.returnFrontEdge = function(sprite) {
  this.frontEdges.push(sprite);
};

WallSpritesPool.prototype.borrowBackEdge = function() {
  return this.backEdges.shift();
};

WallSpritesPool.prototype.returnBackEdge = function(sprite) {
  this.backEdges.push(sprite);
};

WallSpritesPool.prototype.shuffle = function(array) {
  var len = array.length;
  var shuffles = len * 3;
  for (var i = 0; i < shuffles; i++) {
    var wallSlice = array.pop();
    var pos = Math.floor(Math.random() * (len - 1));
    array.splice(pos, 0, wallSlice);
  }
};