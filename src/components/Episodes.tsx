import { Link } from "react-router-dom";

function Episodes() {
    const episodes = [
        { id: "latest", title: "Latest Episode" },
        { id: "episode1", title: "Episode 1: The Beginning" },
        { id: "episode2", title: "Episode 2: Catch 'Em All" },
    ];

    return (
        <div className="episodes-container text-center p-6">
            <h1 className="text-4xl font-bold mb-4">Episodes</h1>
            <ul className="episode-list">
                {episodes.map((episode) => (
                    <li key={episode.id} className="mb-2">
                        <Link
                            to={`/watcher/${episode.id}`}
                            className="text-primary hover:underline"
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