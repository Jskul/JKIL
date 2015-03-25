;
/**
 * TODO
 * 
 * @version		TODO
 */
//( function ( undefined ) {
//	
//	/*
//	 * Private members.
//	 */
//	var
//	
//	/**
//	 * @namespace	JKIL
//	 * 
//	 * @description	A private property which holds the JKIL namespace itself.<br />
//	 * 				It is referenced in the global scope after <code>JKIL.js</code> has been loaded.<br />
//	 * 
//	 * @type		null|hash
//	 * 
//	 * @since		TODO
//	 * @author		TODO
//	 */
//	JKIL = null,
//	
//	/**
//	 * @fieldOf		JKIL
//	 * 
//	 * @private
//	 * 
//	 * @description	A private property referencing the JKIL context (namely <code>window</code>).<br />
//	 * 
//	 * @type		Object
//	 * 
//	 * @since		TODO
//	 * @author		TODO
//	 */
//	_context = window,
//	
//	
//	/**
//	 * @fieldOf		JKIL
//	 * 
//	 * @private
//	 * 
//	 * @description	A private property that keeps the native name ("JKIL") of the plugin.<br />
//	 * 
//	 * @type		string
//	 * 
//	 * @since		TODO
//	 * @author		TODO
//	 */
//	_nativeName = "JKIL",
//	
//	/**
//	 * @fieldOf		JKIL
//	 * 
//	 * @private
//	 * 
//	 * @description	A private property indicating the name of the namespace.<br />
//	 * 				Without alternate name, it matches <code>_nativeName</code> (that is, "JKIL"), TODO>>>otherwise its value is the alternate name given as first argument of <code>JKIL.js</code> outermost anonymous function<<<TODO.<br />
//	 * 
//	 * @type		null|string
//	 * 
//	 * @since		TODO
//	 * @author		TODO
//	 */
//	_namespaceName = "JKIL", // TODO
//
//	/**
//	 * @fieldOf		JKIL
//	 * 
//	 * @private
//	 * 
//	 * @description	TODO
//	 * 
//	 * @type		array
//	 * 
//	 * @since		TODO
//	 * @author		TODO
//	 */
//	_aliases = [],
//	
//	/**
//	 * @fieldOf		JKIL
//	 * 
//	 * @private
//	 * 
//	 * @description	TODO
//	 * 
//	 * @type		hash
//	 * 
//	 * @since		TODO
//	 * @author		TODO
//	 */
//	_manifest = {
//		test: {a: false, b: false, c: false}
//	},
//	
//	/**
//	 * @fieldOf		JKIL
//	 * 
//	 * @private
//	 * 
//	 * @description	A private property which keeps JKIL error codes and messages.<br />
//	 * 
//	 * @type		hash
//	 * 
//	 * @since		TODO
//	 * @author		TODO
//	 */
//	_errors = "TODO",
//	
//	/**
//	 * @methodOf	JKIL
//	 * 
//	 * @private
//	 * 
//	 * @description	A private method that initializes the namespace itself.<br />
//	 * 
//	 * @returns		{void}
//	 * 
//	 * @since		TODO
//	 * @author		TODO
//	 */
//	_initNamespace = function () {
//		JKIL.configuration = {};
//		JKIL.types = {};
//		JKIL.test = {};
//		JKIL.test.a = 123;
//		JKIL.utilities = {};
//		return JKIL;
//	};
//	
//	/*
//	 * TODO
//	 * 
//	 * Voir s'il est possible de packager JKIL et d'empêcher qu'on y accède de l'exterieur.
//	 */
//	( function () {
//		
//		console.log("la");
//		
//		if ( JKIL === null ) {
//			
//			/*
//			 * Abort if the namespace name already exists in the global scope.
//			 */
//			if ( _context[_namespaceName] ) {
//				throw new Error ("TODO");
//			}
//			
//			/*
//			 * Create namespace root in the global scope and reference it in the private JKIL property.
//			 */
//			_context[_namespaceName] = {};
//			JKIL = _context[_namespaceName];
//			
//			/*
//			 * Initialize the JKIL namespace with default members.
//			 */
//			_initNamespace();
//			
//		}
//	} ) ();
//
//} )();




/**
 * @namespace	A namespace for methods, objects and constructors.<br />
 * 
 * @description	A library of methods, objects and constructors.<br />
 */
JKIL = {};

/**
 * @memberof	JKIL
 * @namespace
 * 
 * @description	A namespace for methods related to sorting.<br />
 */
JKIL.sortings = {};

/**
 * @memberof	JKIL.sortings
 * @namespace
 * 
 * @description	A namespace for methods related to sorting of arrays.<br />
 */
JKIL.sortings.array = {};

/**
 * @memberof	JKIL
 * @namespace
 * 
 * @description	A namespace for comparison methods.<br />
 */
JKIL.comparators = {};

