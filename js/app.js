angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './routes/home.html',
        controller: 'mainController'
      })

      .state('portfolio', {
        url: '/portfolio',
        templateUrl: './routes/portfolio.html'
      })

      .state('contact', {
        url: '/contact',
        templateUrl: './routes/contact.html'
      })



  }); // and of angular module
