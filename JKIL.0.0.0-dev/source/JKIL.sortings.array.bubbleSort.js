;

/**
 * @methodOf	JKIL.sortings.array
 * 
 * @description	Performs an <b>in-place</b> comparison sort of the given array using a <b>bubble sort algorithm</b> (worst and average performances equal O(<i>n</i><sup>2</sup>), best performance equals O(<i>n</i>)).<br />
 * 
 * @example		<b>Syntax:</b>
 * 				JKIL.sortings.array.bubbleSort ( pa_array, ph_options )
 * 
 * @example		<b>Example 1:</b>
 *              var a = JKIL.sortings.array.bubbleSort ( numberArray );
 * 
 * @example     <b>Example 2:</b>
 *              var a = JKIL.sortings.array.bubbleSort ( numberArray, {ascending: false} );
 * 
 * @example     <b>Example 3:</b>
 *              var a = JKIL.sortings.array.bubbleSort ( numberArray, {ascending: true, comparator: JKIL.comparators.compareNumbers} );
 * 
 * @param       {Array}	    pa_array        The array to be sorted.<br /><br />
 * @param       {hash}      [ph_options]	A hash of options:<br /><br />
 * 
 * @param       {boolean}   [ph_options.ascending=true]             If <code>true</code>, the array is sorted in an ascending manner. If <code>false</code>, the array is sorted in a descending manner.<br /><br />
 * @param       {Function}	[ph_options.comparator=compareNumbers]	A callback anonymous function or a reference to a function that manages the comparison between each pair of values. By default, comparison is made with the <code>&lt;</code> and <code>&gt;</code> operators. 
 * 
 * @returns     {Array}     The sorted given array (that is, <code>pa_array</code> is modified).
 * 
 * @throws      TODO
 * 
 * @see    		Rohaut. S. (2007) "Algorithmique - Techniques fondamentales de programmation (avec des exemples en Java)", Eni éditions. c. Le tri par sélection p. 110<br /><br />
 * @see    		http://en.wikipedia.org/wiki/Bubble_sort<br /><br />
 * 
 * TODO clean
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort
 * - http://www.javascriptkit.com/javatutors/arraysort.shtml
 * - http://www.javascriptkit.com/javatutors/arraysort2.shtml
 */
JKIL.sortings.array.bubbleSort = function (pa_array, ph_options) {
    //TODO JKIL.types.isArray( pa_array )
    
    if (typeof ph_options !== "object" || ph_options === null) {ph_options = {};}
    if (typeof ph_options.ascending !== "boolean") {ph_options.ascending = true;}
    if (typeof ph_options.comparator !== "function") {
        ph_options.comparator = function (pm_a, pm_b) {
            if (pm_a < pm_b) {return -1;}
            else if (pm_a > pm_b) {return 1}
            else {return 0;}
        };
    }
    
    var _i_iMax = pa_array.length - 1;
    var _b_permute = true;
    
    while (_b_permute){
    	_b_permute = false;
    	for (i=0; i<_i_iMax; ++i) {
    		if (	ph_options.ascending === true && ph_options.comparator(pa_array[i+1], pa_array[i]) < 0
    			||	ph_options.ascending === false && ph_options.comparator(pa_array[i+1], pa_array[i]) > 0) {
                _m_swap = pa_array[i];
                pa_array[i] = pa_array[i+1];
                pa_array[i+1] = _m_swap;
                _b_permute = true;
    		}
    	}
    	--_i_iMax;
    }
    
    return pa_array;
};
