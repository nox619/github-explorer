import RepoCard from './RepoCard'

function RepoList({ repos }) {
  if (repos.length === 0) return <p className="text-gray-400">No repositories found.</p>

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Top Repositories</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {repos.map(repo => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}

export default RepoList