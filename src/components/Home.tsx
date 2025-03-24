import '../assets/episodes/latest.mp3';

import './Home.css';

function Home() {
    return (
        <main id="home" className="home-container text-center p-6">
            <h1 className="text-4xl font-bold mb-4">Welcome to PokéCast!</h1>
            <p className="text-lg text-muted-foreground mb-6">
                Your ultimate Pokémon podcast experience. Dive into episodes, explore the Pokédex, and stay updated with all things Pokémon!
            </p>

            <section id="last-ep" className="flex justify-between">
                <audio controls>
                    <source src="" type="audio/mpeg"></source>
                    Tu navegador no soporta el audio
                </audio>
                <figcaption>
                    <h2>Último Episodio</h2>
                </figcaption>
            </section>
        </main>
    );
}

export default Home;