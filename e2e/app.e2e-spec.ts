import { QCIC.NgWebPage } from './app.po';

describe('qcic.ng-web App', () => {
  let page: QCIC.NgWebPage;

  beforeEach(() => {
    page = new QCIC.NgWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
