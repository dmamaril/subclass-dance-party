var AsianBlinkyDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('cat');
  this.$node.removeClass('dancer');
};

AsianBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
AsianBlinkyDancer.prototype.constructor = AsianBlinkyDancer;
