import { ClimbingGroupPage } from './app.po';

describe('climbing-group App', () => {
  let page: ClimbingGroupPage;

  beforeEach(() => {
    page = new ClimbingGroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
