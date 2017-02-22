$(function() {

  // Model
  var ray = {
    about: {
      lead: "Ray Meibaum is a web developer who is ready to make a difference.",
      main: "Although born and raised in St. Louis, Missouri, Ray is an " +
        "Atlanta, Georgia based full-stack web developer who loves " +
        "writing code not only for the excitement of accomplishment, but " +
        "also for the profound effect programming can have on people all " +
        "over the world. Web applications help billions of people every " +
        "day in ways such as social networking and communications, " +
        "banking and finance, news content delivery, entertainment, and so " +
        "much more. Ray is more than excited to live and work in an industry " +
        "that is truly shaping the future of the human race."
    },
    portrait: "img/IMG_4892.jpg",
    portfolio: [{
      title: "Local Weather",
      description: " the user to see pertinent weather information based on " +
        "their location.",
      features: [
        "Use of current location",
        "Google Reverse Geolocation API",
        "Forecast.io Weather API",
        "Skycons animated weather icons API"
      ],
      image: "img/LocalWeather.png",
      url: "https://raymeibaum.github.io/FCC-LocalWeather/"
    }, {
      title: "Random Quote Generator",
      description: "Displays random programming related quotes to the user.",
      features: [
        "Random programming quotes API by Adam Pope of Storm Consultancy",
        "Twitter Tweet Button API",
        "Bootstrap styling"
      ],
      image: "img/RandomQuoteGenerator.png",
      url: "http://raymeibaum.github.io/FCC-RandomQuoteGenerator/"
    }, {
      title: "Twitch API",
      description: "Uses the Twitch API to display an array of user statuses.",
      features: [
        "Twitch API",
        "Icons by Font Awesome",
        "Bootstrap styling"
      ],
      image: "img/TwitchAPI.png",
      url: "https://raymeibaum.github.io/FCC-TwitchAPI"
    }, {
      title: "Wikipedia Viewer",
      description: "Allows the user to search for Wikipedia articles.",
      features: [
        "Wikipedia Search API",
        "Random article button",
        "Bootstrap styling"
      ],
      image: "img/WikipediaViewer.png",
      url: "https://raymeibaum.github.io/FCC-WikipediaViewer/"
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
          "Aurelia",
          "Swift"
        ]
      },

    ],
    education: [{
      name: "Udacity",
      description: "Various Online Courses/Resources, Computer " +
                   "Software Engineering",
      year: "2016"
    }, {
      name: "Free Code Camp",
      description: "Full Stack Web Development Certification, Computer " +
                   "Software Engineering",
      year: "2015-2016"
    }, {
      name: "Operation Spark",
      description: "Web Development Bootcamp, Computer Software Engineering",
      year: "2015"
    }, {
      name: "Full Sail University",
      description: "Bachelor of Arts, Film",
      year: "2008-2011"
    }, ]
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
    getAboutImage: function() {
      return ray.portrait;
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
      this.aboutLead = $('#about-lead');
      this.aboutText = $('#about-text');
      this.aboutImage = $('#about-image');
      this.render();
    },
    render: function() {
      var aboutText = controller.getAboutText();
      var aboutImage = controller.getAboutImage();
      this.aboutLead.text(aboutText.lead);
      this.aboutText.text(aboutText.main);
      this.aboutImage.attr('src', aboutImage);
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
        htmlStr += `<div class="col-sm-3"><a class="portfolio-item"
                    id="${index}" data-toggle="modal"
                    data-target="#portfolio-modal">
                    <img class="img-responsive" src="${item.image}"
                    alt="Project Image">
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
      this.modalBody = $('.modal-body');
    },
    render(id) {
      this.modalBody.empty();
      var htmlStr = "";
      var portfolioItem = controller.getPortfolioItemById(id);
      htmlStr += `<div class="row"><div class="col-sm-6">
                  <a href="${portfolioItem.url}"><img class="img-responsive"
                  src="${portfolioItem.image}" alt="Sample image from project">
                  </a></div><div class="col-sm-6">
                  <h3>${portfolioItem.title}</h3>
                  <strong>Description</strong><p>${portfolioItem.description}
                  </p><strong>Features</strong><ul>`
      portfolioItem.features.forEach(function(feature) {
        htmlStr += `<li>${feature}</li>`
      });
      htmlStr += `</ul><strong>Click <a href="${portfolioItem.url}">here</a>
                  to view project.</strong></div></div>`;

      this.modalBody.append(htmlStr);
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
