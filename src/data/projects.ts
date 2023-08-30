import { Project } from "../models.ts/Project";
import photoviewer from '../assets/photoviewer.jpg';
import busboard from '../assets/busboard.jpg';
import poke from '../assets/Pokecyclopedia.jpg'
import countries from '../assets/countries.jpg'

const projects: Project[] = [
    {
        name: "Photo Viewer",
        description: "Photo Viewer application to show selected photo from photo library - TechSwitch",
        imageUrl : photoviewer,
        gitHubUrl : "https://github.com/to-arda-kurt/photo-viewer",
        liveUrl: "https://glistening-florentine-595a68.netlify.app",
        technology: "Typescript, React, SASS, API"
    },
    {
        name: "Busboard",
        description: "Using TFL Rest Api, Receive Bus Arrivals with given Postcode - TechSwitch",
        imageUrl : busboard,
        gitHubUrl : "https://github.com/to-arda-kurt/tfl-busboard",
        liveUrl: "https://dynamic-stroopwafel-3f8a3f.netlify.app/",
        technology: "Typescript, React, SASS, API"
    },
    {
        name: "Pokecyclopedia",
        description: "Using TFL Rest Api, Receive Bus Arrivals with given Postcode - TechSwitch",
        imageUrl : poke,
        gitHubUrl : "https://github.com/to-arda-kurt/pokecyclopedia",
        liveUrl: "https://resplendent-clafoutis-a78481.netlify.app/",
        technology: "Typescript, React, SASS, API"
    },
    {
        name: "Countries",
        description: "Countries Flags and Information App that used Counties REST API",
        imageUrl : countries,
        gitHubUrl : "https://github.com/to-arda-kurt/rest-countries",
        liveUrl: "https://eloquent-shirley-303b43.netlify.app/",
        technology: "React with Context API, Styled Component /w CSS Grid & Flexbox"
    }
]

export default projects;