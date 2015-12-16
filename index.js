'use strict';

/**
 * Will delete the keys of the object which are set to null, undefined or empty string
 *
 * @param  {Object/Array} obj    An object or array which needs to be cleaned
 * @param  {Array} removeTypes   Array of values and/or types which needs to be discarded (OPTIONAL)
 * @return {Object/Array}
 */

function objCleaner(obj, removeTypes) {
    var defaultRemoveTypes = [null, 'undefined', false, '', [], {}];
    var key;

    function allowEmptyObject() {
        var i;
        for (i = 0; i < removeTypes.length; i++) {
            if (removeTypes[i] instanceof Object && Object.keys(removeTypes[i]).length === 0) {
                return false;
            }
        }

        return true;
    }

    function allowEmptyArray() {
        var i;
        for (i = 0; i < removeTypes.length; i++) {
            if (Array.isArray(removeTypes[i]) && removeTypes[i].length === 0) {
                return false;
            }
        }

        return true;
    }

    if (!(obj instanceof Object || Array.isArray(obj))) {
        throw new Error('Argument must be an object or Array');
    }

    if (typeof removeTypes === 'undefined') {
        removeTypes = defaultRemoveTypes;
    }

    for (key in obj) {
        if (typeof obj[key] === 'object') {
            if (obj[key] && Object.keys(obj[key]).length) {
                obj[key] = objCleaner(obj[key], removeTypes);
            } else {
                obj[key] = allowEmptyObject() ? obj[key] : null;
            }
        }

        if (Array.isArray(obj[key])) {
            if (obj[key] && obj[key].length) {
                obj[key] = objCleaner(obj[key], removeTypes);
            } else {
                obj[key] = allowEmptyArray() ? obj[key] : null;
            }
        }

        if (obj instanceof Object && obj.hasOwnProperty(key)) {
            removeTypes.forEach(function (typeVal) {
                if (typeof obj[key] === typeVal || obj[key] === typeVal) {
                    delete obj[key];
                }
            });
        }

        if (Array.isArray(obj) && obj.length) {
            removeTypes.forEach(function (typeVal, index) {
                if (typeof obj[key] === typeVal || obj[key] === typeVal) {
                    obj.splice(key, 1);
                }
            });
        }
    }

    return obj;
}


module.exports = objCleaner;
