function stringToColorCode(s) {
  var code = dechex(crc32(s));
  code = substr(code, 0, 6);
  return '#' + code;
}


function crc32 (str) {
  // http://kevin.vanzonneveld.net
  // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // +   improved by: T0bsn
  // -    depends on: utf8_encode
  // *     example 1: crc32('Kevin van Zonneveld');
  // *     returns 1: 1249991249
  var table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";

  var crc = 0;
  var x = 0;
  var y = 0;

  crc = crc ^ (-1);
  for (var i = 0, iTop = str.length; i < iTop; i++) {
    y = (crc ^ str.charCodeAt(i)) & 0xFF;
    x = "0x" + table.substr(y * 9, 8);
    crc = (crc >>> 8) ^ x;
  }

  return crc ^ (-1);
}

function dechex (number) {
  // http://kevin.vanzonneveld.net
  // +   original by: Philippe Baumann
  // +   bugfixed by: Onno Marsman
  // +   improved by: http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
  // +   input by: pilus
  // *     example 1: dechex(10);
  // *     returns 1: 'a'
  // *     example 2: dechex(47);
  // *     returns 2: '2f'
  // *     example 3: dechex(-1415723993);
  // *     returns 3: 'ab9dc427'
  if (number < 0) {
    number = 0xFFFFFFFF + number + 1;
  }
  return parseInt(number, 10).toString(16);
}


function substr (str, start, len) {
  // Returns part of a string
  //
  // version: 909.322
  // discuss at: http://phpjs.org/functions/substr
  // +     original by: Martijn Wieringa
  // +     bugfixed by: T.Wild
  // +      tweaked by: Onno Marsman
  // +      revised by: Theriault
  // +      improved by: Brett Zamir (http://brett-zamir.me)
  // %    note 1: Handles rare Unicode characters if 'unicode.semantics' ini (PHP6) is set to 'on'
  // *       example 1: substr('abcdef', 0, -1);
  // *       returns 1: 'abcde'
  // *       example 2: substr(2, 0, -6);
  // *       returns 2: false
  // *       example 3: ini_set('unicode.semantics',  'on');
  // *       example 3: substr('a\uD801\uDC00', 0, -1);
  // *       returns 3: 'a'
  // *       example 4: ini_set('unicode.semantics',  'on');
  // *       example 4: substr('a\uD801\uDC00', 0, 2);
  // *       returns 4: 'a\uD801\uDC00'
  // *       example 5: ini_set('unicode.semantics',  'on');
  // *       example 5: substr('a\uD801\uDC00', -1, 1);
  // *       returns 5: '\uD801\uDC00'
  // *       example 6: ini_set('unicode.semantics',  'on');
  // *       example 6: substr('a\uD801\uDC00z\uD801\uDC00', -3, 2);
  // *       returns 6: '\uD801\uDC00z'
  // *       example 7: ini_set('unicode.semantics',  'on');
  // *       example 7: substr('a\uD801\uDC00z\uD801\uDC00', -3, -1)
  // *       returns 7: '\uD801\uDC00z'
  // Add: (?) Use unicode.runtime_encoding (e.g., with string wrapped in "binary" or "Binary" class) to
  // allow access of binary (see file_get_contents()) by: charCodeAt(x) & 0xFF (see https://developer.mozilla.org/En/Using_XMLHttpRequest ) or require conversion first?
  var i = 0,
    allBMP = true,
    es = 0,
    el = 0,
    se = 0,
    ret = '';
  str += '';
  var end = str.length;

  // BEGIN REDUNDANT
  this.php_js = this.php_js || {};
  this.php_js.ini = this.php_js.ini || {};
  // END REDUNDANT
  switch ((this.php_js.ini['unicode.semantics'] && this.php_js.ini['unicode.semantics'].local_value.toLowerCase())) {
  case 'on':
    // Full-blown Unicode including non-Basic-Multilingual-Plane characters
    // strlen()
    for (i = 0; i < str.length; i++) {
      if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
        allBMP = false;
        break;
      }
    }

    if (!allBMP) {
      if (start < 0) {
        for (i = end - 1, es = (start += end); i >= es; i--) {
          if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
            start--;
            es--;
          }
        }
      } else {
        var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
        while ((surrogatePairs.exec(str)) != null) {
          var li = surrogatePairs.lastIndex;
          if (li - 2 < start) {
            start++;
          } else {
            break;
          }
        }
      }

      if (start >= end || start < 0) {
        return false;
      }
      if (len < 0) {
        for (i = end - 1, el = (end += len); i >= el; i--) {
          if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {
            end--;
            el--;
          }
        }
        if (start > end) {
          return false;
        }
        return str.slice(start, end);
      } else {
        se = start + len;
        for (i = start; i < se; i++) {
          ret += str.charAt(i);
          if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {
            se++; // Go one further, since one of the "characters" is part of a surrogate pair
          }
        }
        return ret;
      }
      break;
    }
    // Fall-through
  case 'off':
    // assumes there are no non-BMP characters;
    //    if there may be such characters, then it is best to turn it on (critical in true XHTML/XML)
  default:
    if (start < 0) {
      start += end;
    }
    end = typeof len === 'undefined' ? end : (len < 0 ? len + end : len + start);
    // PHP returns false if start does not fall within the string.
    // PHP returns false if the calculated end comes before the calculated start.
    // PHP returns an empty string if start and end are the same.
    // Otherwise, PHP returns the portion of the string from start to end.
    return start >= str.length || start < 0 || start > end ? !1 : str.slice(start, end);
  }
  return undefined; // Please Netbeans
}