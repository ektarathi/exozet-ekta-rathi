import * as React from 'react';
import axios from 'axios';
import Languages from './Languages';

export interface RepoContentProps {
    details: any
}
 
const RepoContent: React.SFC<RepoContentProps> = ({details} : RepoContentProps) => {
    const [lang, setLang] = React.useState([] as any);
    
    let startYear = details.created_at.substring(0,4);;
    let endYear = details.updated_at.substring(0,4);

    React.useEffect(() => {
        axios.get(`${details.languages_url}`).then((resp) => {
            setLang(resp.data);
        });
    }, [details.languages_url])

    return ( 
        <React.Fragment>
            <div className="repo-details">
            <div className="repo-details__left-content">
                <h5 className="repo-details__left-content--heading">{details.name}</h5>
                <p className="repo-details__left-content--features">{details.language} - {details.private ? 'Public': 'Private'}</p>
                <div className="repo-details__left-content--description">
                    <p>{details.description}</p>
                    <p>This repository has {details.stargazers_count} stars and {details.forks} forks. 
                    If you would like more information about this repository and my contributed 
                    code, please visit <a href={details.clone_url} target="_blank" rel="noopener noreferrer">{details.name}</a> on Github</p>
                </div>
               <Languages details={lang}/>
            </div>
            <div className="repo-details__right-content">
                <p>{startYear} - {endYear}</p>
            </div>
        </div>
        </React.Fragment>
       
     );
}
 
export default RepoContent;