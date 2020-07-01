https://stackoverflow.com/questions/62684024/why-is-my-async-function-being-executed-before-an-earlier-promise-is-being-fulfi
1. What is a promise?
    A promise is an object which allows us to execute our code asynchronously.
2. How do we use promises?
    We use promises by creating a new promise object (using the "new" keyword). Afterwards, we'll run a snippet of code with a number of paths (potentially just one path which resolves, or perhaps multiple using if-else statements). Within each of these paths is a resolve or reject method. If .resolve() is reached, then the .then() method(s) will be executed. If .reject() is reached, then the .catch() method will be executed.
    Promises can also be used with async functions. Rather than using .then() and .catch() methods, we can wrap our testable code in a try/catch block with the keyword "await" inside to temporarily halt our code until the "await" line has been executed correctly.
3. What are the benefits of using promises?
    Sometimes we want our code to run asynchronously. For example, if we are accessing an API or a remote database, we need to wait until the connection is correctly established before continuing. Not waiting for the connection to be established before running future code will almost always crash the program as it's trying to use undefined code.
