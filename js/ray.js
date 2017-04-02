'use-strict';
const Ray = {
  about: {
    lead: `Hello! My name is Ray Meibaum, and I am a full-stack JavaScript developer. `,
    main: `I have a passion for creating wonderful user experiences through sleek front end UIs as well as fully featured back end servers. Currently, I am a web development student at General Assembly, Atlanta, but soon I will be bringing my web development excitement and skillset into the workforce. 

My skillset is mainly the MEAN stack (MongoDB, Express, AngularJS, and Node.JS), but I also have ample experience with Git and GitHub, as well as relational databases such as MySQL. 

My hobbies include exploring the earth with my future wife, Melanie and my dog, Charlie. I love cycling and playing the violin.`
  },
  portrait: "img/rem-portrait.jpg",
  portfolio: [{
    title: "Pubcrawlr",
    description: "A MEN stack application that allows users to plan pubcrawls based on their favorite bars.",
    features: [
      "Fully featured backend using Node/ExpressJS",
      "MongoDB document database featuring CRUD operations on three models",
      "Complete user registration and login system using Passport.js",
      "Mobile-first responsive design using Bootstrap"
    ],
    image: "img/pubcrawlr.png",
    deployment: "https://pubcrawlr.herokuapp.com/",
    repository: "https://github.com/raymeibaum/pubcrawlr"
  },{
    title: "Simon",
    description: "A recreation of a classic 80s game.",
    features: [
      "CSS animations and native JavaScript sound generation",
      "MVC style application architecture",
      "Twitter Tweet Button API for tweeting high scores",
      "Responsive design"
    ],
    image: "img/simon.png",
    deployment: "https://raymeibaum.github.io/simon/",
    repository: "https://github.com/raymeibaum/simon"
  },{
    title: "Animal Match",
    description: "A memory game.",
    features: [
      "Animate.css animations",
      "Bootstrap",
      "Twitter Tweet Button API for tweeting high scores",
    ],
    image: "img/animal-match.png",
    deployment: "https://raymeibaum.github.io/wdi-fundamentals-memorygame/",
    repository: "https://github.com/raymeibaum/wdi-fundamentals-memorygame"
  },{
    title: "Local Weather",
    description: `Allows the user to see pertinent weather information based
    on their location.`,
    features: [
      "Use of current location",
      "Google Reverse Geolocation API",
      "Forecast.io Weather API",
      "Skycons animated weather icons API"
    ],
    image: "img/local-weather.png",
    deployment: "https://raymeibaum.github.io/FCC-LocalWeather/",
    repository: "https://github.com/raymeibaum/FCC-LocalWeather"
  }, {
    title: "Random Quote Generator",
    description: "Displays random programming related quotes to the user.",
    features: [
      "Random programming quotes API by Adam Pope of Storm Consultancy",
      "Twitter Tweet Button API",
      "Bootstrap styling"
    ],
    image: "img/random-quote-generator.png",
    deployment: "http://raymeibaum.github.io/FCC-RandomQuoteGenerator/",
    repository: "https://github.com/raymeibaum/FCC-RandomQuoteGenerator"
  }, {
    title: "Twitch API",
    description: "Uses the Twitch API to display an array of user statuses.",
    features: [
      "Twitch API",
      "Icons by Font Awesome",
      "Bootstrap styling"
    ],
    image: "img/twitch.png",
    deployment: "https://raymeibaum.github.io/FCC-TwitchAPI",
    repository: "https://github.com/raymeibaum/FCC-TwitchAPI"
  }, {
    title: "Wikipedia Viewer",
    description: "Allows the user to search for Wikipedia articles.",
    features: [
      "Wikipedia Search API",
      "Random article button",
      "Bootstrap styling"
    ],
    image: "img/wikipedia.png",
    deployment: "https://raymeibaum.github.io/FCC-WikipediaViewer/",
    repository: "https://github.com/raymeibaum/FCC-WikipediaViewer"
  }],
  skills: [{
    category: "Strong",
    items: [
      "HTML",
      "Bootstrap",
      "CSS",
      "JavaScript",
      "jQuery",
      "Git/GitHub"
    ]
  }, {
    category: "Experienced",
    items: [
      "Python",
      "AngularJS",
      "MySQL",
      "Node.js",
      "Express"
    ]
  }, {
    category: "Horizon",
    items: [
      "ReactJS",
      "Angular2",
      "Ruby"
    ]
  }],
  education: [{
    name: "General Assembly",
    description: "Web Development Immersive, Computer Software Engineering",
    year: "2017"
  }, {
    name: "Udacity",
    description: "Various Online Courses/Resources, Computer Software Engineering",
    year: "2016"
  }, {
    name: "Free Code Camp",
    description: "Full Stack Web Development Certification, Computer Software Engineering",
    year: "2015-2016"
  }, {
    name: "Operation Spark",
    description: "Web Development Bootcamp, Computer Software Engineering",
    year: "2015"
  }, {
    name: "Full Sail University",
    description: "Bachelor of Arts, Film",
    year: "2008-2011"
  }]
};
