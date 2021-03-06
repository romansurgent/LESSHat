/**
 * animationDuration mixin
 */

var animationDuration = function animationDuration(value) {
  value = value || '0';
  var valueRegex = /ms|s/gi;
  var numWithoutValue = /(?:\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

  if (!valueRegex.test(value) && value !== '0') {
    value = value.replace(numWithoutValue, function(match) {
      var match = parseFloat(match, 10);

      if (match > 10) {
        match += 'ms';
      } else {
        match += 's';
      }

      return match;
    });
  }

  return value;
};

/**
 * For which browsers is this mixin specified
 */

animationDuration.vendors = ['webkit', 'moz', 'opera'];

/**
 * Export mixin
 */

module.exports = animationDuration;