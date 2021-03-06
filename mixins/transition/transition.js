/**
 * Transition mixin
 */

var transition = function transition(value) {
  value = value || 'all 0 ease 0';
  var valueRegex = /(?:\d)(?:ms|s)/gi;
  var numWithoutValue = /(?:\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

  if (/^[-a-z0-9]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

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

transition.webkit = function transition(value) {
  value = value || 'all 0 ease 0';
  var prefixedProperties = ['background-size', 'border-', 'box-shadow', 'column', 'transform', 'filter'];
  var prefix = '-webkit-';
  var valueRegex = /(?:\d)(?:ms|s)/gi;
  var numWithoutValue = /(?:\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

  if (/^[-a-z0-9]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  prefixedProperties.forEach(function(property, index) {
    if (value.indexOf(property) !== -1) {
      value = value.replace(new RegExp(property, 'g'), function(match) {
        return prefix + match;
      })
    }
  });

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

transition.moz = function transition(value) {
  value = value || 'all 0 ease 0';
  var prefixedProperties = ['background-size', 'box-shadow', 'column', 'transform', 'filter'];
  var prefix = '-moz-';
  var valueRegex = /(?:\d)(?:ms|s)/gi;
  var numWithoutValue = /(?:\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

  if (/^[-a-z0-9]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  prefixedProperties.forEach(function(property, index) {
    if (value.indexOf(property) !== -1) {
      value = value.replace(new RegExp(property, 'g'), function(match) {
        return prefix + match;
      })
    }
  });

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

transition.opera = function transition(value) {
  value = value || 'all 0 ease 0';
  var prefixedProperties = ['transform'];
  var prefix = '-o-';
  var valueRegex = /(?:\d)(?:ms|s)/gi;
  var numWithoutValue = /(?:\d+\.?\d*)(?![^(]*\)|\w|%)/gi;

  if (/^[-a-z0-9]*,/.test(value)) {
    value = value.replace(/(?:,)(?![^(]*\))/g, '');
  }

  prefixedProperties.forEach(function(property, index) {
    if (value.indexOf(property) !== -1) {
      value = value.replace(new RegExp(property, 'g'), function(match) {
        return prefix + match;
      })
    }
  });

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

transition.vendors = ['webkit', 'moz', 'opera'];

/**
 * Export mixin
 */

module.exports = transition;
