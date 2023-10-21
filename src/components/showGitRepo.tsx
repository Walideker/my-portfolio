import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import './css/show.css'

interface GitData {
    name: string;
    html_url: string;
}

function App() {
    const [repos, setRepos] = useState<GitData[]>([]);

    const submitHandler = async () => {
        try {
            const profile = await fetch(`https://api.github.com/users/walideker`);
            const profileJson = await profile.json();

            const repositories = await fetch(profileJson.repos_url);
            const repoJson = await repositories.json();
            setRepos(repoJson);
            console.log(repoJson);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container all ">

            <div>
                <h1>Education</h1>
                <p className='abt mt-4 text-start'>
                    Certifications: <br />
                    front-end web development | GoMyCode  | 2021 <br />
                    Additional Information: <br />
                    Stay up-to-date with the latest web technologies and industry trends through continuous learning and self-improvement. <br />
                    Actively contribute to open-source projects, sharing knowledge and collaborating with the developer community. <br />
                    Passionate about creativity, attention to detail, and user-centered design principles. <br />
                    Fluent in Js ,Ts, enabling effective communication in multicultural environments. <br />
                    References: <br />
                    Available upon request.
                </p>
            </div>
            <div className=''>
                <button className='btn btn-success' onClick={submitHandler}>Get Github Repositories</button>
                <div className=''>
                    {repos.map((repo: GitData) => (
                        <div key={repo.name} className='mt-'>
                            <ul className='mt-3'>
                                <li>
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className='link'>
                                        <FaGithub color='black' /> {repo.name}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
