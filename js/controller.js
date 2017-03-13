'use-strict';
const Controller = {
  init() {
    Presenter.renderAbout(Ray.about, Ray.portrait);
    Presenter.renderPortfolio(Ray.portfolio);
    Presenter.renderSkills(Ray.skills);
    Presenter.renderEducation(Ray.education);
  },
  onClickProject() {
    Presenter.renderPortfolioModal(Ray.portfolio[this.id]);
  }
}
