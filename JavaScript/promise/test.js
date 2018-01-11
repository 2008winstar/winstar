const listP = [Promise.resolve(1), Promise.resolve(2)];
const identityValue = Promise.resolve(0);

const result = listP.reduce((acc, promise) => {
    return acc.then(sum => promise.then(innerVal => sum + innerVal));
}, identityValue);

console.log(result);