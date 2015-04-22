;

/**
 * @methodOf       JKIL.comparators
 * 
 * @description    Compares two strings using the current locale.<br />
 * 
 * @example        <b>Syntax:</b>
 *                 JKIL.comparators.compareStringsLocale ( ps_a, ps_b )
 * 
 * @param          {string}    ps_a    The first string to be compared.<br /><br />
 * @param          {string}    ps_b    The second string to be compared.
 * 
 * @returns        {number}    Returns a negative number if <code>ps_a</code> occurs earlier in a sort than <code>ps_b</code>, returns a positive number if <code>ps_a</code> occurs afterwards in such a sort, and returns 0 if they occur at the same level.
 * 
 * @throws         TODO
 * 
 * @see            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare<br /><br />
 * @see            http://speakingjs.com/es5/ch18.html TODO<br /><br />
 * 
 * TODO process string literals AND String objects
 */
JKIL.comparators.compareStringsLocale = function (ps_a, ps_b) {
    /*
     * TODO check that localeCompare() is supported
     * TODO allow the use of localeCompare() own options
     * 
     */
    if (typeof ps_a !== "string") {throw new Error("TODO");}
    if (typeof ps_b !== "string") {throw new Error("TODO");}
    
    return ps_a.localeCompare(ps_b);
};
