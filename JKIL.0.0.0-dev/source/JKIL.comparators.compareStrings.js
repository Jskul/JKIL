;

/**
 * @methodOf      JKIL.comparators
 * 
 * @description    Compares two string using the <code>&lt;</code> and <code>&gt;</code> operators.<br />
 * 
 * @example        <b>Syntax:</b>
 *                 JKIL.comparators.compareStrings ( ps_a, ps_b )
 * 
 * @param          {string}    ps_a    The first string to be compared.<br /><br />
 * @param          {string}    ps_b    The second string to be compared.
 * 
 * @returns        {number}    Returns -1 if <code>ps_a</code> occurs earlier in a sort than <code>ps_b</code>, returns 1 if <code>ps_a</code> occurs afterwards in such a sort, and returns 0 if they occur at the same level.
 * 
 * @throws         TODO
 * 
 * @see            http://speakingjs.com/es5/ch18.html TODO<br /><br />
 * 
 * TODO clean
 * - http://www.javascriptkit.com/javatutors/arraysort.shtml
 * - http://www.javascriptkit.com/javatutors/arraysort2.shtml
 * 
 * TODO process string literals AND String objects
 */
JKIL.comparators.compareStrings = function (ps_a, ps_b) {
    /*
     * TODO if (JKIL.types.isString(ps_a) === false || JKIL.types.isString(ps_b) === false) {
     *    exception
     * 
     */
    if (typeof ps_a !== "string") {throw new Error("TODO");}
    if (typeof ps_b !== "string") {throw new Error("TODO");}
    
    var _i_comparison = 0;
    
    if (ps_a < ps_b) {
        _i_comparison = -1;
    } else if (ps_a > ps_b) {
        _i_comparison = 1
    };
    
    return _i_comparison;
};
