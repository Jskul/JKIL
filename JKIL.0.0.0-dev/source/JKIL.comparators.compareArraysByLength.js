;

/**
 * @methodOf	JKIL.comparators
 * 
 * @description Compares the lengths of two arrays.<br />
 * 
 * @example     <b>Syntax:</b>
 *              JKIL.comparators.compareArraysByLength ( pa_a, pa_b )
 * 
 * @param       {Array}		pa_a	The first array to be compared.<br /><br />
 * @param       {Array}     pa_b	The second array to be compared.
 * 
 * @returns     {number}	Returns a negative number if <code>pa_a.length < pa_b.length</code>, returns a positive number if <code>pa_a.length > pa_b.length</code>, and returns 0 if <code>pa_a.length === pa_b.length</code>.
 * 
 * @throws      TODO
 */
JKIL.comparators.compareArraysByLength = function (pa_a, pa_b) {
    /*
     * TODO Check a & b are arrays
     */
//    if (JKIL.types.isArray(pa_a) === false) {throw new Error("TODO");}
//    if (JKIL.types.isArray(pa_b) === false) {throw new Error("TODO");}
    
    return pa_a.length - pa_b.length;
};

