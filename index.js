/**
 * Rover constructor, if we dont have initial values the rover is situated in
 * the middle of the grid.
 * @param  {int} x initial x position. value between 0-100
 * @param  {[type]} y initial y position. value between 0-100
 */
var rover = function(x,y,dir){
  this._x = !!x ? x : 50;
  this._y = !!y ? y : 50;
  this._dir = !!dir ? points.indexOf(dir) : ;
};

rover.prototype.setPosition = funcion(newX,newY){  
  
};

rover.prototype._moveFoward = funcion(){  
  
};

rover.prototype._moveBack = funcion(){  
  
};

rover.prototype._isBlocked = funcion(){  
  
};

rover.prototype._changeDirection = funcion(pos){  
  if(pos){
    if (this._dir === 3) this._dir = 0;
    else
      this._dir++;
  }
  else if(pos === 0){
    if (this._dir === 0) this._dir = 3;
    else
      this._dir--;
  }
};

rover.prototype.getPosition = funcion(){  
  return [this._x,this._y];
};

rover.prototype.getDirection = funcion(){  
  return this._dir;
};

/**
 * eject a list of command from a string. every character is a command.
 * @param  {string} com list of command. l-r-f-b
 */
rover.prototype.execCommands = function(com){
  var comList = com.split('');
  
  for(var task in comList){
    switch (task) {
      case "f":
        this.moveFoward();
        break;
      case "b":
        this.moveBack();
        break;
      case "l":
        this._changeDirection(0);
        this.moveFoward();
        break;
      case "r":
        this._changeDirection(1);
        this.moveFoward();
        break;
      default:    
    }
  }
}

/**
 * grid planet constructor
 * @param  {string} name   planet name
 * @param  {Array} blocks Array of obstacles positions
 */
var planet = function(name, blocks){
  this.name = !!name ? name : "planet_default";
  this.blocks = !!blocks ? blocks : [];
}
// cardinal points
var points = "NESW";

var myplanet = new planet("my_Planet",["3,1","","52,55","10,10","17,80"]);
