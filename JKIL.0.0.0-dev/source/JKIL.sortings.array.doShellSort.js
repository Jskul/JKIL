;

/**
 * @methodOf       JKIL.sortings.array
 * 
 * @description    Performs an <b>in-place</b> comparison sort of the given array using a <b>Shell sort algorithm</b> (worst performance equals O(<i>n</i><sup>2</sup>), best performance equals O(<i>n</i> log<sup>2</sup> <i>n</i>), average performance depends on gap sequence).<br />
 *                 Notice: Uses a gap sequence of about one-third as recommended by Knuth, D.E. (1997) <i>The Art of Computer Programming</i>, Addison-Wesley.<br/>
 * 
 * @example        <b>Syntax:</b>
 *                 JKIL.sortings.array.doShellSort ( pa_array[, ph_options] )
 * 
 * @example        <b>Example 1:</b>
 *                 var a = JKIL.sortings.array.doShellSort ( numberArray );
 * 
 * @example        <b>Example 2:</b>
 *                 var a = JKIL.sortings.array.doShellSort ( numberArray, {ascending: false} );
 * 
 * @example        <b>Example 3:</b>
 *                 var a = JKIL.sortings.array.doShellSort ( numberArray, {ascending: true, comparator: JKIL.comparators.compareNumbers} );
 * 
 * @param          {Array}       pa_array        The array to be sorted.<br /><br />
 * @param          {hash}        [ph_options]    A hash of options:<br /><br />
 * 
 * @param          {boolean}     [ph_options.ascending=true]               If <code>true</code>, the array is sorted in an ascending manner. If <code>false</code>, the array is sorted in a descending manner.<br /><br />
 * @param          {Function}    [ph_options.comparator=compareNumbers]    A callback anonymous function or a reference to a function that manages the comparison between each pair of values. By default, comparison is made with the <code>&lt;</code> and <code>&gt;</code> operators. 
 * 
 * @returns        {Array}     The sorted given array (that is, <code>pa_array</code> is modified).
 * 
 * @throws         TODO
 * 
 * @see            Sedgewick. S. (1998) <i>Algorithms in C</i>, Third Edition, Addison-Wesley. Part 3, §6.6 Shellsort, p. 273<br /><br />
 * @see            Rohaut. S. (2007) <i>Algorithmique - Techniques fondamentales de programmation (avec des exemples en Java)</i>, Eni éditions. c. Le tri par sélection p. 113<br /><br />
 * @see            http://en.wikipedia.org/wiki/Shellsort<br /><br />
 * 
 * TODO clean
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort
 * - http://www.javascriptkit.com/javatutors/arraysort.shtml
 * - http://www.javascriptkit.com/javatutors/arraysort2.shtml
 */
JKIL.sortings.array.doShellSort = function (pa_array, ph_options) {
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

    var _i_l = pa_array.length;
    var _i_h = 0; // h
    while(_i_h < _i_l) {_i_h = 3 * _i_h + 1;} // Initialize the gap sequence max.
    var _i_d = 3; // Divisor.
    var _m_tmp, j;
    
    while (_i_h > 0) {
        _i_h = Math.floor(_i_h / _i_d);
        for (i = _i_h; i < _i_l; ++i) {
            _m_tmp = pa_array[i];
            for ( j = i;
                  j >= _i_h && (
                      ph_options.ascending === true && ph_options.comparator( _m_tmp, pa_array[j - _i_h] ) < 0
                   || ph_options.ascending === false && ph_options.comparator( _m_tmp, pa_array[j - _i_h] ) > 0
                  );
                  j -= _i_h
                ) {
                pa_array[j] = pa_array[j - _i_h];
            }
            pa_array[j] = _m_tmp;
        }
    }

    return pa_array;
};
