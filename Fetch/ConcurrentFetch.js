// If we use await Promise.all(names.map(name => fetch(...))), and call the .json() method on results, it will wait until all the fetches have received response data before starting to parse.
async function getUsers_wrong(names){
    let results = await Promise.allSettled(names.map( name=>fetch(`https://api.github.com/users/${name}`)))

    let finalResult = await Promise.allSettled (results.map((result)=>{
        return result.value.ok ? result.value.json() : null;
    }))

    console.log(finalResult);
}

// By adding .json() directly to each fetch, we ensure that each fetch will immediately start reading the data in JSON format upon receiving a response, without waiting for each other.
async function getUsers_correct(names){
    let results = await Promise.allSettled(
        names.map(name=>{
            return fetch(`https://api.github.com/users/${name}`).then(
                response=>{
                    return response.ok ? response.json() : null; 
                },
                error=>{
                    return null;
                }
            )
        }))
    
    console.log(results);
}
