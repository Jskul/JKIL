;
/**
 * 
 * 
 * - Algorithmique - Techniques fondamentales de programmation (exemple en JAVA).pdf
 * c. Le tri par sélection p. 108
 * 
 * - http://en.wikipedia.org/wiki/Selection_sort
 * 
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort
 * - http://www.javascriptkit.com/javatutors/arraysort.shtml
 * - http://www.javascriptkit.com/javatutors/arraysort2.shtml
 * 
 */

/*
class chap5_triselect {
	public static void main(String[] args) {
		int t[]={27,44,12,18,23,19,101,54,29,77,52,88,10,32};
		int i,j,cpt,temp,min;
		cpt=14;
		for(i=0;i<cpt-1;i++) {
			min=i;
			for(j=i+1;j<cpt;j++) {
				if(t[j]<t[min]) min=j;
			}
			if(min!=i) {
				temp=t[min];
				t[min]=t[i];
				t[i]=temp;
			}
			for(j=0;j<cpt;j++) {
				System.out.print(t[j]+" ");
			}
			System.out.println();
		}
	}
}

*/


/**
 * 
 */
JKIL.sortings.selectionSort = function (pa_array, ph_options) {
	/*
	 * TODO Check pa_array
	 */
	
	if (typeof ph_options !== "object" || ph_options === null) {
		ph_options = {};
	}
	if (typeof ph_options.ascending !== "boolean") {
		ph_options.ascending = true;
	}
	if (typeof ph_options.comparison !== "function") {
		ph_options.comparison = function (a, b) {
			if (a < b) {
				return -1;
			} else if ( a > b) {
				return 1
			} else {
				return 0;
			}
		};
	}
	
	var _i_arrayLength = pa_array.length;
	var _i_min, _m_swap;
	
	for (i=0; i<_i_arrayLength - 1; ++i) {
		_i_min = i;
		for (j=i+1; j<_i_arrayLength; ++j) {
			if (	ph_options.ascending === true && ph_options.comparison(pa_array[j], pa_array[_i_min]) < 0
				||	ph_options.ascending === false && ph_options.comparison(pa_array[j], pa_array[_i_min]) > 0) {
				_i_min = j;
			}
		}
		if (_i_min !== i) {
			_m_swap = pa_array[_i_min];
			pa_array[_i_min] = pa_array[i];
			pa_array[i] = _m_swap;
		}
	}
	
	return pa_array;
};