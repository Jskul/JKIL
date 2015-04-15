;

/**
 * @methodOf       JKIL.uri
 * 
 * @description    Gets URI query parameters in the order they occur.<br />
 * 
 * @example        <b>Syntax:</b>
 *                 JKIL.uri.getQueryParametersOrderly ()
 * 
 * @example        <b>Example:</b>
 *                 var a = JKIL.uri.getQueryParametersOrderly (); // returns [{p: "firstParam", v: "12"}, {p: "secondParam", v: "true"}] for www.myURI.net?firstParam=12&secondParam=true
 * 
 * @returns        {array}    Returns an array of URI parameter/value hashes.
 * 
 * @see            JKIL.uri.getQueryParameters ()
 */
JKIL.uri.getQueryParametersOrderly = function () {
	var _s_parameters = decodeURIComponent(window.location.search.substr(1));
	var _a_parameters = null;
	var _a_tmp = null;
	var _aoh_parameters = [];

	if ( _s_parameters != null && _s_parameters != "" ) {
		_a_parameters = _s_parameters.split("&");
		
		for (var i=0; i<_a_parameters.length; ++i) {
			_a_tmp = _a_parameters[i].split("=");
			_aoh_parameters.push ( {p: _a_tmp[0], v: _a_tmp[1]} );
		}
	}

	return _aoh_parameters;
};