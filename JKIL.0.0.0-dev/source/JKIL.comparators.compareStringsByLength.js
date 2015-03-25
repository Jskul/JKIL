;

/**
 * @methodOf      JKIL.comparators
 * 
 * @description    Compares the lengths of two strings.<br />
 * 
 * @example        <b>Syntax:</b>
 *                 JKIL.comparators.compareStringsByLength ( ps_a, ps_b )
 * 
 * @param          {string}    ps_a    The first string to be compared.<br /><br />
 * @param          {string}    ps_b    The second string to be compared.
 * 
 * @returns        {number}    Returns a negative number if <code>ps_a.length < ps_b.length</code>, returns a positive number if <code>ps_a.length > ps_b.length</code>, and returns 0 if <code>ps_a.length === ps_b.length</code>.
 * 
 * @throws         TODO
 * 
 * TODO process string litterals AND String objects
 */
JKIL.comparators.compareStringsByLength = function (ps_a, ps_b) {
    /*
     * TODO Check a & b are strings
     */
    if (typeof ps_a !== "string") {throw new Error("TODO");}
    if (typeof ps_b !== "string") {throw new Error("TODO");}
    
    return ps_a.length - ps_b.length;
};

