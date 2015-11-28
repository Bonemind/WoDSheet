export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: ['sheet'], name: 'sheet',      moduleId: 'wod-sheet',      nav: true, title: 'WoD Sheet' },
    ]);

    this.router = router;
  }
}
