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
         * @description    A namespace for utility methods.<br />
         */
        JKIL.utilities = {
        		
        	/**
             * @methodOf       JKIL.utilities
             * 
             * @description    TODO Checks whether the given value is a string litteral or a <code>String</code> object (<i>e&#46;g&#46;</i> "a string" or <code>new String( "a string" )</code>).<br />
             * 
             * @example        TODO <b>Syntax:</b>
             *                 TODO JKIL.types.isStringObjectOrLitteral ( pm_value )
             * 
             * @param          TODO {mixed}      pm_value    The value whose type is to be checked.
             * 
             * @returns        TODO {boolean}    Returns <code>true</code> if the given value is a string litteral or a <code>String</code> object, <code>false</code> otherwise.
             * 
             * @requires       TODO JKIL.types.getClass ()
             * 
             * @see            TODO JKIL.types.isString()
             * 
             * https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest
             * https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest
             * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#open%28%29
        	 */
        	Ajax: function () {
        		var _o_xhr = null;
        		var _s_method = "GET";
        		var _s_url = "";
        		var _b_async = true;
        		var _s_user = "";
        		var _s_password = "";
        		var _s_mimetype = "text/xml";
        		
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
        		
        		
        		
        		/**
        		 * 
        		 */
        		var setMethod = function ( ps_method ) {
        			if ( ps_method.match(/^(GET|POST|PUT|DELETE)$/i) ) { // TODO see other method names
        				this._s_method = ps_method;
        			} else {
        				throw new Error("TODO");
        			}
        		};
        		
        		/**
        		 * 
        		 */
        		var setURL = function ( ps_url ) {
        			this._s_url = ps_method;
        		};
        		
        		/**
        		 * 
        		 */
        		var setAsync = function ( pb_async ) {
        			if (typeof pb_async === "boolean") {
        				this._b_async = pb_async;
        			} else {
        				throw new Error("TODO");
        			}
        		};
        		
        		/**
        		 * 
        		 */
        		var setUser = function ( ps_user ) {
        			this._s_user = ps_user;
        		};
        		
        		/**
        		 * 
        		 */
        		var setPassword = function ( ps_password ) {
        			this._s_password = ps_password;
        		};
        		
        		/**
        		 * 
        		 */
        		var open = function ( ps_method, ps_url, pb_async, ps_user, ps_password ) {
        			if (ps_method === undefined) { ps_method = this._s_method; }
        			if (ps_url === undefined) { ps_method = this._s_method; }
        			if (pb_async === undefined) { ps_method = this._s_method; }
        			if (ps_method === undefined) { ps_method = this._s_method; }
        			if (ps_method === undefined) { ps_method = this._s_method; }
        			
        			this._o_xhr.open ( ps_method, ps_url, pb_async, ps_user, ps_password );
        		};
        		
        		
        	}
        };
    };
    
    /*
     * TODO
     * 
     * Voir s'il est possible de packager JKIL et d'empêcher qu'on y accède de l'exterieur.
     */
    ( function () {
        
        console.log("la");
        
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

