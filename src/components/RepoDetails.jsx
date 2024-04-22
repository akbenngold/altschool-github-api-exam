import React from "react";
import { useLocation } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

function RepoDetails() {
  const location = useLocation();
  const { repo } = location.state || {};

  if (!repo) {
    return <h4>No repository details found.</h4>;
  }

  return (
    <ErrorBoundary>
      {" "}
      <div className="repodetails">
        {console.log(repo)}

        <h2>{repo.name}</h2>
        <ul className="repolist">
          {repo.description ? <li>Description: {repo.description}</li> : null}
          {repo.language ? <li>Language: {repo.language}</li> : null}
          <li>
            Link to Github:{" "}
            <a
              href="http://github.com/akbenngold/altschool-assignments"
              target="__blank"
            >
              {repo.html_url}
            </a>
          </li>

          <li>Clone URL: {repo.clone_url}</li>
          <li>Last Update: {repo.updated_at}</li>
          <li>Date of Creation: {repo.created_at}</li>
        </ul>
        {console.log(repo)}
      </div>
    </ErrorBoundary>
  );
}

export default RepoDetails;
