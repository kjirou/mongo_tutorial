;(function(){

  var _module = {};


  // e.g.
  //   (0.5, 1)
  //   (function(times){ return 0.5 / times; }, function(times){ return times; })
  _module.accumulateRandomly = function(rate, delta){
    var times = 1,
      total = 0,
      rateComputer = _.isFunction(rate) ? rate : function(){ return rate; },
      deltaComputer = _.isFunction(delta) ? delta : function(){ return delta; };

    while (rateComputer(times) > Math.random()) {
      total += deltaComputer(times);
      times += 1;
    };

    return total;
  };


  //
  // Exports
  //
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = _module;
  } else {
    this.utils = _module;
  }
}).call(this);
