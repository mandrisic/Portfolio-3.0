import loveBites from '../assets/img/love-bites.jpg';
import jokes from '../assets/img/jokes.jpg';
import poke from '../assets/img/poke-2.jpg';
import weather from '../assets/img/weather.jpg';
import czii from '../assets/img/czii.jpg';
import rock from '../assets/img/rock.jpg';

const projectsData = [
    {
      title: "LoveBites",
      technologies: ["React", "MobX", "Firebase", "API", "MaterialUI"],
      image: loveBites,
      description: "LoveBites is a recipe application built with React and MobX, allowing users to explore, create, edit, and delete recipes. Recipes are fetched from the MealDB API and Firebase, with filters for country, categories, and a search functionality.",
      githubLink: "https://github.com/mandrisic/LoveBites"
    },
    {
      title: "Joke generator",
      technologies: ["Javascript", "HTML", "CSS", "API"],
      image: jokes,
      description: "Project provides users with a simple and engaging interface to fetch and display random jokes. The app uses an external API to deliver a variety of jokes, ensuring fresh content each time it's accessed.",
      githubLink: "https://github.com/mandrisic/joke-generator"
    },
    {
      title: "Pokemon-search-app",
      technologies: ["JavaScript", "HTML", "CSS", "API"],
      image: poke,
      description: "The project pulls real-time data from an external API, providing information on Pokémon stats, abilities, and types. It allows users to search and view details about various Pokémon, with the interface changing between a Nintendo Switch and Nintendo Gameboy style.",
      githubLink: "https://github.com/mandrisic/Pokemon-search-app"
    },
    {
      title: "Weather app",
      technologies: ["PWA", "React", "Service workers", "CSS"],
      image: weather,
      description: "This project is a Progressive Web App (PWA) that allows users to check current weather conditions and forecasts for various locations. The app features an intuitive interface, offline capabilities, and can be installed on devices for easy access.",
      githubLink: "https://github.com/mandrisic/PWA-weather"
    },
    {
      title: "Official website CZII",
      technologies: ["Javascript", "HTML", "CSS"],
      image: czii,
      description: "The project is a team effort to create a website for the 3rd Congress of the Center for Interdisciplinary Research. It provides key information about the congress, including schedules and speakers, with a focus on user experience and accessibility for easy navigation.",
      githubLink: "https://github.com/mandrisic/CZII"
    },
    {
      title: "Rock, paper, scissors",
      technologies: ["Javascript", "HTML", "CSS", "Grunt"],
      image: rock,
      description: "My first project made in the retro arcade style with my own SVG illustrations. The project allows players to compete against the computer and includes game logic to determine the winner",
      githubLink: "https://github.com/mandrisic/kamen-papir-skare"
    }
  ];
  
  export default projectsData;