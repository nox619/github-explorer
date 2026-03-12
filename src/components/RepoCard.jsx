function RepoCard({ repo }) {
  return (
    
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="block bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:border-blue-400 hover:shadow-md transition-all"
    >
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-blue-600">{repo.name}</h3>
        <span className="text-sm text-yellow-600">⭐ {repo.stargazers_count}</span>
      </div>
      {repo.description && (
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{repo.description}</p>
      )}
      {repo.language && (
        <span className="inline-block mt-2 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
          {repo.language}
        </span>
      )}
    </a>
  )
}

export default RepoCard