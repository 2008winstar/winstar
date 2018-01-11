console.log(Object.prototype.toString());

// a method returning the default iterator for an object. Used by for...of, yield*, the spread operator,
// destructuring assignment, etc.
Symbol.iterator

// a method for determining if a constructor object recognizes an object as its instance.
// Used by the instanceof operator
Symbol.hasInstance


// a string value used for the default description of an object, which is consulted by the
// Object.prototype.toString() method
Symbol.toStringTag


class A {
    get [Symbol.toStringTag]() {
        return 'A'
    }
}
Object.prototype.toString.call('');     // "[object String]"
Object.prototype.toString.call({});     // "[object Object]"
Object.prototype.toString.call(new A);  // "[object A]"

console.log(Symbol.hasInstance);