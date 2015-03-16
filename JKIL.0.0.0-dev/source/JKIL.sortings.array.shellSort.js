;

/**
 * @methodOf	JKIL.sortings.array
 * 
 * @description	Performs an <b>in-place</b> comparison sort of the given array using a <b>Shell sort algorithm</b> (worst performance equals O(<i>n</i><sup>2</sup>), best performance equals O(<i>n</i> log<sup>2</sup> <i>n</i>), average performance depends on gap sequence).<br />
 * 
 * @example		<b>Syntax:</b>
 * 				JKIL.sortings.array.shellSort ( pa_array, ph_options )
 * 
 * @example		<b>Example 1:</b>
 *              var a = JKIL.sortings.array.shellSort ( numberArray );
 * 
 * @example     <b>Example 2:</b>
 *              var a = JKIL.sortings.array.shellSort ( numberArray, {ascending: false} );
 * 
 * @example     <b>Example 3:</b>
 *              var a = JKIL.sortings.array.shellSort ( numberArray, {ascending: true, comparator: JKIL.comparators.compareNumbers} );
 * 
 * @param       {Array}	    pa_array        The array to be sorted.<br /><br />
 * @param       {hash}      [ph_options]	A hash of options:<br /><br />
 * 
 * @param       {boolean}   [ph_options.ascending=true]             If <code>true</code>, the array is sorted in an ascending manner. If <code>false</code>, the array is sorted in a descending manner.<br /><br />
 * @param       {Function}	[ph_options.comparator=compareNumbers]	A callback anonymous function or a reference to a function that manages the comparison between each pair of values. By default, comparison is made with the <code>&lt;</code> and <code>&gt;</code> operators. 
 * 				TODO
 * 				TODO
 * 
 * @returns     {Array|number}     The sorted given array (that is, <code>pa_array</code> is modified).
 * 
 * @throws      TODO
 * 
 * @see    		Rohaut. S. (2007) "Algorithmique - Techniques fondamentales de programmation (avec des exemples en Java)", Eni éditions. c. Le tri par sélection p. 113<br /><br />
 * @see    		http://en.wikipedia.org/wiki/Shellsort<br /><br />
 * 
 * TODO clean
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort
 * - http://www.javascriptkit.com/javatutors/arraysort.shtml
 * - http://www.javascriptkit.com/javatutors/arraysort2.shtml
 */
JKIL.sortings.array.shellSort = function (pa_array, ph_options) {
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
    if (typeof ph_options.gapSequence !== "number") {
    	ph_options.gapSequence = 0;
    	while(ph_options.gapSequence < pa_array.length) {
    		ph_options.gapSequence = 3 * ph_options.gapSequence + 1;
    	}
    }
    if (typeof ph_options.returnGapSequence !== "boolean") {ph_options.returnGapSequence = false;}
    
    var _n_gap = ph_options.gapSequence;
    var _i_arrayLength = pa_array.length;
    var _m_tmp, j;
    
    while (_n_gap !== 0) {
    	_n_gap = _n_gap / 3;
    	for (i=_n_gap; i<_i_arrayLength; ++i) {
    		_m_tmp = pa_array[i];
    		j=i;
 
    		while (j > (_n_gap - 1) && pa_array[j - _n_gap] > _m_tmp) {
    			pa_array[j] = pa_array[j - _n_gap];
    			j = j - _n_gap;
    		}
    		pa_array[j] = _m_tmp;
    	}
    }

	if (ph_options.returnGapSequence === true) {
		return ph_options.returnGapSequence;
	} else {		
		return pa_array;
	}
};
