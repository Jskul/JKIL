;

/**
 * @methodOf       JKIL.unicode
 * 
 * @description    Converts a Unicode code point greater than <code>0xFFFF</code> to a surrogate pair.<br />
 * 
 * @example        <b>Syntax:</b>
 *                 JKIL.unicode.toSurrogatePair ( pi_codePoint )
 * 
 * @example        <b>Example 1:</b>
 *                 var surrogatePair = JKIL.unicode.toSurrogatePair ( 0x1F4A9 ); // returns {high: 55357, low: 56489} for the character <code>u+1F4A9</code>.
 * 
 * @example        <b>Example 2:</b>
 *                 var surrogatePair = JKIL.unicode.toSurrogatePair ( 128169 ); // returns {high: 55357, low: 56489} as well for <code>u+1F4A9</code>.
 *
 * @example        <b>Example 3:</b>
 *                 var surrogatePair = JKIL.unicode.toSurrogatePair ( 65 ); // returns {high: 65, low: null} for the code point of <code>A</code>.
 * 
 * @param          {integer}    pi_codePoint    An integer between <code>0x0000</code> and <code>0x10FFFF</code> included.
 * 
 * @returns        {hash}    Returns a hash having two properties <code>high</code> and <code>low</code> for the <em>high/lead surrogate</em> and the <em>low/trail surrogate</em>.
 *                           When <code>pi_codePoint &lt;= 0xFFFF</code>, <code>high</code> contains <code>pi_codePoint</code> and <code>low</code> is <code>null</code>.
 * 
 * @throws         TODO
 * 
 * @see            https://en.wikipedia.org/wiki/Unicode<br /><br />
 * @see            https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae<br /><br />
 * @see            https://mathiasbynens.be/notes/javascript-unicode<br /><br />
 * @see            JKIL.unicode.fromSurrogatePair ()
 */
JKIL.unicode.toSurrogatePair = function ( pi_codePoint ) {
    if (typeof pi_codePoint !== "number") {throw new Error("TODO");}
    // TODO isInteger()
    if (pi_codePoint < 0x0000 || pi_codePoint > 0x10FFFF) {throw new Error("TODO");}

    var _h_surrogatePair = {high: pi_codePoint, low: null};
    
    // When pi_codePoint belongs to the range of Supplementary Planes, compute surrogates.
    if ( pi_codePoint > 0xFFFF ) {
        _h_surrogatePair.high = Math.floor( (pi_codePoint - 0x10000) / 0x400 ) + 0xD800;
        _h_surrogatePair.low = ( pi_codePoint - 0x10000 ) % 0x400 + 0xDC00;
    }
    
    return _h_surrogatePair;
}
