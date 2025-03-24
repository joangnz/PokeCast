import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
    return (
        <footer id="footer" className="w-full border-t bg-background py-6">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="links flex justify-evenly">
                    <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                        Terms
                    </Link>
                    <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                        Privacy
                    </Link>
                    <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                        Contact
                    </Link>
                </div>
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © 2025 PokéCast. Content is licensed under a{' '}
                    <a
                        href="https://creativecommons.org/licenses/by/4.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        Creative Commons Attribution 4.0 International License
                    </a>.
                </p>
            </div>
        </footer>
    );
}

export default Footer;