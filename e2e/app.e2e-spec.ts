import { MyDemoAppPage } from './app.po';

describe('my-demo-app App', function() {
  let page: MyDemoAppPage;

  beforeEach(() => {
    page = new MyDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
