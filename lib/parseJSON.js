/**
 * Parse PO buffer to JSON
 *
 * @param {Buffer|String} buffer - Buffer PO object or unicode string with PO data
 * @param {Object} [options]
 * @return {Object|String} Translation JSON
 */
module.exports = function(fileName, options) {

  // Setup options and load in defaults
  options = options || {};
  var defaults = {
    pretty: false,
    fuzzy: false,
    stringify: false,
    format: 'raw',
    domain: 'messages'
  };

  for (var property in defaults) {
    options[property] = 'undefined' !== typeof options[property] ? options[property] : defaults[property];
  }

  var fs = require('fs');
  var obj = JSON.parse(fs.readFileSync(fileName, 'utf8'));

  var result = "";
  // Static header
  result += '# Roasting Intelligence. ' +
        '\n# Copyright (C) 2015 Cropster.com' +
        '\n# This file is distributed under the same license as the Roasting Intelligence package.' +
        '\n# Francesco Novy <francesco@cropster.com>, 2015.' +
        '\nmsgid ""' +
        '\nmsgstr ""' +
        '\n"Project-Id-Version: Cropster Hub Frontend"' +
        '\n"Report-Msgid-Bugs-To: "' +
        '\n"POT-Creation-Date: '+(new Date()).toUTCString()+'"' +
        '\n"PO-Revision-Date: '+(new Date()).toUTCString()+'"' +
        '\n"Last-Translator: Francesco <francesco@cropster.com>"' +
        //'\n"Language-Team: German"' +
        '\n"Language: en"' +
        '\n"MIME-Version: 1.0"' +
        '\n"Content-Type: text/plain; charset=UTF-8"' +
        '\n"Content-Transfer-Encoding: 8bit"' +
        '\n"Plural-Forms: nplurals=2; plural=(n != 1);"';

  for(i in obj) {
    if(typeof obj[i] === "object") {
      result+= '\n\nmsgid "'+addslashes(i)+'" \nmsgid_plural "'+addslashes(obj[i]["other"])+'"';
      continue;
    }

    // Regular item
    result += '\n\nmsgid "'+addslashes(i)+'"';// \nmsgstr "'+addslashes(obj[i])+'"';
  }


  return result;

  return options.stringify ? JSON.stringify( result, null, options.pretty ? '   ' : null ) : result;
}


function addslashes(str) {
  //  discuss at: http://phpjs.org/functions/addslashes/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Ates Goral (http://magnetiq.com)
  // improved by: marrtins
  // improved by: Nate
  // improved by: Onno Marsman
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Oskar Larsson Högfeldt (http://oskar-lh.name/)
  //    input by: Denny Wardhana
  //   example 1: addslashes("kevin's birthday");
  //   returns 1: "kevin\\'s birthday"

  return (str + '')
      .replace(/[\\"']/g, '\\$&')
      .replace(/\u0000/g, '\\0');
}