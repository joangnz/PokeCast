import { Link } from "react-router-dom";
import { Podcast } from "lucide-react";

import './Header.css';

function Header() {
    return (
        <header id="header" className="flex justify-between flex-col">
            <nav className="flex align-start justify-evenly gap-6 md:gap-10">
                <Link to="/" className="flex items-center space-x-2">
                    <Podcast className="h-6 w-6 text-red-500" />
                    <span className="inline-block font-bold">PokéCast</span>
                </Link>
                <Link to="/episodes" className="flex items-center text-sm font-medium text-primary">
                    Episodes
                </Link>
                <Link to="/about" className="flex items-center text-sm font-medium text-muted-foreground">
                    About
                </Link>
                <a href="https://pokemondb.net/pokedex/all" target="_blank" className="flex items-center text-sm font-medium text-muted-foreground">
                    Pokédex
                </a>
            </nav>
        </header>
    );
}



export default Header;