import * as React from "react";

export interface LanguagesProps {
	details: any;
}

const Languages: React.SFC<LanguagesProps> = ({ details }: LanguagesProps) => {
    //console.log('languages : ', details);
    let totalValue = 0;

    Object.keys(details).map((key) => {
        totalValue+= details[key];
    })
    
	return (
		<React.Fragment>
			{Object.keys(details).map((key) => {
				return (
					<div key={key}>
						<div>
							<span>{key}</span>{" "}{((details[key] / totalValue) * 100).toFixed(1) } %
                            <div className="progressbar">
                                <div style={{width: ((details[key] / totalValue) * 100).toFixed(1) + '%' }}></div>
                            </div>
						</div>
					</div>
				);
			})}
		</React.Fragment>
	);
};

export default Languages;
