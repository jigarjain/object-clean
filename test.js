var cleaner = require('./index');
var assert  = require('chai').assert;

describe('objClean', function () {
    it('Should remove age, hobbies, 3rd obj from experience array & years from experience[1] obj', function () {
        var testObj = {
            name: 'Jigar Jain',
            gender: 'Male',
            age: null,
            hobbies: [],
            experience: [
                {
                    company: 'XYZ',
                    years: 1
                },
                {
                    company: 'ABC',
                    years: null
                },
                {}
            ],
            hasPets: false
        };
        var res = cleaner(testObj);
        assert.typeOf(res.age, 'undefined', 'obj does not have age key anymore');
        assert.typeOf(res.hobbies, 'undefined', 'obj does not have hobbies key anymore');
        assert.lengthOf(res.experience, 2, 'obj.experience has only 2 elements');
        assert.typeOf(res.hasPets, 'undefined', 'obj does not have hasPets key anymore');
    });

    it('Should remove age & experience[1].years only', function () {
        var testObj = {
            name: 'Jigar Jain',
            gender: 'Male',
            age: null,
            hobbies: [],
            experience: [
                {
                    company: 'XYZ',
                    years: 1
                },
                {
                    company: 'ABC',
                    years: null
                },
                {}
            ],
            hasPets: false
        };
        var res = cleaner(testObj, [null]);
        assert.typeOf(res.age, 'undefined', 'obj does not have age key anymore');
        assert.lengthOf(res.hobbies, 0, 'obj still has hobbies key');
        assert.lengthOf(res.experience, 3, 'obj.experience has 3 elements');
        assert.typeOf(res.hasPets, 'boolean', 'obj still has hasPets key');
    });
});
