import CR90 from "../assets/Images/starShips/CR90.webp";
import StarDestroyer from "../assets/Images/starShips/Star Destroyer.webp";
import DeathStar from "../assets/Images/starShips/Death Star.webp";
import MileniumFalcon from "../assets/Images/starShips/Millennium Falcon.webp";
import Ywing from "../assets/Images/starShips/Y wing.webp";
import LandingCraft from "../assets/Images/starShips/Landing Craft.webp";
import Xwing from "../assets/Images/starShips/X-wing.webp";
import TIEAdvancedx1 from "../assets/Images/starShips/Advanced X1.webp";
import Executor from "../assets/Images/starShips/Executor.png";
import RebelTransport from "../assets/Images/starShips/Rebel Transport.webp";
import NewHope from "../assets/Images/films/new hope.jpg";
import EmpireStrikesBack from "../assets/Images/films/The Empire Strikes Back.webp";
import ReturnOfTheJedi from "../assets/Images/films/Return of the Jedi.jpg";
import PhantomMenace from "../assets/Images/films/The Phantom Menace.jpg";
import AttackOfTheClones from "../assets/Images/films/Attack of the Clones.jpg";
import RevengeOfTheSith from "../assets/Images/films/Revenge of the Sith.jpg";

export const SelectImg = (name: string) => {
  switch (name) {
    case "CR90 corvette":
      return CR90;
    case "Star Destroyer":
      return StarDestroyer;
    case "Death Star":
      return DeathStar;
    case "Millennium Falcon":
      return MileniumFalcon;
    case "Y-wing":
      return Ywing;
    case "Sentinel-class landing craft":
      return LandingCraft;
    case "X-wing":
      return Xwing;
    case "TIE Advanced x1":
      return TIEAdvancedx1;
    case "Executor":
      return Executor;
    case "Rebel transport":
      return RebelTransport;
    case "A New Hope":
      return NewHope;
    case "The Empire Strikes Back":
      return EmpireStrikesBack;
    case "Return of the Jedi":
      return ReturnOfTheJedi;
    case "The Phantom Menace":
      return PhantomMenace;
    case "Attack of the Clones":
      return AttackOfTheClones;
    case "Revenge of the Sith":
      return RevengeOfTheSith;

    default:
      return "";
  }
};
