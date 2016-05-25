angular.module('app').directive('menuDirective', function(){

  return {
    restrict: 'E',
    templateUrl: 'js/directives/menu-directive.html',
    controller: 'mainController'
  }

}); //end of directive
