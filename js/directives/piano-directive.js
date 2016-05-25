angular.module('app').directive('pianoDirective', function(){
  return {
    restric: 'E',
    templateUrl: 'js/directives/piano-directive.html',
    controller: 'pianoCtrl'
  }
})
