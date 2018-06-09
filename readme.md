# detect-kerning [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/dy/detect-kerning.svg)](https://travis-ci.org/dy/detect-kerning)

Calculate kerning pairs for a font.

[![npm install detect-kerning](https://nodei.co/npm/detect-kerning.png?mini=true)](https://npmjs.org/package/detect-kerning/)

```js
const kerning = require('detect-kerning')

let pairs = kerning('Roboto')

/*
{
	'A”': -10,
	'W.': -5,
	'P,': -3,
	...
}
*/

// convert kerning for 16px font-size
let emkern = 16 * pairs['AV'] / 1000
```

## API

### pairs = kerning(family|familyList)

Detect kerning pairs for the font family or stack of families and return their kerning in 1000 units/em.


## Related

* [css-font](https://npmjs.org/css-font) for parsing font-family from css font string.

## License

© 2017 Dima Yv. MIT License
