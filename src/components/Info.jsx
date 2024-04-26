import React, { useState, useEffect } from "react";

function Info() {
  const [profile, setProfile] = useState(null); // Initialize profile state as null

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("https://api.github.com/users/akbenngold");
        if (!response.ok) {
          throw new Error("Fetching data failed");
        }
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <h2>{profile.name}</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
        <img
          style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}
          src={profile.avatar_url}
          alt="profile picture"
        />
        <div style={{ textAlign: "left", fontWeight: "600" }}>
          <p>Name: {profile.name}</p>
          <p>Username: {profile.login}</p>
          <p>Bio: {profile.bio}</p>
          <p>Followers: {profile.followers}</p>
          <p>Following: {profile.following}</p>
          {console.log(profile)}
        </div>
      </div>
    </div>
  );
}

export default Info;
