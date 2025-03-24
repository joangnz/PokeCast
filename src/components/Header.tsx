import { Link } from "react-router-dom";
import { Podcast, Rss } from "lucide-react";

import './Header.css';

function Header() {
    return (
        <header id="header" className="flex justify-between flex-col">
            <nav className="flex align-start justify-evenly gap-6 md:gap-10">
                <Link to="/" className="flex items-center space-x-2">
                    <Podcast className="h-6 w-6 text-red-500" />
                    <span className="inline-block font-bold">PokéCast</span>
                </Link>
                <Link to="/" className="flex items-center text-sm font-medium text-primary">
                    Episodes
                </Link>
                <Link to="/about" className="flex items-center text-sm font-medium text-muted-foreground">
                    About
                </Link>
                <a href="https://pokemondb.net/pokedex/all" target="_blank" className="flex items-center text-sm font-medium text-muted-foreground">
                    Pokédex
                </a>
            </nav>
            <div className="flex flex-1 items-center justify-end space-x-4">
                <button className="flex justify-between">
                    <Rss className="mr-2 h-4 w-4" />
                    Subscribe
                </button>
            </div>
        </header>
    );
}



export default Header;