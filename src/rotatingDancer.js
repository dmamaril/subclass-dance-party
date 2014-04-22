var RotatingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('rotating');
};

RotatingDancer.prototype = Object.create(Dancer.prototype);
RotatingDancer.prototype.constructor = RotatingDancer;
