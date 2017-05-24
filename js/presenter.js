'use-strict';
const Presenter = {
  $aboutPortrait: $('img#about-image'),
  $aboutLead: $('p#about-lead'),
  $aboutText: $('p#about-text'),
  $portfolio: $('div#portfolio-content'),
  $portfolioModal: $('div.modal-content'),
  $skills: $('p#skills-content'),
  $education: $('div#education-content'),
	$awards: $('div#awards-content'),
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
      let content = `
			<div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">${project.title}</h4>
      </div>
			<div class="modal-body">
				<div class="row">
					<div class="col-sm-6">
						<a href="${project.deployment}" target="_blank">
							<img class="img-responsive modal-photo" src="${project.image}" alt="Sample image from project">
		        </a>
					</div>
					<div class="col-sm-6">
						<p class="lead">${project.description}</p>
						<h3>Features</h3>
						<ul>`;

	      project.features.forEach((feature) => content += `<li>${feature}</li>`);
	      content += `
						</ul>
			    </div>
				</div>
			</div>
			<div class="modal-footer">
				<a class="btn btn-primary" href="${project.deployment}" role="button" target="_blank">Deployment</a>
				<a class="btn btn-primary" href="${project.repository}" role="button" target="_blank">Repository</a>
			</div>`;

      this.$portfolioModal.append(content);
  },
  renderSkills(skills) {
    skills.forEach((skill, index) => {
			if (index === skills.length - 1) {
				var content = `and ${skill}.`;
			} else {
				var content = `${skill}, `
			}
			Presenter.$skills.append(content);
    });
  },
  renderEducation(education) {
    education.forEach((school) => {
      let content = `<address>
											<strong>${school.name}</strong>
                     	<p>${school.description}<br>
											${school.year}</p>
										</address>`;
      Presenter.$education.append(content);
    });
  },
	renderAwards(awards) {
    awards.forEach((award) => {
      let content = `<address>
											<strong>${award.name}</strong>
                     	<p>${award.description}<br>
											${award.date}</p>
										</address>`;
      Presenter.$awards.append(content);
    });
  }
}
