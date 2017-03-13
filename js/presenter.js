'use-strict';
const Presenter = {
  $aboutPortrait: $('img#about-image'),
  $aboutLead: $('p#about-lead'),
  $aboutText: $('p#about-text'),
  $portfolio: $('div#portfolio-content'),
  $portfolioModal: $('div.modal-body'),
  $skills: $('div#skills-content'),
  $education: $('div#education-content'),
  renderAbout(about, portraitSrc) {
    this.$aboutLead.text(about.lead);
    this.$aboutText.text(about.main);
    this.$aboutPortrait.attr('src', portraitSrc);
  },
  renderPortfolio(portfolio) {
    portfolio.forEach((project, index) => {
      let content = `<div class="col-sm-4 portfolio"><a class="portfolio-item"
                     id="${index}" data-toggle="modal"
                     data-target="#portfolio-modal">
                     <img class="img-responsive" src="${project.image}"
                     alt="Image of ${project.title}">
                     <h4 class="project-title">${project.title}</h4></a>
                     </div>`;
      Presenter.$portfolio.append(content);
    });
  },
  renderPortfolioModal(project) {
    this.$portfolioModal.empty();
      let content = `<div class="row"><div class="col-sm-6">
                     <a href="${project.url}"><img class="img-responsive modal-photo"
                     src="${project.image}" alt="Sample image from project">
                     </a></div><div class="col-sm-6">
                     <h3>${project.title}</h3>
                     <strong>Description</strong><p>${project.description}
                     </p><strong>Features</strong><ul>`;

      project.features.forEach((feature) => content += `<li>${feature}</li>`);
      content += `</ul>
                  <a class="btn btn-default" href="${project.deployment}" role="button" target="_blank">Deployment</a>
                  <a class="btn btn-default" href="${project.repository}" role="button" target="_blank">Repository</a>
                  </div></div>`;

      this.$portfolioModal.append(content);
  },
  renderSkills(skills) {
    skills.forEach((section) => {
      let content = `<div class="col-xs-4"><ul class="list-unstyled">
                     <li><strong>${section.category}</strong></li>`;
      section.items.forEach((skill) => content += `<li>${skill}</li>`);
      content += `</ul></div>`;
      Presenter.$skills.append(content);
    });
  },
  renderEducation(education) {
    education.forEach((school) => {
      let content = `<strong>${school.name}</strong>
                     <p>${school.description}<br>${school.year}</p>`;
      Presenter.$education.append(content);
    });
  }
}
