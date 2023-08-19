
let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

let res = await fetch(url);         // await 'fulfilled promise' returns [[PromiseResult]]
let commits = await res.json();     // read response body，return an promise which is resolved to an object than can be represented by JSON
alert(commits[0].author.login);

fetch(url)
  .then(response => response.json())                    // if the fst callback returns fulfilled promise，then() will return a fulfilled promise with the same result.
  .then(commits => alert(commits[0].author.login));     // and the result will be passed as the fst argument to the fst callback in the next then().
