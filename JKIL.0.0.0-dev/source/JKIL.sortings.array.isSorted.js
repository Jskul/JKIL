;

/**
 * @methodOf       JKIL.sortings.array
 * 
 * @description    Checks whether the given array is sorted or not.<br />
 * 
 * @example        <b>Syntax:</b>
 *                 JKIL.sortings.array.isSorted ( pa_array[, ph_options] )
 * 
 * @example        <b>Example 1:</b>
 *                 var b = JKIL.sortings.array.isSorted ( numberArray );
 * 
 * @example        <b>Example 2:</b>
 *                 var b = JKIL.sortings.array.isSorted ( numberArray, {ascending: null} );
 * 
 * @example        <b>Example 3:</b>
 *                 var b = JKIL.sortings.array.isSorted ( numberArray, {ascending: false} );
 *  
 * @example        <b>Example 4:</b>
 *                 var b = JKIL.sortings.array.isSorted ( numberArray, {ascending: true, comparator: JKIL.comparators.compareNumbers} );
 * 
 * @param          {Array}           pa_array        The array to be checked.<br /><br />
 * @param          {hash}            [ph_options]    A hash of options:<br /><br />
 * 
 * @param          {null|boolean}    [ph_options.ascending=null]               If <code>null</code>, the method only checks whether the array is sorted. If <code>true</code>, the method checks if the array is sorted in an ascending manner. If <code>false</code>, it checks if the array is sorted in a descending manner.<br /><br />
 * @param          {Function}        [ph_options.comparator=compareNumbers]    A callback anonymous function or a reference to a function that manages the comparison between each pair of values. By default, comparison is made with the <code>&lt;</code> and <code>&gt;</code> operators. 
 * 
 * @returns        {boolean}         If <code>true</code> the array is sorted, if <code>false</code> the array is not sorted <strong>or</strong> is not sorted according to the given <code>ph_options.ascending</code> boolean value.<br />
 *                                   Notice: Arrays having less than two elements are considered sorted.
 * 
 * @throws      TODO
 */
JKIL.sortings.array.isSorted = function (pa_array, ph_options) {
    //TODO JKIL.types.isArray( pa_array )
    
    if (typeof ph_options !== "object" || ph_options === null) {ph_options = {};}
    if (typeof ph_options.ascending !== "boolean" && ph_options.ascending !== null) {ph_options.ascending = null;}
    if (typeof ph_options.comparator !== "function") {
        ph_options.comparator = function (pm_a, pm_b) {
            if (pm_a < pm_b) {return -1;}
            else if (pm_a > pm_b) {return 1}
            else {return 0;}
        };
    }

    var _b_isSorted = true;
    var _i_initialOrder = 0;
    var _n_comparison = 0;

    // Arrays having less than two elements are considered sorted.
    if ( pa_array.length >= 2 ) {
        for ( i=0; _b_isSorted === true && i<pa_array.length - 1; ++i ) {
            // Determine the initial ordering of elements according to the two first different elements.
            if ( _i_initialOrder === 0 ) {
                _n_comparison = ph_options.comparator(pa_array[i], pa_array[i+1]);
                if ( _n_comparison < 0 ) {
                    _i_initialOrder = -1; // The initial ordering is ascending
                } else if ( _n_comparison > 0 ) {
                    _i_initialOrder = 1; // The initial ordering is descending
                }
                // If the initial ordering is set, then check if it matches the expected ordering (if any).
                if (    _i_initialOrder === -1 && ph_options.ascending === false
                     || _i_initialOrder === 1 && ph_options.ascending === true
                   ) {
                     _b_isSorted = false;
                }
            }
             
            // Once initial order has been set...
            if ( _i_initialOrder !== 0 ) {
                _n_comparison = ph_options.comparator(pa_array[i], pa_array[i+1]);
                // The array is not sorted if at least one pa_array[i] vs. pa_array[i + 1] ordering does not match the initial ordering.
                if (    _i_initialOrder === -1 && _n_comparison > 0
                     || _i_initialOrder === 1 && _n_comparison < 0
                   ) {
                    _b_isSorted = false;
                }
            }
        }
    }
    
    return _b_isSorted;
};
