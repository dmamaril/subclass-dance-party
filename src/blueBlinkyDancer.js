var BlueBlinkyDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blueBlinkyDancer');
};

BlueBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
BlueBlinkyDancer.prototype.constructor = BlueBlinkyDancer;
