function UserProfile({ user }) {
  return (
    <div className="flex gap-6 items-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full"
      />
      <div>
        <h2 className="text-2xl font-bold">{user.name || user.login}</h2>
        <p className="text-gray-400 text-sm mb-2">@{user.login}</p>
        {user.bio && <p className="text-gray-600 mb-3">{user.bio}</p>}
        <div className="flex gap-4 text-sm text-gray-500">
          <span>⭐ <strong>{user.public_repos}</strong> repos</span>
          <span>👥 <strong>{user.followers}</strong> followers</span>
          <span>👤 <strong>{user.following}</strong> following</span>
        </div>
      </div>
    </div>
  )
}

export default UserProfile