;
/**
 * TODO
 * 
 * @version        TODO
 */
( function ( undefined ) {
    
    /*
     * Private members.
     */
    var
    
    /**
     * @namespace      JKIL
     * 
     * @description    A private property which holds the JKIL namespace itself.<br />
     *                 It is referenced in the global scope after <code>JKIL.js</code> has been loaded.<br />
     * 
     * @type           null|hash
     * 
     * @since          TODO
     * @author         TODO
     */
    JKIL = null,
    
    /**
     * @fieldOf        JKIL
     * 
     * @private
     * 
     * @description    A private property referencing the JKIL context (namely <code>window</code>).<br />
     * 
     * @type           Object
     * 
     * @since          TODO
     * @author         TODO
     */
    _context = window,
    
    
    /**
     * @fieldOf        JKIL
     * 
     * @private
     * 
     * @description    A private property that keeps the native name ("JKIL") of the plugin.<br />
     * 
     * @type           string
     * 
     * @since          TODO
     * @author         TODO
     */
    _nativeName = "JKIL",
    
    /**
     * @fieldOf        JKIL
     * 
     * @private
     * 
     * @description    A private property indicating the name of the namespace.<br />
     *                 Without alternate name, it matches <code>_nativeName</code> (that is, "JKIL"), TODO>>>otherwise its value is the alternate name given as first argument of <code>JKIL.js</code> outermost anonymous function<<<TODO.<br />
     * 
     * @type           null|string
     * 
     * @since          TODO
     * @author         TODO
     */
    _namespaceName = "JKIL", // TODO

    /**
     * @fieldOf        JKIL
     * 
     * @private
     * 
     * @description    TODO
     * 
     * @type           array
     * 
     * @since          TODO
     * @author         TODO
     */
    _aliases = [],
    
    /**
     * @fieldOf        JKIL
     * 
     * @private
     * 
     * @description    TODO
     * 
     * @type           hash
     * 
     * @since          TODO
     * @author         TODO
     */
    _manifest = {
        test: {a: false, b: false, c: false}
    },
    
    /**
     * @fieldOf        JKIL
     * 
     * @private
     * 
     * @description    A private property which keeps JKIL error codes and messages.<br />
     * 
     * @type           hash
     * 
     * @since          TODO
     * @author         TODO
     */
    _errors = "TODO",
    
    /**
     * @methodOf    JKIL
     * 
     * @private
     * 
     * @description    A private method that initializes the namespace itself.<br />
     * 
     * @returns        {void}
     * 
     * @since          TODO
     * @author         TODO
     */
    _initNamespace = function () {
    	
        /**
         * @memberof       JKIL
         * @namespace
         * 
         * @description    A namespace for configuration properties and methods.<br />
         */
        JKIL.configuration = {};
        
        /**
         * @memberof       JKIL
         * @namespace
         * 
         * @description    A namespace for methods related to types.<br />
         */
        JKIL.types = {
                
                
            /**
             * @methodOf       JKIL.types
             * 
             * @description    Gets the value of the hidden [[Class]] property for the given value.<br />
             * 
             * @example        <b>Syntax:</b>
             *                 JKIL.types.getClass ( pm_value )
             * 
             * @param          {mixed}     pm_value    The value whose "class" is to be determined.
             * 
             * @returns        {string}    A string describing the [[Class]] property (for instance "Object", "Array", "String", "Boolean" and so on).<br />
             *                             Notice: <code>window</code> returns "Window" even for Google Chrome.
             * 
             * @see            TODO récupérer références
             */
            getClass: function ( pm_value ) {
                var _s_class = Object.prototype.toString.call ( pm_value ).match( /^\[object\s(.*)\]$/ )[1];
                
//                // TODO statuer sur l'utilisé de ça et sur la façon dont ça doit fonctionner
//                //if ( ph_options.override === true ) {
//                    var s_constructor = "";
//                    if ( /*JSS.isEmpty ( pm_value ) === false && plante sur constructeurs vides */ typeof pm_value !== "undefined" && pm_value !== null && typeof pm_value.constructor === "function" ) { // TODO check
//                        s_constructor = pm_value.constructor.toString().match(/^function\s(.*)\(.*/)[1];
//                    } else if ( JSS.isPlainObject ( pm_value ) === true ) {
//                        s_constructor = pm_value.constructor.toString().match(/^\[object\s(.*)\]$/)[1];
//                    }
//                //}
                
                switch ( _s_class ) {
                    // Google Chrome returns "global" instead of "Window".
                    case "global":
                        _s_class = "Window";
                    break;
                }
                
                return _s_class;
            },
            
            /**
             * @methodOf       JKIL.types
             * 
             * @description    Checks whether the given value is an array.<br />
             * 
             * @example        <b>Syntax:</b>
             *                 JKIL.types.isArray ( pm_value )
             * 
             * @param          {mixed}      pm_value    The value whose type is to be checked.
             * 
             * @returns        {boolean}    Returns <code>true</code> if the given value is an array, <code>false</code> otherwise.
             * 
             * @requires       JKIL.types.getClass ()
             * 
             * @see            TODO récupérer références
             */
            isArray: function ( pm_value ) {
                return JKIL.types.getClass ( pm_value ) === "Array";
            },
            
            /**
             * @methodOf       JKIL.types
             * 
             * @description    Checks whether the given value is an object (can be <code>null</code>).<br />
             * 
             * @example        <b>Syntax:</b>
             *                 JKIL.types.isObject ( pm_value )
             * 
             * @param          {mixed}      pm_value    The value whose type is to be checked.
             * 
             * @returns        {boolean}    Returns <code>true</code> if the given value is an object or <code>null</code>, <code>false</code> otherwise.
             */
            isObject: function ( pm_value ) {
                return typeof pm_value === "object";
            },
            
            /**
             * @methodOf       JKIL.types
             * 
             * @description    Checks whether the given value is a plain object (cannot be <code>null</code>).<br />
             * 
             * @example        <b>Syntax:</b>
             *                 JKIL.types.isPlainObject ( pm_value )
             * 
             * @param          {mixed}      pm_value    The value whose type is to be checked.
             * 
             * @returns        {boolean}    Returns <code>true</code> if the given value is an object and is <strong>not</strong> <code>null</code>, <code>false</code> otherwise.
             */
            isPlainObject: function ( pm_value ) {
                return typeof pm_value === "object" && pm_value !== null;
            },
    
            /**
             * @methodOf       JKIL.types
             * 
             * @description    Checks whether the given value is a string litteral, a <code>String</code> object, or either a string litteral or a <code>String</code> object.<br />
             * 
             * @example        <b>Syntax:</b>
             *                 JKIL.types.isString ( pm_value[, ph_options] )
             * 
             * @example        <b>Example 1 - Synonym of JKIL.types.isStringLitteral(): </b>
             *                 var v = "a string";
             *                 var b = JKIL.types.isStringLitteral ( v, {litteral: true, object: false} ); // true
             * 
             * @example        <b>Example 2 - Synonym of JKIL.types.isStringObject(): </b>
             *                 var v = new String("a string");
             *                 var b = JKIL.types.isStringLitteral ( v, {litteral: false, object: true} ); // true
             * 
             * @example        <b>Example 3 - Synonym of JKIL.types.isStringObjectOrLitteral(): </b>
             *                 var v1 = "a string";
             *                 var b = JKIL.types.isStringLitteral ( v1, {litteral: true, object: true} ); // true
             *                 var v2 = new String("a string");
             *                 var b = JKIL.types.isStringLitteral ( v2, {litteral: true, object: true} ); // true
             * 
             * @param          {mixed}      pm_value        The value whose type is to be checked.<br /><br />
             * 
             * @param          {hash}       [ph_options]    A hash of options:<br /><br />
             * 
             * @param          {boolean}    [ph_options.litteral=true]  If <code>true</code>, the method returns <code>true</code> for string litterals. <code>ph_options.litteral</code> and <code>ph_options.object</code> cannot be both <code>false</code>.<br /><br />
             * @param          {boolean}    [ph_options.object=true]    If <code>true</code>, the method returns <code>true</code> for <code>String</code> objects. <code>ph_options.litteral</code> and <code>ph_options.object</code> cannot be both <code>false</code>.
             * 
             * @returns        {boolean}    Returns <code>true</code> if the given value is strictly a string litteral, or strictly a <code>String</code> object, or either a string litteral or a <code>String</code> object. Returns <code>false</code> otherwise.
             * 
             * @requires       JKIL.types.getClass()
             * 
             * @see            JKIL.types.isStringLitteral()
             * @see            JKIL.types.isStringObject()
             * @see            JKIL.types.isStringObjectOrLitteral()
             */
            isString: function ( pm_value, ph_options ) {
                if (typeof ph_options !== "object" || ph_options === null) {ph_options = {};}
                if (typeof ph_options.litteral !== "boolean") {ph_options.litteral = true;}
                if (typeof ph_options.object !== "boolean") {ph_options.object = true;}
                if (ph_options.litteral === false && ph_options.object === false ) {
                    ph_options.litteral = true;
                    ph_options.object = true;
                }

                return     ( ph_options.litteral === true && typeof pm_value === "string" )
                        || ( ph_options.object === true && typeof pm_value !== "string" && JKIL.types.getClass ( pm_value ) === "String" );
            },
            
            /**
             * @methodOf       JKIL.types
             * 
             * @description    Checks whether the given value is a string litteral (<i>e&#46;g&#46;</i> "a string").<br />
             * 
             * @example        <b>Syntax:</b>
             *                 JKIL.types.isStringLitteral ( pm_value )
             * 
             * @param          {mixed}      pm_value    The value whose type is to be checked.
             * 
             * @returns        {boolean}    Returns <code>true</code> if the given value is a string litteral, <code>false</code> otherwise.
             * 
             * @see            JKIL.types.isString()
             */
            isStringLitteral: function ( pm_value ) {
                return typeof pm_value === "string";
            },
            
            /**
             * @methodOf       JKIL.types
             * 
             * @description    Checks whether the given value is a <code>String</code> object (<i>e&#46;g&#46;</i> <code>new String( "a string" )</code>).<br />
             * 
             * @example        <b>Syntax:</b>
             *                 JKIL.types.isStringObject ( pm_value )
             * 
             * @param          {mixed}      pm_value    The value whose type is to be checked.
             * 
             * @returns        {boolean}    Returns <code>true</code> if the given value is a <code>String</code> object, <code>false</code> otherwise.
             * 
             * @requires       JKIL.types.getClass ()
             * 
             * @see            JKIL.types.isString()
             */
            isStringObject: function ( pm_value ) {
                return typeof pm_value !== "string" && JKIL.types.getClass ( pm_value ) === "String";
            },
            
            /**
             * @methodOf       JKIL.types
             * 
             * @description    Checks whether the given value is a string litteral or a <code>String</code> object (<i>e&#46;g&#46;</i> "a string" or <code>new String( "a string" )</code>).<br />
             * 
             * @example        <b>Syntax:</b>
             *                 JKIL.types.isStringObjectOrLitteral ( pm_value )
             * 
             * @param          {mixed}      pm_value    The value whose type is to be checked.
             * 
             * @returns        {boolean}    Returns <code>true</code> if the given value is a string litteral or a <code>String</code> object, <code>false</code> otherwise.
             * 
             * @requires       JKIL.types.getClass ()
             * 
             * @see            JKIL.types.isString()
             */
            isStringObjectOrLitteral: function ( pm_value ) {
                return typeof pm_value === "string" || JKIL.types.getClass ( pm_value ) === "String";
            }
                
                
        };

        /**
         * @memberof       JKIL
         * @namespace
         * 
         * @description    A namespace for utility methods and constructors.<br />
         */
        JKIL.utilities = {
        		
        	/**
             * @memberOf       JKIL.utilities
             * @class
             * 
             * @description    A JKIL&#46;utilities&#46;Ajax object constructor.<br />
             * 
             * @example        <b>Syntax:</b>
             *                 new JKIL.utilities.Ajax ()
             * 
             * @example        <b>Example:</b>
             *                 var ajax = new JKIL.utilities.Ajax ();
             *                 
             * @see            JKIL.utilities.getXHR()
             * 
             * @see            https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest
             * @see            https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest
             * @see            https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#open%28%29
             * 
             * @see            http://openclassrooms.com/courses/ajax-et-l-echange-de-donnees-en-javascript
             * @see            http://siddh.developpez.com/articles/ajax/
             * @see            http://api.jquery.com/jquery.ajax/
             * @see            http://stackoverflow.com/questions/3825581/does-an-http-status-code-of-0-have-any-meaning/26451773#26451773
             * @see            http://www.w3.org/TR/XMLHttpRequest/#the-status-attribute
             * @see            http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
        	 */
        	Ajax: function () {
        		/**
	             * @memberOf       JKIL.utilities.Ajax
	             * @private
	             * 
	             * @description    Holds a <code>XMLHttpRequest</code> / <code>ActiveXObject</code> XHR object.<br />
	             * 
	             * @type           XMLHttpRequest|ActiveXObject|null
        		 */
        		var _o_xhr = null;
        		
        		/**
	             * @memberOf       JKIL.utilities.Ajax
	             * @private
	             * 
	             * @description    Holds exposable XHR settings and custom settings.<br />
	             *                 TODO give settings description.<br />
	             * 
	             * @type           hash
        		 */
        		var _h_exposableSettings = {
        			/*
        			 * XMLHttpRequest.open() parameters.
        			 */
        			method: "GET",
        			url: "",
        			async: true,
        			user: "",
        			password: "",
        			/*
        			 * XMLHttpRequest.overrideMimeType() parameters.
        			 */
        			mimetype: "text/xml",
        			/*
        			 * XMLHttpRequest properties.
        			 */
        			onreadystatechange: null, // TODO
        			responsetype: "", // Is an enumerated value that defines the response type. DOMString is the default value. Note: Starting with Gecko 11.0 (Firefox 11.0 / Thunderbird 11.0 / SeaMonkey 2.8), as well as WebKit build 528, these browsers no longer let you use the responseType attribute when performing synchronous requests. Attempting to do so throws an NS_ERROR_DOM_INVALID_ACCESS_ERR exception. This change has been proposed to the W3C for standardization.
        			timeout: 0, // Is an unsigned long representing the number of milliseconds a request can take before automatically being terminated. A value of 0 (which is the default) means there is no timeout. Note: You may not use a timeout for synchronous requests with an owning window.
        			//ontimeout: null, // Is an EventHandler that is called whenever the request times out.
        			withcredentials: false, // Is a Boolean that indicates whether or not cross-site Access-Control requests should be made using credentials such as cookies or authorization headers. The default is false. Note: This never affects same-site requests. Note: Starting with Gecko 11.0 (Firefox 11.0 / Thunderbird 11.0 / SeaMonkey 2.8), Gecko no longer lets you use the withCredentials attribute when performing synchronous requests. Attempting to do so throws an NS_ERROR_DOM_INVALID_ACCESS_ERR exception.
        			/*
        			 * Custom properties.
        			 */
        			data: null,
        			onbeforesend: function ( ph_xhr ) {},
        			onsuccess: function ( ph_xhr ) {},
        			onerror: function ( ph_xhr ) {},
        			oncomplete: function ( ph_xhr ) {}
        		};
        		
        		/**
	             * @memberOf       JKIL.utilities.Ajax
	             * @private
	             * 
	             * @description    Holds exposable XHR methods.<br />
	             *                 TODO give settings description.<br />
	             * 
	             * @type           hash
        		 */
        		var _h_exposableMethods = {
        				
        			readyState: function() {
                		return _o_xhr.readyState;
                	},
                	
                	response: function() {
            			return _o_xhr.response;
            		},
            		
            		responseText: function() {
            			return _o_xhr.responseText;
            		},
            		
            		responseXML: function() {
            			return _o_xhr.responseXML;
            		},
            		
            		status: function() {
            			return _o_xhr.status;
            		},
            		
            		statusText: function() {
            			return _o_xhr.statusText;
            		},
            		
            		upload: function() {
            			return _o_xhr.upload;
            		}
            	};

        		/*
        		 * Instanciate the _o_xhr private property.
        		 */
        		if ( window.XMLHttpRequest || window.ActiveXObject ) {        			
        			if ( window.XMLHttpRequest ) {
        				_o_xhr = new XMLHttpRequest();
        				// IE
        			} else if ( window.ActiveXObject ) { 
        				try {
        					_o_xhr = new ActiveXObject( "Msxml2.XMLHTTP" );
        				} catch (e) {
        					_o_xhr = new ActiveXObject( "Microsoft.XMLHTTP" );
        				}
        			}
        		} else {
        			throw new Error("TODO JKIL.utilities.Ajax XMLHttpRequest and ActiveXObject not supported"); // TODO
        			return;
        		}
        		
        		/**
	             * @methodOf       JKIL.utilities.Ajax
	             * @private
	             * 
	             * @description    Merges given settings and exposable settings.<br />
	             *                 TODO be more specific.<br />
	             * 
	             * @example        <b>Syntax:</b>
	             *                 JKIL.utilities.Ajax._mergeSettings ( ph_settings )
	             *                 
	             * @param          {hash}    ph_settings    A hash of settings.
	             * 
	             * @returns        {void}
        		 */
        		var _mergeSettings = function ( ph_settings ) {
        			for ( k in ph_settings ) {
        				if ( _h_exposableSettings.hasOwnProperty( k ) ) {
        					
        					// Block invalid inputs.
        					switch ( k ) {
        						case "method":
        							if (   typeof ph_settings[k] !== "string"
        								|| typeof ph_settings[k] === "string" && ph_settings[k].match(/^(GET|POST|PUT|DELETE)$/i) === null) { // TODO see other method names
        								throw new Error("TODO JKIL.utilities.Ajax._mergeSettings method must be a string and match /^(GET|POST|PUT|DELETE)$/i"); // TODO
        							}
        						break;
        						case "url":
        							if (   typeof ph_settings[k] !== "string"
        								|| typeof ph_settings[k] === "string" && ph_settings[k].replace(/\s+/g, "").length === 0 ) {
        		                    	throw new Error("TODO JKIL.utilities.Ajax._mergeSettings url must be a non empty string"); // TODO
        		                    }
        						break;
        						case "async":
        							if ( typeof ph_settings[k] !== "boolean" ) {
        		                    	throw new Error("TODO JKIL.utilities.Ajax._mergeSettings async must be a boolean"); // TODO
        		                    }
        						break;
        						case "user":
        							if ( typeof ph_settings[k] !== "string" ) {
        		                    	throw new Error("TODO JKIL.utilities.Ajax._mergeSettings user must be a string"); // TODO
        		                    }
        						break;
        						case "password":
        							if ( typeof ph_settings[k] !== "string" ) {
        		                    	throw new Error("TODO JKIL.utilities.Ajax._mergeSettings password must be a string"); // TODO
        		                    }
        						break;
        						case "mimetype":
        							if ( typeof ph_settings[k] !== "string" /* TODO check valid mimetypes*/) {
        		                    	throw new Error("TODO JKIL.utilities.Ajax._mergeSettings mimetype must be a string"); // TODO
        		                    }
        						break;
        						case "onreadystatechange":
        							if ( typeof ph_settings[k] !== "function" && ph_settings[k] !== null ) {
        		                    	throw new Error("TODO JKIL.utilities.Ajax._mergeSettings onreadystatechange must be a function or null"); // TODO
        		                    }
        						break;
        						case "responsetype":
        							if (   typeof ph_settings[k] !== "string"
        								|| typeof ph_settings[k] === "string" && ph_settings[k].match(/^(|arraybuffer|blob|document|json|text)$/i) === null) {
        		                    	throw new Error("TODO JKIL.utilities.Ajax._mergeSettings responsetype must be a string and match /^(|arraybuffer|blob|document|json|text)$/i"); // TODO
        		                    }
        						break;
        						case "timeout":
        							if (   typeof ph_settings[k] !== "number"
        								|| typeof ph_settings[k] === "number" && ph_settings[k] < 0) {
        		                    	throw new Error("TODO JKIL.utilities.Ajax._mergeSettings timeout must be a positive number"); // TODO
        		                    }
        						break;
        						case "ontimeout":
        							if ( typeof ph_settings[k] !== "function" ) {
        		                    	throw new Error("TODO JKIL.utilities.Ajax._mergeSettings ontimeout must be a function"); // TODO
        		                    }
        						break;
        						case "withcredentials":
        							if ( typeof ph_settings[k] !== "boolean" ) {
        		                    	throw new Error("TODO JKIL.utilities.Ajax._mergeSettings withcredentials must be a boolean"); // TODO
        		                    }
        						break;
        						case "data":
        							if ( typeof ph_settings[k] !== "object" ) {
        		                    	throw new Error("TODO JKIL.utilities.Ajax._mergeSettings data must be an object or null"); // TODO
        		                    }
        						break;
        						case "onbeforesend":
        							if ( typeof ph_settings[k] !== "function") {
        		                    	throw new Error("TODO JKIL.utilities.Ajax._mergeSettings onbeforesend must be a function"); // TODO
        		                    }
        						break;
        						case "onsuccess":
        							if ( typeof ph_settings[k] !== "function") {
        		                    	throw new Error("TODO JKIL.utilities.Ajax._mergeSettings onsuccess must be a function"); // TODO
        		                    }
        						break;
        						case "onerror":
        							if ( typeof ph_settings[k] !== "function") {
        		                    	throw new Error("TODO JKIL.utilities.Ajax._mergeSettings onerror must be a function"); // TODO
        		                    }
        						break;
        						case "oncomplete":
        							if ( typeof ph_settings[k] !== "function") {
        		                    	throw new Error("TODO JKIL.utilities.Ajax._mergeSettings oncomplete must be a function"); // TODO
        		                    }
        						break;
        						
        					}
        					
        					// Process settings that need to be trimmed.
							switch ( k ) {
								case "url":
								case "user":
								case "password":
									ph_settings[k] = ph_settings[k].replace(/^\s*([^\s]+)\s*$/g, "$1");
								break;
							}
							
        					// To uppercase.
							switch ( k ) {
								case "method":
									ph_settings[k] = ph_settings[k].toUpperCase();
								break;
							}
							
							/* 
							 * XMLHttpRequest.responseType
							 * 
							 * Note: Starting with Gecko 11.0 (Firefox 11.0 / Thunderbird 11.0 / SeaMonkey 2.8),
							 * as well as WebKit build 528, these browsers no longer let you use the responseType attribute when performing synchronous requests.
							 * Attempting to do so throws an NS_ERROR_DOM_INVALID_ACCESS_ERR exception. This change has been proposed to the W3C for standardization.
							 */
							
							/*
							 * TODO do further setting depend processing about here...
							 */
							
							// Assign passed settings to exposable settings.
							_h_exposableSettings[k] = ph_settings[k];
        				}
        			}
        		};

        		/**
	             * @methodOf       JKIL.utilities.Ajax
	             * @private
	             * 
	             * @description    TODO.<br />
	             * 
	             * @example        <b>Syntax:</b>
	             *                 JKIL.utilities.Ajax._setOnReadyStateChange ()
	             * 
	             * @returns        {void}
        		 */
        		var _setOnReadyStateChange = function () {
        			if( _o_xhr.readyState == 4 ){
        				if ( _o_xhr.status == 200 ) {
        					_h_exposableSettings.onsuccess( _h_exposableMethods );
        				} else if ( _o_xhr.status == 0 || _o_xhr.status >= 400 || _o_xhr.status < 600 ) {
        					_h_exposableSettings.onerror( _h_exposableMethods );
        				}
        				
        				_h_exposableSettings.oncomplete( _h_exposableMethods );
        			}
        		};

        		
        		var _mergeParameters = function () {
        			
        			
//        			var _s_params = decodeURIComponent(window.location.search.substr(1));
//        			var _a_params = null;
//        			var _a_tmp = null;
//        			var _h_out = {};
//
//        			if (_s_params != null && _s_params != "") {
//        				_a_params = _s_params.split("&");
//        				
//        				for (var i=0; i<_a_params.length; ++i) {
//        					_a_tmp = _a_params[i].split("=");
//        					_h_out[_a_tmp[0]] = _a_tmp[1];
//        				}
//        			}
        			
        			
        		};
        		
        		
        		/**
	             * @methodOf       JKIL.utilities.Ajax
	             * @public
	             * 
                 * @description    Gets an array of exposable setting names.<br />
                 * 
 	             * @example        <b>Syntax:</b>
	             *                 JKIL.utilities.Ajax.getSettingNames ()
	             * 
	             * @returns        {Array}     Returns a an array of exposable setting names.
        		 */
        		this.getSettingNames = function () {
        			var _a_settingNames = [];
        			
        			for ( k in _h_exposableSettings ) {
        				if ( _h_exposableSettings.hasOwnProperty( k ) ) {
        					_a_settingNames.push( k );
        				}
        			}
        			
        			return _a_settingNames;
        		};

        		/**
	             * @methodOf       JKIL.utilities.Ajax
	             * @public
	             * 
                 * @description    Exposes the exposable setting whose name is given as parameter.<br />
                 * 
 	             * @example        <b>Syntax:</b>
	             *                 JKIL.utilities.Ajax.getSetting ( ps_settingName )
	             *                 
	             * @param          {string}    ps_settingName    A setting name.
	             * 
	             * @returns        {Mixed}     Returns a setting value or <code>undefined</code> if the given setting name does not exist.
        		 */
        		this.getSetting = function ( ps_settingName ) {
        			return _h_exposableSettings[ps_settingName.toLowerCase()];
        		};

        		/**
	             * @methodOf       JKIL.utilities.Ajax
	             * @public
	             * 
                 * @description    Exposes exposable settings.<br />
                 * 
 	             * @example        <b>Syntax:</b>
	             *                 JKIL.utilities.Ajax.getSettings ()
	             * 
	             * @returns        {hash}    Returns a hash of exposable settings.
        		 */
        		this.getSettings = function () {
        			var _h_settings = {};
        			
        			for ( k in _h_exposableSettings ) {
        				if ( _h_exposableSettings.hasOwnProperty( k ) ) {
        					_h_settings[k] = _h_exposableSettings[k];
        				}
        			}
        			
        			return _h_settings;
        		};

        		/**
	             * @methodOf       JKIL.utilities.Ajax
	             * @public
	             * 
	             * @description    Performs a HTTP GET request.<br />
	             * 				   TODO.<br />
        		 */
        		this.GET = function ( ph_settings ) {
                    if (typeof ph_settings !== "object" || ph_settings === null) {ph_settings = {};}
                    ph_settings["method"] = "GET"; // Force to GET

                    _mergeSettings( ph_settings );
                    
                    // TODO apply settings.

        			_o_xhr.open( _h_exposableSettings.method, _h_exposableSettings.url, _h_exposableSettings.async, _h_exposableSettings.user, _h_exposableSettings.password);
        			_o_xhr.onreadystatechange = _h_exposableSettings.onreadystatechange ? function () {return _h_exposableSettings.onreadystatechange( _h_exposableMethods );} : _setOnReadyStateChange;
        			_h_exposableSettings.onbeforesend( _h_exposableMethods );
        			_o_xhr.send( null );
        		};
        		
           		/**
	             * @methodOf       JKIL.utilities.Ajax
	             * @public
	             * 
	             * @description    Performs a HTTP POST request.<br />
	             * 				   TODO.<br />
        		 */
        		this.POST = function ( ph_settings ) {
        			console.log("TODO");
        		};
        		
           		/**
	             * @methodOf       JKIL.utilities.Ajax
	             * @public
	             * 
	             * @description    Performs a custom HTTP request.<br />
	             * 				   TODO.<br />
        		 */
        		this.DO = function ( ph_settings ) {
        			console.log("TODO");
        		};
        		
        		
        		

//        		var _s_mimetype = "text/xml";
        		/*
        		 *Si vous utilisez la méthode POST, vous devez absolument changer le type MIME de la requête avec la méthode setRequestHeader , sinon le serveur ignorera la requête :
        		 *	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        		 *
        		 * ----
        		 *  xhr.open("POST", "handlingData.php", true);
				 *  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                 *  xhr.send("variable1=truc&variable2=bidule");
                 *  
                 * ----
                 * 
                 * Avant de passer des variables, il est important de les protéger pour conserver les caractères spéciaux et les espaces. Pour cela, utilisez la fonction globale encodeURIComponent , comme ceci :
                 * 
                 * var sVar1 = encodeURIComponent("contenu avec des espaces");
                 * var sVar2 = encodeURIComponent("je vois que vous êtes un bon élève... oopa !");
                 * xhr.open("GET", "handlingData.php?variable1=" + sVar1 + "&variable2= " + sVar2, true);
                 * xhr.send(null);
        		 */

        		//var _h_onStatusCode = {}; // TODO implement?
        		//var _h_data = {}; // TODO implement?
        		/*var _h_onReadyState = [ // TODO implement?
        		    function () {console.log( "TODO readyState 0" )},
        		    function () {console.log( "TODO readyState 1" )},
        		    function () {console.log( "TODO readyState 2" )},
        		    function () {console.log( "TODO readyState 3" )},
        		    function () {console.log( "TODO readyState 4" )}
        		];*/
        		
        	},
        	
            /**
             * @methodOf       JKIL.utilities
             * 
             * @description    Gets a <code>XMLHttpRequest</code> / <code>ActiveXObject</code> XHR object allowing the standard use of AJAX methods.<br />
             * 
             * @example        <b>Syntax:</b>
             *                 JKIL.utilities.getXHR ()
             *                 
             * @example        <b>Example:</b>
             *                 var xhr = JKIL.utilities.getXHR ();
             *                 xhr.open("GET", "http://someUrl.net", true);
             *                 xhr.onreadystatechange = function()  {
             *                     // Some code here.
             *                 };
             *                 xhr.send(null);
             * 
             * @returns        {Object|null}    Returns a <code>XMLHttpRequest</code> / <code>ActiveXObject</code> XHR instance or <code>null</code> if the instanciation failed.
             * 
             * @throws         TODO
             * 
             * @see            JKIL.utilities.Ajax()
             */
        	getXHR: function () {
        		var _o_xhr = null;
	    		if ( window.XMLHttpRequest || window.ActiveXObject ) {        			
	    			if ( window.XMLHttpRequest ) {
	    				_o_xhr = new XMLHttpRequest();
	    			// IE
	    			} else if ( window.ActiveXObject ) { 
	    				try {
	    					_o_xhr = new ActiveXObject( "Msxml2.XMLHTTP" );
	    				} catch (e) {
	    					_o_xhr = new ActiveXObject( "Microsoft.XMLHTTP" );
	    				}
	    			}
	    		} else {
	    			throw new Error("TODO JKIL.utilities.getXHR XMLHttpRequest and ActiveXObject not supported"); // TODO
	    		}
	    		
	    		return _o_xhr;
        	}
        };
    };
    
    /*
     * TODO
     * 
     * Voir s'il est possible de packager JKIL et d'empêcher qu'on y accède de l'exterieur.
     */
    ( function () {

        if ( JKIL === null ) {
            
            /*
             * Abort if the namespace name already exists in the global scope.
             */
            if ( _context[_namespaceName] ) {
                throw new Error ("TODO");
            }
            
            /*
             * Create namespace root in the global scope and reference it in the private JKIL property.
             */
            _context[_namespaceName] = {};
            JKIL = _context[_namespaceName];
            
            /*
             * Initialize the JKIL namespace with default members.
             */
            _initNamespace();
            
        }
    } ) ();

} )();




/**
 * @namespace    A namespace for methods, objects and constructors.<br />
 * 
 * @description    A library of methods, objects and constructors.<br />
 */
//JKIL = {};

/**
 * @memberof    JKIL
 * @namespace
 * 
 * @description    A namespace for methods related to sorting.<br />
 */
JKIL.sortings = {};

/**
 * @memberof    JKIL.sortings
 * @namespace
 * 
 * @description    A namespace for methods related to sorting of arrays.<br />
 */
JKIL.sortings.array = {};

/**
 * @memberof    JKIL
 * @namespace
 * 
 * @description    A namespace for comparison methods.<br />
 */
JKIL.comparators = {};

