import React, { useState } from "react";

const RepoDeleter = ({ repo }) => {
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    const accessToken = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;
    try {
      const response = await fetch(
        `https://api.github.com/repos/${repo.full_name}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `token ${accessToken}`,
          },
        }
      );
      if (response.ok) {
        alert("Repository deleted successfully!");

        setTimeout(() => {
          window.location.href = "https://ojimagithub.netlify.app/repos/";
        }, 4000);
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error("Error deleting repository:", error);
      setError("An error occurred while deleting the repository.");
    }
  };

  return (
    <div className="delete-btn-container">
      <button
        onClick={handleDelete}
        style={{ color: "white", backgroundColor: "red" }}
      >
        Delete Repository
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default RepoDeleter;
