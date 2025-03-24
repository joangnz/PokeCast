import { useParams } from "react-router-dom";

import './Watcher.css';

function Watcher() {
    const { id } = useParams<{ id: string }>(); // Get the podcast ID from the URL
    const audioSrc = `/episodes/${id}.mp3`; // Construct the audio file path

    return (
        <div id="watcher" className="watcher-container text-center p-6">
            <h1 className="text-2xl font-bold mb-4">Now Playing: Episode {id}</h1>
            <audio controls className="w-full">
                <source src={audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default Watcher;