;

/**
 * @methodOf	JKIL.comparators
 * 
 * @description	Compares two objects according to a property that <strong>has</strong> to be present in both of them (as an own property).<br />
 * 
 * @example		<b>Syntax:</b>
 * 				JKIL.comparators.compareObjectsByKeyStrictly ( pO_a, pO_b, ps_key, pf_comparator )
 * 
 * @example		<b>Example 1:</b>
 * 				var a = {x: 12};
 *				var b = {x: 13};
 * 				var n = JKIL.comparators.compareObjectsByKeyStrictly(a, b, "x", JKIL.comparators.numbers); // n = -1
 * 
 * @example		<b>Example 2: As a callback of a sort method.</b>
 * 				objectArray = [{a: 45}, {a: -12}, {a: 5}, {a: 45}, {a: 0}, {a: 75}, {a: 69}, {a: 0}, {a: 145}, {a: 1000}, {a: -8}, {a: -565}];
 * 				var a = JKIL.sortings.array.selectionSort ( objectArray,
 * 				                                            {ascending: true,
 * 				                                             comparator: function(a, b) {
 * 				                                                 return JKIL.comparators.compareObjectsByKeyStrictly(a, b, "a", JKIL.comparators.numbers);
 * 				                                             }
 * 				                                            }
 * 				                                          );
 * 
 * @param		{Object}	pO_a			The first object to be compared.<br /><br />
 * @param		{Object}	pO_b			The second object to be compared.<br /><br />
 * @param		{string}	ps_key			The name of the property objects have in common.<br /><br />
 * @param		{function}	pf_comparator	A callback comparator function specifying how to compare <code>pO_a[ps_key]</code> and <code>pO_b[ps_key]</code>.
 * 
 * @returns		{number}	Returns a negative number if <code>pO_a</code> occurs earlier in a sort than <code>pO_b</code>, returns a positive number if <code>pO_a</code> occurs afterwards in such a sort, and returns 0 if they occur at the same level or if <code>pf_comparator</code> does not return a number.
 * 
 * @throws		TODO
 * 
 * @see	http://speakingjs.com/es5/ch18.html	TODO
 */
JKIL.comparators.compareObjectsByKeyStrictly = function (pO_a, pO_b, ps_key, pf_comparator) {
	/*
	 * 
	 * TODO exception
	 * 
	 */
	if (typeof pO_a !== "object" || pO_a === null) {throw new Error("TODO");}
	if (typeof pO_b !== "object" || pO_b === null) {throw new Error("TODO");}
	if (typeof ps_key !== "string" || ps_key.length === 0) {throw new Error("TODO");} // TODO regex of legal keys
	if (pO_a.hasOwnProperty(ps_key) === false) {throw new Error("TODO");}
	if (pO_b.hasOwnProperty(ps_key) === false) {throw new Error("TODO");}
	if (typeof pf_comparator !== "function") {throw new Error("TODO");}
	
	var _i_comparison = 0;

	try {
		_i_comparison = pf_comparator(pO_a[ps_key], pO_b[ps_key]);
		
		if(typeof _i_comparison !== "number") {
			_i_comparison = 0;
		}
	} catch (e) {
		_i_comparison = 0;
	}
	
	return _i_comparison;
};
