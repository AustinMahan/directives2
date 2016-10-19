(function () {
  angular
    .module('myApp', [])
    .controller('init', initCtrl)
    .directive('newDice', diceDirective)

    diceDirective.$inject = []
    function diceDirective() {
      var controller = ['$rootScope', function ($rootScope) {
        var vm = this
        vm.change = () => {
          vm.bgcolor = vm.backgroundColor
          vm.tcolor = vm.textColor
        }

        vm.changeBack = () => {
          vm.bgcolor = 'white'
          vm.tcolor = 'black'
        }


        vm.num = Math.ceil(Math.random() * 6);
        $rootScope.total += vm.num;
        vm.roll = function () {
          $rootScope.total -= vm.num;
          vm.num = Math.ceil(Math.random() * 6);
          $rootScope.total += vm.num;
          console.log($rootScope.total);
        }
      }]

      return {
        controller: controller,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
          backgroundColor: '@',
          textColor: '@'
        },
        templateUrl: 'dice.html'
      }
    }

    initCtrl.$inject = ['$rootScope', '$scope']
    function initCtrl($rootScope, $scope) {
      $rootScope.total = 0;
    }
})();
