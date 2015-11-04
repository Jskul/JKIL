;

/**
 * @methodOf       JKIL.unicode
 * 
 * @description    Escapes a Unicode code point between 0 and 255 as a sequence composed of a prefix and two hexadecimal digits).<br />
 * 
 * @example        <b>Syntax:</b>
 *                 JKIL.unicode.escapeToHexadecimal ( pi_codePoint[, ph_options] )
 * 
 * @example        <b>Example 1:</b>
 *                 var escaped = JKIL.unicode.escapeToHexadecimal ( 65 ); // returns "\x41".
 * 
 * @example        <b>Example 2:</b>
 *                 var escaped = JKIL.unicode.escapeToHexadecimal ( 65, {prefix: "%"} ); // returns "%41".
 *
 * @example        <b>Example 3:</b>
 *                 var escapedWithPadding = JKIL.unicode.escapeToHexadecimal ( 9, {padLeadingZero: true} ); // returns "\x09".
 *                 var escapedWithoutPadding = JKIL.unicode.escapeToHexadecimal ( 9, {padLeadingZero: false} ); // returns "\x9".
 * 
 * @param          {number}     pi_codePoint    An integer between 0 and 255 included.
 * @param          {hash}       [ph_options]    A hash of options:<br /><br />
 * 
 * @param          {string}     [ph_options.prefix="\\x"]           The prefix to prepend.<br /><br />
 * @param          {boolean}    [ph_options.padLeadingZero=true]    If <code>true</code>, pad a leading zero between the prefix and the digit.
 * 
 * @returns        {string}     Returns an escaped hexadecimal Unicode code point.
 * 
 * @throws         TODO
 * 
 * @see            https://mathiasbynens.be/notes/javascript-unicode<br /><br />
 * @see            https://mathiasbynens.be/notes/javascript-escapes
 */
JKIL.unicode.escapeToHexadecimal = function ( pi_codePoint, ph_options ) {
    if (typeof pi_codePoint !== "number") {throw new Error("TODO");}
    // TODO isInteger()
    if (pi_codePoint < 0x00 || pi_codePoint > 0xFF) {throw new Error("TODO");}
    
    if (typeof ph_options !== "object" || ph_options === null) {ph_options = {};}
    if (typeof ph_options.prefix !== "string") {ph_options.prefix = "\\x";}
    if (typeof ph_options.padLeadingZero !== "boolean") {ph_options.padLeadingZero = true;}

    var _s_escaped = ( pi_codePoint ).toString(16);
    
    if ( _s_escaped.length === 1 && ph_options.padLeadingZero === true ) {
        _s_escaped = "0" + _s_escaped;
    }
    _s_escaped = ph_options.prefix + _s_escaped;
    
    return _s_escaped;
}
