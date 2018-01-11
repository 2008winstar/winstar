async function waitAndMaybeReject() {
    await new Promise(r => setTimeout(r, 1000));
    const isHeads = Boolean(Math.round(Math.random()));
    console.log(isHeads);
    if (isHeads) {
        return 'yay';
    }
    throw Error('Boo!');
}

async function foo() {
    try {
        let result = await waitAndMaybeReject();
        console.log(result);
    } catch (e) {
        return 'caught';
    }
}

foo();