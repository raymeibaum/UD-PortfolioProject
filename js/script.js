$(function() {

  // Model
  var ray = {
    about: "Ray Meibaum is pretty awesome.",
    portfolio: [
      {
        title: "Local Weather",
        description: "Allows the user to see pertinent weather information based on their location.",
        features: "",
        challenges: "",
        image: "img/LocalWeatherShowcase.png",
        url: "https://raymeibaum.github.io/FCC-LocalWeather/"
      },
      {
        title: "Random Quote Generator",
        description: "Displays random programming related quotes to the user.",
        features: "",
        challenges: "",
        image: "img/RandomQuoteGeneratorShowcase.png",
        url: ""
      },
      {
        title: "Twitch API",
        description: "Uses the Twitch API to display an array of user statuses.",
        features: "",
        challenges: "",
        image: "img/LocalWeatherShowcase.png",
        url: ""
      },
      {
        title: "Wikipedia Viewer",
        description: "Allows the user to search for Wikipedia articles",
        features: "",
        challenges: "",
        image: "img/WikipediaViewerShowcase.png",
        url: ""
      }
    ],
    skills: [
      {
        category: "Strong",
        items: ["HTML", "Bootstrap", "CSS",
                "JavaScript", "jQuery", "Git/GitHub"]
      },
      {
        category: "Experienced",
        items: ["Python", "AngularJS", "MySQL", "Node.js", "Express"]
      },
      {
        category: "Horizon",
        items: ["ReactJS", "Angular2", "Aurelia", "Swift"]
      },

    ],
    education: [
      {
        name: "Udacity",
        description: "Full Stack Web Development Nanodegree, Computer Software Engineering",
        year: "2016"
      },
      {
        name: "Free Code Camp",
        description: "Full Stack Web Development Certification, Computer Software Engineering",
        year: "2015-2016"
      },
      {
        name: "Operation Spark",
        description: "Web Development Bootcamp, Computer Software Engineering",
        year: "2015"
      },
      {
        name: "Full Sail University",
        description: "Bachelor of Art, Film",
        year: "2008-2011"
      },
    ]
  };

  // Controller
  var controller = {
    init: function() {
      about.init();
      portfolio.init();
      portfolioModal.init();
      skills.init();
      education.init()
    },
    getAboutText: function() {
      return ray.about;
    },
    getEducationArr: function() {
      return ray.education;
    },
    getSkillsArr: function() {
      return ray.skills;
    },
    getPortfolioArr: function() {
      return ray.portfolio;
    },
    getPortfolioItemById: function(id) {
      return ray.portfolio[id];
    }
  };

  // Views
  var about = {
    init: function() {
      this.aboutText = $('#about-text');
      this.render();
    },
    render: function() {
      var aboutText = controller.getAboutText();
      this.aboutText.text(aboutText);
    }
  };
  var portfolio = {
    init: function() {
      this.portfolioContent = $('#portfolio-content');
      this.render();
    },
    render: function() {
      var htmlStr = "";
      controller.getPortfolioArr().forEach(function(item, index) {
        htmlStr += `<div class="col-sm-3"><a class="portfolio-item" id="${index}" data-toggle="modal" data-target="#portfolio-modal">
                    <img class="img-responsive" src="${item.image}" alt="Project Image">
                    <h4 class="project-title">${item.title}</h4></a>
                    </div>`
      });
      this.portfolioContent.append(htmlStr);
      this.attachClickHandler();
    },
    attachClickHandler: function() {
      $portfolioItem = $('.portfolio-item');
      $portfolioItem.click(function(e) {
        portfolioModal.render(e.currentTarget.id);
      });
    }
  };
  var portfolioModal = {
    init: function() {
      this.modalTitle = $('.modal-title');
      this.modalBody = $('.modal-body');
    },
    render(id) {
      this.modalBody.empty();
      var portfolioItem = controller.getPortfolioItemById(id);
      var htmlStr = `<div class="row"><div class="col-sm-5">
                     <img class="img-responsive" src="${portfolioItem.image}" alt="Sample image from project">
                     </div><div class="col-sm-7">
                     <strong>Description</strong><p>${portfolioItem.description}</p>
                     <strong>Features</strong><p>${portfolioItem.features}</p>
                     <strong>Challenges</strong><p>${portfolioItem.challenges}</p>
                     </div></div>`;

      this.modalBody.append(htmlStr);
      this.modalTitle.text(portfolioItem.title);
    }
  }
  var skills = {
    init: function() {
      this.skillsContent = $('#skills-content');
      this.render();
    },
    render: function() {
      var htmlStr = "";
      controller.getSkillsArr().forEach(function(skillCategory) {
        htmlStr += `<div class="col-xs-4"><ul class="list-unstyled">
                    <li><strong>${skillCategory.category}</strong></li>`;
        skillCategory.items.forEach(function(skill) {
          htmlStr += `<li>${skill}</li>`;
        });
        htmlStr += `</ul></div>`;
      });

      this.skillsContent.append(htmlStr);
    }
  };
  var education = {
    init: function() {
      this.educationText = $('#education-text');
      this.render();
    },
    render: function() {
      var htmlStr = "";
      controller.getEducationArr().forEach(function(school) {
        htmlStr += `<strong>${school.name}</strong>
                    <p>${school.description}<br>${school.year}</p>`;
      });
      this.educationText.append(htmlStr);

    }
  };
  controller.init();
})
