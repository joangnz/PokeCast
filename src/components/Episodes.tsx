import { Link } from "react-router-dom";

import './Episodes.css';

function Episodes() {
    const episodes = [
        { id: "latest", title: "Latest Episode" },
        { id: "episode1", title: "Episode 1: The Beginning" },
        { id: "episode2", title: "Episode 2: Catch 'Em All" },
    ];

    return (
        <div id="episodes" className="text-center p-6">
            <h1 className="text-4xl font-bold mb-4">Episodes</h1>
            <ul className="ep-list no-bullet flex">
                {episodes.map((episode) => (
                    <li key={episode.id} className="ep-card mb-2">
                        <Link
                            to={`/watcher/${episode.id}`}
                            className="text-primary"
                        >
                            {episode.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Episodes;