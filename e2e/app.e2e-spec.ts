import { AngularDotnetcorePage } from './app.po';

describe('angular-dotnetcore App', () => {
  let page: AngularDotnetcorePage;

  beforeEach(() => {
    page = new AngularDotnetcorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
