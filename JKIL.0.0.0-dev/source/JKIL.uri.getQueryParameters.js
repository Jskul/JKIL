;

/**
 * @methodOf       JKIL.uri
 * 
 * @description    Gets URI query parameters.<br />
 * 
 * @example        <b>Syntax:</b>
 *                 JKIL.uri.getQueryParameters ()
 *                 
 * @example        <b>Example:</b>
 *                 var a = JKIL.uri.getQueryParameters (); // returns {secondParam: "true", firstParam: "12"} for www.myURI.net?firstParam=12&secondParam=true
 * 
 * @returns        {hash}    Returns a hash of URI parameters/values.
 * 
 * @see            JKIL.uri.getQueryParametersOrderly ()
 */
JKIL.uri.getQueryParameters = function () {
	var _s_parameters = decodeURIComponent(window.location.search.substr(1));
	var _a_parameters = null;
	var _a_tmp = null;
	var _h_parameters = {};

	if ( _s_parameters != null && _s_parameters != "" ) {
		_a_parameters = _s_parameters.split("&");
		
		for (var i=0; i<_a_parameters.length; ++i) {
			_a_tmp = _a_parameters[i].split("=");
			_h_parameters[_a_tmp[0]] = _a_tmp[1];
		}
	}

	return _h_parameters;
};