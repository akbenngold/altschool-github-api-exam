import React from "react";
import { useLocation } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import RepoDeleter from "./RepoDeleter";

function RepoDetails() {
  const location = useLocation();
  const { repo } = location.state || {};

  if (!repo) {
    return <h4>No repository details found.</h4>;
  }

  return (
    <ErrorBoundary>
      <div className="repodetails">
        <h2>{repo.name}</h2>
        <ul className="repolist">
          {repo.description ? <li>Description: {repo.description}</li> : null}
          {repo.language ? <li>Language: {repo.language}</li> : null}
          <li>
            Link to Github:{" "}
            <a href={repo.html_url} target="__blank" rel="noopener noreferrer">
              {repo.html_url}
            </a>
          </li>
          <li>Clone URL: {repo.clone_url}</li>
          <li>Last Update: {repo.updated_at}</li>
          <li>Date of Creation: {repo.created_at}</li>
        </ul>

        <RepoDeleter repo={repo} />
        <p>
          In the name of God, please don't delete my repo. <br />
          <span style={{ color: "blue" }}>Create</span> a test repo and{" "}
          <span style={{ color: "red" }}>delete</span>. <br />
          Thank you
        </p>
      </div>
    </ErrorBoundary>
  );
}

export default RepoDetails;
