import React, { useState } from "react";

const RepoCreator = ({ setIsOpen }) => {
  const [repoName, setRepoName] = useState("");
  const [description, setDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setIsPrivate(checked);
    } else if (name === "repoName") {
      setRepoName(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accessToken = process.env.VITE_GITHUB_ACCESS_TOKEN;
console.log(accessToken);
    try {
      const response = await fetch("https://api.github.com/user/repos", {
        method: "POST",
        headers: {
          Authorization: `token ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: repoName,
          description: description,
          private: isPrivate,
        }),
      });
      if (response.ok) {
        alert("Repository created successfully!");
        setRepoName("");
        setDescription("");
        setIsPrivate(false);
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error("Error creating repository:", error);
      setError("An error occurred while creating the repository.");
    }
  };

  return (
    <div className="repocreator">
      <button
        onClick={() => {
          setIsOpen(false);
        }}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Close
      </button>
      <h2>Create GitHub Repository</h2>
      <form onSubmit={handleSubmit} className="repocreator__form">
        <div className="input">
          <input
            placeholder="Repository Name*"
            type="text"
            name="repoName"
            value={repoName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input">
          <textarea
            placeholder="Description"
            name="description"
            value={description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="input">
          <label>Private:</label>
          <input
            type="checkbox"
            name="isPrivate"
            checked={isPrivate}
            onChange={handleInputChange}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" disabled={repoName.length < 1}>
          Create Repository
        </button>
      </form>
    </div>
  );
};

export default RepoCreator;
