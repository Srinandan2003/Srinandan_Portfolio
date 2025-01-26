import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Github, Star, GitFork, AlertCircle } from 'lucide-react';

const GitHubDashboard = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      
      if (!token) {
        setError('GitHub token is not configured. Please check your .env file.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('https://api.github.com/user/repos', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRepos(response.data);
        setLoading(false);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 401) {
          setError('Invalid GitHub token. Please check your token configuration.');
        } else {
          setError('Failed to fetch GitHub repositories');
        }
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-red-600">
        <AlertCircle className="w-6 h-6 mr-2" />
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex items-center mb-8">
        <Github className="w-8 h-8 mr-3" />
        <h2 className="text-3xl font-bold text-gray-800">My GitHub Repositories</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{repo.name}</h3>
            <p className="text-gray-600 mb-4 h-12 overflow-hidden">
              {repo.description || 'No description available'}
            </p>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center text-gray-600">
                <Star className="w-4 h-4 mr-1" />
                <span>{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <GitFork className="w-4 h-4 mr-1" />
                <span>{repo.forks_count}</span>
              </div>
            </div>
            
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              View Repository
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubDashboard;