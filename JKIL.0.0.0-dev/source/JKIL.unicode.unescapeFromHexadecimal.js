;

/**
 * @methodOf       JKIL.unicode
 * 
 * @description    Unescapes the hexadecimal escape sequence of a character between 0 and 255 (the expected sequence is composed of a prefix and two hexadecimal digits).<br />
 * 
 * @example        <b>Syntax:</b>
 *                 JKIL.unicode.unescapeFromHexadecimal ( ps_escapedCharacter[, ph_options] )
 * 
 * @example        <b>Example 1:</b>
 *                 var char = JKIL.unicode.unescapeFromHexadecimal ( "\\x41" ); // returns "A".
 * 
 * @example        <b>Example 2:</b>
 *                 var code = JKIL.unicode.unescapeFromHexadecimal ( "\\x41", {to:"code"} );  // returns 65.
 *
 * @example        <b>Example 3:</b>
 *                 var char = JKIL.unicode.unescapeFromHexadecimal ( "%41", {to:"character", prefix:"%"} ); // returns "A".
 * 
 * @param          {string}    ps_escapedCharacter    The hexadecimal escape sequence of a character.
 * @param          {hash}      [ph_options]           A hash of options:<br /><br />
 * 
 * @param          {string}    [ph_options.to="character"]    Either <code>character</code>, if a character if to be returned, or "code" if the code point is to be returned.<br /><br />
 * @param          {boolean}   [ph_options.silent=true]       When <code>ps_escapedCharacter</code> does not match <code>RegExp ( "^" + ph_options.prefix + "[0-9a-z]{1,2}$", ph_options.flags )</code>, if <code>ph_options.silent === true</code> <code>null</code> is returned; if <code>ph_options.silent === false</code> an error is thrown.<br /><br />
 * @param          {string}    [ph_options.prefix="\\\\x"]    The expected sequence prefix (used in a RegExp).<br /><br />
 * @param          {string}    [ph_options.flags="i"]         The flags used in RegExp tests.<br /><br />
 * @param          {string}    [ph_options.replacement="0x"]  The string to use as replacement of <code>ph_options.prefix</code>. <strong>NOTICE: The result of the substitution must be eligible for a conversion as a consistent number. The default value SHOULD NOT be modified.</strong>
 * 
 * @returns        {string|number|null}    Returns a character with <code>ph_options.to="character"</code>, a code point with <code>ph_options.to="code"</code> or <code>null</code> if <code>ph_options.silent === true</code> <em>AND</em> <code>ps_escapedCharacter</code> does not match the expected pattern.
 * 
 * @throws         TODO
 * 
 * @see            https://mathiasbynens.be/notes/javascript-unicode<br /><br />
 * @see            https://mathiasbynens.be/notes/javascript-escapes
 */
JKIL.unicode.unescapeFromHexadecimal = function ( ps_escapedCharacter, ph_options ) {
    if (typeof ph_options !== "object" || ph_options === null) {ph_options = {};}
    if (typeof ph_options.to !== "string" || /^(character|code)$/i.test( ph_options.to ) === false) {ph_options.to = "character";}
    if (typeof ph_options.silent !== "boolean") {ph_options.silent = true;}
    if (typeof ph_options.prefix !== "string") {ph_options.prefix = "\\\\x";}
    if (typeof ph_options.flags !== "string") {ph_options.flags = "i";}
    if (typeof ph_options.replacement !== "string") {ph_options.replacement = "0x";}
    
    var _m_unescaped = null;
    
    // Validate ps_escapedCharacter.
    if (typeof ps_escapedCharacter !== "string") {throw new Error("TODO");}
    var _r_escapedCharacterPattern = new RegExp ( "^" + ph_options.prefix + "[0-9a-f]{1,2}$", ph_options.flags );
    // Off silent mode, throw error if ps_escapedCharacter does not match the expected pattern.
    if (_r_escapedCharacterPattern.test( ps_escapedCharacter ) === false) {
        if ( ph_options.silent === false ) {throw new Error("TODO");}  // Thus with ph_options.silent === true, the default value of _m_unescaped is returned.
    // ps_escapedCharacter matches the expected pattern...
    } else {
        // Here it is expected that the outcome of replace() can be cast to number.
        try {
            var _r_prefixPattern = new RegExp ( "^" + ph_options.prefix, ph_options.flags );
            _m_unescaped = ps_escapedCharacter.replace(_r_prefixPattern, ph_options.replacement) * 1;
        } catch (e) {
            throw new Error("TODO");
        }
    
        switch (ph_options.to) {
            case "character":
                _m_unescaped = String.fromCharCode( _m_unescaped );
            break;
            case "code":
            default:
            break;
        }
    }

    return _m_unescaped;
}
