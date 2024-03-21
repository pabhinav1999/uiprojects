const GITHUB_API = "https://api.github.com/users/pabhinav1999"

const userPromise = fetch(GITHUB_API);

console.log(userPromise);

userPromise.then((data) => {
    console.log(data);  //Attaching a cb to promise
})