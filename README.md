# GitHub Explorer

Search any GitHub user and view their profile, bio, and top repositories sorted by stars.

## Built With

- React.js
- TanStack Query (React Query) — data fetching and caching
- Tailwind CSS — styling
- GitHub REST API
- Vite

## Features

- Search any GitHub username
- Debounced input — waits 500ms after you stop typing before fetching
- Cached results — revisiting a profile loads instantly from cache
- Top 10 repositories sorted by stars
- Responsive layout

## Getting Started

### Prerequisites

- Node.js installed
- A GitHub account (optional, for higher API rate limits)

### Installation
```bash
git clone https://github.com/nox619/github-explorer.git
cd github-explorer
npm install
npm run dev
```

Open http://localhost:5173

## GitHub API Rate Limits

The GitHub API allows **60 requests per hour** for unauthenticated users. For normal use this is fine, but if you're testing heavily you may hit the limit and see errors.

To increase the limit to **5000 requests per hour**, add a GitHub personal access token:

1. Go to github.com → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
2. Click **Generate new token**
3. Don't select any scopes — just scroll down and hit Generate
4. Copy the token

Create a `.env` file in the project root:
```
VITE_GITHUB_TOKEN=your_token_here
```

Then update `src/api/github.js` to include the token in headers:
```js
const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
}
```

Add the `Authorization: headers` option to both fetch calls in that file.

> Never commit your `.env` file. It is already in `.gitignore`.

## Project Structure
```
src/
  api/
    github.js         # GitHub API fetch functions
  components/
    SearchBar.jsx     # Controlled search input
    UserProfile.jsx   # Avatar, bio, follower stats
    RepoCard.jsx      # Individual repo card
    RepoList.jsx      # Grid of repo cards
  hooks/
    useDebounce.js    # Custom hook — delays value update by 500ms
  App.jsx             # Main component, query logic
  main.jsx            # QueryClientProvider setup
```

## License

MIT
