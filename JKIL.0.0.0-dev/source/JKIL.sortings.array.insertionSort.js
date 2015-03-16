;

/**
 * @methodOf	JKIL.sortings.array
 * 
 * @description	Performs an <b>in-place</b> comparison sort of the given array using an <b>insertion sort algorithm</b> (worst and average performances equal O(<i>n</i><sup>2</sup>), best performance equals O(<i>n</i>)).<br />
 * 
 * @example		<b>Syntax:</b>
 * 				JKIL.sortings.array.insertionSort ( pa_array, ph_options )
 * 
 * @example		<b>Example 1:</b>
 *              var a = JKIL.sortings.array.insertionSort ( numberArray );
 * 
 * @example     <b>Example 2:</b>
 *              var a = JKIL.sortings.array.insertionSort ( numberArray, {ascending: false} );
 * 
 * @example     <b>Example 3:</b>
 *              var a = JKIL.sortings.array.insertionSort ( numberArray, {ascending: true, comparator: JKIL.comparators.compareNumbers} );
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
 * @see    		Rohaut. S. (2007) "Algorithmique - Techniques fondamentales de programmation (avec des exemples en Java)", Eni éditions. c. Le tri par sélection p. 112<br /><br />
 * @see    		http://en.wikipedia.org/wiki/Insertion_sort<br /><br />
 * 
 * TODO clean
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort
 * - http://www.javascriptkit.com/javatutors/arraysort.shtml
 * - http://www.javascriptkit.com/javatutors/arraysort2.shtml
 */
JKIL.sortings.array.insertionSort = function (pa_array, ph_options) {
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
    
    var _i_arrayLength = pa_array.length;
    var _m_tmp, j;
    
	for (i=1; i<_i_arrayLength; ++i) {
		_m_tmp = pa_array[i];
		j = i-1;
		
		while (		j >= 0
				&&	(	ph_options.ascending === true && ph_options.comparator(_m_tmp, pa_array[j]) < 0
					 ||	ph_options.ascending === false && ph_options.comparator(_m_tmp, pa_array[j]) > 0)) {
			pa_array[j+1] = pa_array[j];
			--j;
		}
		pa_array[j+1] = _m_tmp;
	}

    return pa_array;
};
