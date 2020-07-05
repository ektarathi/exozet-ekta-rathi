import * as React from "react";
import axios from 'axios';
import UserRepositories from "./UserRepositories";

export interface UserDetailsProps {
	userDetails: any;
}

const UserDetails: React.SFC<UserDetailsProps> = ({
	userDetails,
}: UserDetailsProps) => {
	let year = userDetails.created_at.substring(0, 4);
	const [repos, setRepos] = React.useState([] as any);
	
	React.useEffect(() => {
        axios.get(`${userDetails.repos_url}?sort=updated`).then((resp) => {
			setRepos(resp.data);
			userDetails = "";
        });
	}, [userDetails.repos_url])
	
	return (
		<React.Fragment>
			<h2>{userDetails.name}</h2>
			<div className="user-details__description"><p>{userDetails.bio}</p></div>
			<p className="user-details__repo-link">{userDetails.html_url}</p>
			<p>
				On Github since {year}, {userDetails.name} is a developer based in{" "}
				{userDetails.location} with <span> {userDetails.public_repos} public
				repositories</span> and <span>{userDetails.followers} followers</span>.
			</p>
			<UserRepositories userRepos={repos.slice(0,3)}/>
		</React.Fragment>
	);
};

export default UserDetails;
