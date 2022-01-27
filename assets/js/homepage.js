async function getUserRepos(user) {
  let url = `https://api.github.com/users/${user}/repos`;

  let resp = await fetch(url);
  let json = await resp.json();
  // TODO: cleanse data.
  return json;
}

getUserRepos()
  .then(console.log);