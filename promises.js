const backend = (num) => {
    const someVar = new Promise((resolve, reject) => {
      if (num % 2 === 0) {
          resolve(`The number, ${num}, is even.`);
      } else {
          reject(`The number, ${num}, is odd.`);
      }
    })
    return someVar;
}
const builtInFuncs = (num) => {
    backend(num)
        .then(message => console.log(message))
        .catch(message => console.log(message));
}
const asyncAwait = async (num) => {
    try {
        const response = await backend(num);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

builtInFuncs(2);
builtInFuncs(3);

asyncAwait(4);
asyncAwait(5);