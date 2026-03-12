import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import SearchBar from './components/SearchBar'
import UserProfile from './components/UserProfile'
import RepoList from './components/RepoList'
import useDebounce from './hooks/useDebounce'
import { fetchUser, fetchRepos } from './api/github'

function App() {
  const [username, setUsername] = useState('')
  const debouncedUsername = useDebounce(username, 500)

  const userQuery = useQuery({
    queryKey: ['user', debouncedUsername],
    queryFn: () => fetchUser(debouncedUsername),
    enabled: debouncedUsername.length > 0,
    retry: false,
  })

  const reposQuery = useQuery({
    queryKey: ['repos', debouncedUsername],
    queryFn: () => fetchRepos(debouncedUsername),
    enabled: userQuery.isSuccess,
    retry: false,
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">

        <div className="text-center">
          <h1 className="text-4xl font-bold mb-1">GitHub Explorer</h1>
          <p className="text-gray-400">Search any GitHub user</p>
        </div>

        <SearchBar value={username} onChange={setUsername} />

        {userQuery.isLoading && (
          <p className="text-center text-gray-400 animate-pulse">Searching...</p>
        )}

        {userQuery.isError && (
          <p className="text-center text-red-400">{userQuery.error.message}</p>
        )}

        {userQuery.isSuccess && (
          <>
            <UserProfile user={userQuery.data} />
            {reposQuery.isLoading && (
              <p className="text-gray-400 text-sm">Loading repos...</p>
            )}
            {reposQuery.isSuccess && (
              <RepoList repos={reposQuery.data} />
            )}
          </>
        )}

      </div>
    </div>
  )
}

export default App