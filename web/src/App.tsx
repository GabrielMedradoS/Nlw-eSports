import "./styles/main.css";

import logoImg from "./assets/logo-nlw-esports.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { useEffect, useState } from "react";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    Ads: number;
  };
}

export function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient text-transparent bg-clip-text">
          duo
        </span>{" "}
        esta aqui !
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.Ads}
            />
          );
        })}

        {/*         <GameBanner
          bannerUrl="./games/game-1.png"
          title="League of Legends"
          adsCount={5}
        />
        <GameBanner
          bannerUrl="./games/game-2.png"
          title="Dota 2"
          adsCount={5}
        />
        <GameBanner bannerUrl="./games/game-3.png" title="CS:GO" adsCount={5} />
        <GameBanner
          bannerUrl="./games/game-4.png"
          title="Apex Legends"
          adsCount={5}
        />
        <GameBanner
          bannerUrl="./games/game-5.png"
          title="Fortnite"
          adsCount={5}
        />
        <GameBanner
          bannerUrl="./games/game-6.png"
          title="World of Warcraft"
          adsCount={5}
        /> */}
      </div>

      <CreateAdBanner />
    </div>
  );
}
