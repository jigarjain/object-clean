# object-clean

Cleans an object or an array based on the rules(optional) provided


### Version
0.1.0


### Installation

```sh
$ npm i object-clean --save
```

### Example 1 (Default options)
```js
var objectClean = require('object-clean');

var data = {
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
}

var cleanedData = objectClean(data);
console.log(cleanedData);
// {
//    name: 'Jigar Jain',
//    gender: 'Male',
//    experience: [
//       {
//            company: 'XYZ',
//            years: 1
//        },
//        {
//            company: 'ABC'
//        }
//    ]
// }
```

### Example 2 (Passing custom rules)
```js
var objectClean = require('object-clean');

var data = {
    name: 'Jigar Jain',
    gender: 'Male',
    pets: null,
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
}

var res = objectClean(data, [null, false]);

console.log(res);

// {
//     name: 'Jigar Jain',
//     gender: 'Male',
//     hobbies: [],
//     experience: [
//         {
//             company: 'XYZ',
//             years: 1
//         },
//         {
//             company: 'ABC'
//         },
//         {}
//     ]
// }
```
### Test
```sh
$ git clone git@github.com:jigarjain/object-clean.git
$ cd object-clean/
$ npm i
$ npm test
```
### ToDo:
- Cloning the input data & working on it instead of directly modifying it


### Contribute
Want to contribute? Great! Submit a pull request with a new feature, bug fix or enahncement. Make sure to run `grunt eslint` & `grunt mochaTest` before submitting any pull request

License
----
MIT