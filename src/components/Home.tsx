import { Link } from "react-router-dom";
import { Podcast } from "lucide-react";

function Home() {
    return (
        <div className="home-container text-center p-6">
            <h1 className="text-4xl font-bold mb-4">Welcome to PokéCast!</h1>
            <p className="text-lg text-muted-foreground mb-6">
                Your ultimate Pokémon podcast experience. Dive into episodes, explore the Pokédex, and stay updated with all things Pokémon!
            </p>
            <div className="button-group flex justify-center gap-4">
                <Link
                    to="/"
                    className="px-6 py-3 bg-primary text-white rounded-md text-lg font-medium hover:bg-primary-dark"
                >
                    Explore Episodes
                </Link>
                <a
                    href="https://pokemondb.net/pokedex/all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-secondary text-white rounded-md text-lg font-medium hover:bg-secondary-dark"
                >
                    Visit Pokédex
                </a>
            </div>
        </div>
    );
}

export default Home;