;

/**
 * @methodOf       JKIL.unicode
 * 
 * @description    Converts a surrogate pair to a Unicode code point.<br />
 * 
 * @example        <b>Syntax:</b>
 *                 JKIL.unicode.fromSurrogatePair ( ph_surrogatePair )
 * 
 * @example        <b>Example 1:</b>
 *                 var codePoint = JKIL.unicode.fromSurrogatePair ( {high:55357, low:56489} ); // returns 128169, the code point for the character <code>u+1F4A9</code>.
 *
 * @example        <b>Example 2:</b>
 *                 var codePoint = JKIL.unicode.fromSurrogatePair ( {high:65, low:null} ); // returns 65, the code point of <code>A</code>.
 * 
 * @param          {hash}    ph_surrogatePair    A hash having two mandatory properties <code>high</code> and <code>low</code> for the <em>high/lead surrogate</em> and the <em>low/trail surrogate</em>.
 *                           When <code>ph_surrogatePair.low === null</code>, <code>high</code> must range between 0-0xFFFF. Otherwise <code>high</code> must range between 0xD800-0xDBFF and <code>low</code> between 0xDC00-0xDFFF.
 * 
 * @returns        {integer}    Returns a code point.
 *                           
 * @throws         TODO
 * 
 * @see            https://en.wikipedia.org/wiki/Unicode<br /><br />
 * @see            https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae<br /><br />
 * @see            https://mathiasbynens.be/notes/javascript-unicode<br /><br />
 * @see            JKIL.unicode.toSurrogatePair ()
 */
JKIL.unicode.fromSurrogatePair = function ( ph_surrogatePair ) {
    // ph_surrogatePair must be a hash with properties 'high' and 'low'. 
    if (typeof ph_surrogatePair !== "object" || ph_surrogatePair === null) {throw new Error("TODO");}
    if (ph_surrogatePair.hasOwnProperty("high") === false || ph_surrogatePair.hasOwnProperty("low") === false) {throw new Error("TODO");}
    // ph_surrogatePair.high must be a number, ph_surrogatePair.low must be a number or null.
    if (typeof ph_surrogatePair.high !== "number") {throw new Error("TODO");} // TODO isInteger()
    if (typeof ph_surrogatePair.low !== "number" && ph_surrogatePair.low !== null) {throw new Error("TODO");} // TODO isInteger()
    // Checking ranges: When only ph_surrogatePair.high exists its value ranges between 0-0xFFFF.
    if (ph_surrogatePair.low === null && (ph_surrogatePair.high < 0 || ph_surrogatePair.high > 0xFFFF)) {throw new Error("TODO");}
    // Checking ranges: When ph_surrogatePair.low exists, 'high' ranges between 0xD800-0xDBFF and 'low' between 0xDC00-0xDFFF.
    if (typeof ph_surrogatePair.low === "number" && (ph_surrogatePair.high < 0xD800 || ph_surrogatePair.high > 0xDBFF)) {throw new Error("TODO");}
    if (typeof ph_surrogatePair.low === "number" && (ph_surrogatePair.low < 0xDC00 || ph_surrogatePair.low > 0xDFFF)) {throw new Error("TODO");}

    var _i_codePoint = ph_surrogatePair.high;

    if ( ph_surrogatePair.low !== null ) {
        _i_codePoint = (ph_surrogatePair.high - 0xD800) * 0x400 + ph_surrogatePair.low - 0xDC00 + 0x10000;
    }

    // Check that _i_codePoint is not out of range.
    if (_i_codePoint < 0 || _i_codePoint > 0x10FFFF) {throw new Error("TODO");}
    
    return _i_codePoint;
}