import React from "react";
import axios from "axios";
import UserDetails from "./components/UserDetails";
import "./App.scss";
import "./assets/scss/base.scss";

function App() {
	const [user, setUser] = React.useState([]);
	const [username, setUsername] = React.useState("");

	const handleSubmit = (event: any) => {
		event.preventDefault();
		axios.get(`https://api.github.com/users/${username}`).then((resp) => {
			setUser(resp.data);
		});
		setUsername("");
		setUser([]);
	};

	return (
		<div className="App">
			<main>
				<h1>My Github Resume</h1>
				<div className="card">
					<h2> Github username</h2>
					<form onSubmit={handleSubmit}>
						<label htmlFor="username" className="visually-hidden">
							UserName:
						</label>
						<input
							type="text"
							name="username"
							value={username}
							onChange={(event) => setUsername(event.target.value)}
							placeholder="John Doe"
							aria-label="Username"
							required
						/>
						<input
							type="submit"
							name="submit"
							className="submit-button"
							value="Add card"
						/>
					</form>
				</div>
				{user.length !== 0 ? (
					<div className="user-details">
						<UserDetails userDetails={user} />
					</div>
				) : (
					""
				)}
			</main>
		</div>
	);
}

export default App;
