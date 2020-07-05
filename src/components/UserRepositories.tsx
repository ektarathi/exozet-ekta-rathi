import * as React from 'react';
import RepoContent from './RepoContent';

export interface UserRepositoriesProps {
    userRepos: any
}
 
const UserRepositories: React.SFC<UserRepositoriesProps> = ({userRepos} : UserRepositoriesProps) => {
    
    return (  
        <React.Fragment>
            <h3>Popular Repositories</h3>
            {userRepos.map((details: any) => {
                return <RepoContent details={details} key={details.id}/>
            })}
        </React.Fragment>
    );
}
 
export default UserRepositories;