;

/**
 * @methodOf	JKIL.comparators
 * 
 * @description	Compares two numbers.
 * 
 * @example		<b>Syntax:</b>
 * 				JKIL.comparators.numbers ( pn_a, pn_b )
 * 
 * @param		{number}	pn_a	The first number to be compared.
 * @param		{number}	pn_b	The first number to be compared.
 * 
 * @returns		{number}	Returns a negative number if <code>pn_a</code> occurs earlier in a sort than <code>pn_b</code>, returns a positive number if <code>pn_a</code> occurs afterwards in such a sort, and returns 0 if they occur at the same level.
 * 
 * @throws		TODO
 * 
 * TODO clean
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort
 * 
 * - http://www.javascriptkit.com/javatutors/arraysort.shtml
 * - http://www.javascriptkit.com/javatutors/arraysort2.shtml
 */
JKIL.comparators.numbers = function (pn_a, pn_b) {
	/*
	 * TODO Check a & b are numbers ?
	 */
	if (typeof pn_a !== "number") {throw new Error("TODO");}
	if (typeof pn_b !== "number") {throw new Error("TODO");}
	
	return pn_a - pn_b;
};

