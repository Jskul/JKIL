;

/**
 * @methodOf       JKIL.objects
 * 
 * @description    Achieves prototypal inheritance as suggested by Douglas Crockford and returns an empty new object that inherits from <code>po_object</code>.<br />
 * 
 * @example        <b>Syntax:</b>
 *                 JKIL.objects.create ()
 *
 * @returns        {object}    Returns a new empty object.
 * 
 * @throws         TODO
 * 
 * @see            http://javascript.crockford.com/prototypal.html
 */
JKIL.objects.create = function ( po_object ) {
	if (typeof po_object !== "object" || po_object === null) {
		throw new Error("TODO JKIL.objects.create object expected"); // TODO
	}
	
    function F() {}
    F.prototype = po_object;
    return new F();
};