;

/**
 * @methodOf       JKIL.comparators
 * 
 * @description    Performs a default comparison (<i>i&#46;e&#46;</i> using the <code>&lt;</code> and <code>&gt;</code> operators).<br />
 *                 It applies correctly to null, boolean, number and string types and across some of these types.<br />
 *                 TODO be more specific<br />
 * 
 * @example        <b>Syntax:</b>
 *                 JKIL.comparators.compareMixed ( pm_a, pm_b )
 * 
 * @param          {mixed}    pm_a    The first value to be compared.<br /><br />
 * @param          {mixed}    pm_b    The second value to be compared.
 * 
 * @returns        {number}    Either -1 (when <code>pm_a < pm_b</code>), 1 (when <code>pm_a > pm_b</code>) or 0 otherwise (<code>pm_a == pm_b</code> or values could not be compared).
 */
JKIL.comparators.compareMixed = function (pm_a, pm_b) {
    if (pm_a < pm_b) {return -1;}
    else if (pm_a > pm_b) {return 1}
    else {return 0;}
};
