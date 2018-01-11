async function logger() {
    let data = await fetch('http://example.com/posts');
    console.log(data);
}

logger();
