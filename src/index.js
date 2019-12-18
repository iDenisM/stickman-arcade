const spriteStep = 250;
const runningSpriteQuantity = 6;
let runningSpriteIndex = 0;
let runningDirection = 1;

let app = document.getElementById('app');
let image = document.createElement('div');

let imageStyleRules = {
  width: '250px',
  height: '300px',
  backgroundImage: 'url("../img/running_animation_sprite.png")',
  backgroundPositionX: 0,
  backgroundPositionY: 0
};
Object.assign(image.style, imageStyleRules);
image.style.transform = 'scaleX(1)';
app.appendChild(image);
document.addEventListener('keydown', e => {
  runningSpriteIndex++;
  switch (e.keyCode) {
    case 37:
      // turn left and run
      if (runningDirection != -1) {
        runningDirection = -1;
        image.style.transform = 'scaleX(-1)';
      }
      if (runningSpriteIndex > 5) runningSpriteIndex = 0;
      image.style.backgroundPositionX = `${spriteStep * runningSpriteIndex}px`;
      break;
    case 39:
      // turn rigth and run
      if (runningDirection != 1) {
        runningDirection = 1;
        image.style.transform = 'scaleX(1)';
      }
      if (runningSpriteIndex > 5) runningSpriteIndex = 0;
      image.style.backgroundPositionX = `${spriteStep * runningSpriteIndex}px`;
      break;
    default:
      break;
  }
})


var Character = function(charElement) {
  this.bodyClass = 'body';
  this.body = charElement;
  this.body.classList.add(this.bodyClass);
  this.CreateTorso();
};
Character.prototype = {
  CreateElement: function(className) {
    var elem = document.createElement('div');
    elem.classList.add(className);
    return elem;
  },
  CreateTorso: function() {
    this.torso = this.CreateElement(this.bodyClass.concat('_torso'));
    this.body.appendChild(this.torso);
    this.CreateHead();
    this.CreateLeftArm();
    this.CreateRightArm();
  },
  CreateHead: function() {
    this.head = this.CreateElement(this.bodyClass.concat('_head'));
    this.torso.appendChild(this.head);
  },
  CreateLeftArm: function() {
    this.upperLeftArm = this.CreateElement(this.bodyClass.concat('_upparm-left'));
    this.foreLeftArm = this.CreateElement(this.bodyClass.concat('_forearm-left'));
    this.upperLeftArm.appendChild(this.foreLeftArm);
    this.torso.appendChild(this.upperLeftArm);
  },
  CreateRightArm: function() {
    this.upperRightArm = this.CreateElement(this.bodyClass.concat('_upparm-right'));
    this.foreRightArm = this.CreateElement(this.bodyClass.concat('_forearm-right'));
    this.upperRightArm.appendChild(this.foreRightArm);
    this.torso.appendChild(this.upperRightArm);
  }
}

var player = document.createElement('div');
player.id = 'player';
app.appendChild(player);

var playerCharacter = new Character(player);