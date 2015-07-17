# po2json2po

Convert PO files to JSON or vice-versa. Works nicely with ember-i18n.
This project is a fork/extension of [po2json](https://github.com/mikeedwards/po2json).

While po2json works nicely to convert .po files to .json format, it does not allow a conversion in the other direction (.json --> .po). 

## Getting Started
Install the module with: `npm install po2json2po`

## Usage
Convert .po to .json
```po2json2po messages.po messages.json --format "ember-i18n"```

Convert .json to .po
```po2json2po messages.json messages.po```

## Detailed Documentation
For detailed documentation and additional usage, see the [po2json](https://github.com/mikeedwards/po2json) documentation.

## License
Copyright (c) 2015 Francesco Novy
Licensed under the GNU, Library, General, Public, License licenses.
