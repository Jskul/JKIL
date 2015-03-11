;
/**
 * 
 * 
 * 
 * - http://www.javascriptkit.com/javatutors/arraysort.shtml
 * - http://www.javascriptkit.com/javatutors/arraysort2.shtml
 * 
 */


/**
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort
 */
JKIL.comparisons.numbers = function (a, b) {
	/*
	 * Check a & b are numbers ?
	 */
	return a - b;
};

/**
 * 
 */
JKIL.comparisons.localeStrings = function (a, b) {
	/*
	 * Check a & b are numbers strings and localeCompare() exists ?
	 */
	return a.localeCompare(b);
};