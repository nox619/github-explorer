export async function fetchUser(username) {
  const res = await fetch(`https://api.github.com/users/${username}`)
  if (res.status === 404) throw new Error('User not found')
  if (!res.ok) throw new Error('Something went wrong')
  return res.json()
}

export async function fetchRepos(username) {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=stars&per_page=10`
  )
  if (!res.ok) throw new Error('Could not fetch repos')
  return res.json()
}