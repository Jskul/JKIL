;

/**
 * @methodOf	JKIL.comparators
 * 
 * @description	Returns randomly -1, 0 or 1 with a uniform distribution.<br />
 * 
 * @example		<b>Syntax:</b>
 * 				JKIL.comparators.compareRandomly ()
 * 
 * @returns		{number}	-1, 0 or 1 randomly.
 */
JKIL.comparators.compareRandomly = function () {
	var _i_min = -1;
	var _i_max = 1;
	return Math.floor(Math.random() * (_i_max - _i_min + 1)) + _i_min;
};