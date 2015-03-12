;

/**
 * @methodOf	JKIL.comparators
 * 
 * @description	Compares the lengths of two strings and then their current locale.<br />
 * 
 * @example		<b>Syntax:</b>
 * 				JKIL.comparators.compareStringsByLengthAndLocale ( ps_a, ps_b )
 * 
 * @param		{string}	ps_a	The first string to be compared.<br /><br />
 * @param		{string}	ps_b	The second string to be compared.
 * 
 * @returns		{number}	Returns a negative number if <code>ps_a.length < ps_b.length</code>, returns a positive number if <code>ps_a.length > ps_b.length</code>, and returns 0 if <code>ps_a.length === ps_b.length</code>.
 * 
 * @throws		TODO
 * 
 * TODO process string litterals AND String objects
 */
JKIL.comparators.compareStringsByLengthAndLocale = function (ps_a, ps_b) {
	/*
	 * TODO Check a & b are strings
	 */
	/*
	 * TODO check that localeCompare() is supported
	 * TODO allow the use of localeCompare() own options
	 * 
	 */
	if (typeof ps_a !== "string") {throw new Error("TODO");}
	if (typeof ps_b !== "string") {throw new Error("TODO");}
	
	var _i_comparison = ps_a.length - ps_b.length;

	if (_i_comparison === 0) {
		_i_comparison = ps_a.localeCompare(ps_b);
	}
	
	return _i_comparison;
};

