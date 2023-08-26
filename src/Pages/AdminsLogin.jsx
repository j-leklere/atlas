import styles from "./AdminsLogin.module.css";
import React, { useState } from "react";

function AdminsLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Send login request to backend

    try {
      const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Login failed");
      }

      const data = await response.json();
      // Save token in local storage or cookies for future authenticated requests
      localStorage.setItem("token", data.token);

      // Redirect to another page after successful login
      window.location.replace("/admins-dashboard"); // Replace with the desired page
    } catch (error) {
      console.error("Error:", error.message);
      // Handle login error (e.g., display error message to user)
    }
  };

  return (
    <main className={styles.main}>
      <form action="POST" className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>

        {loading && <div className={styles["loading-view"]}>ATLAS</div>}
      </form>
    </main>
  );
}

export default AdminsLogin;
