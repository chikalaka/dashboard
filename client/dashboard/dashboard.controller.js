var myapp = angular.module('myapp', ['chart.js']);
// .constant('_', window._)
// // use in views, ng-repeat="x in _.range(3)"
// .run(function ($rootScope) {
//   $rootScope._ = window._;
// });

myapp.controller('myCtrl', function myCtrl($scope, $http) {

  $scope.data = [];
  $http.get('http://localhost:3000/api/data')
    .then(function(response) {
      $scope.data = response.data.data;
    });

  $scope.getNumberNoDecimal = function (num) {
    return Math.floor(num);
  };

  // get the display name of a key (example: ClearWeb -> CLEAR WEB)
  $scope.getConstName = function(obj) {

    if (!obj) {
      console.log('getConstName obj not exists');
      return;
    }

    let keyName;
    if((typeof obj) == 'string'){
      keyName = obj;
    } else {
      let keyNamesArray = Object.keys(obj);
      if (keyNamesArray.length > 1) {
        console.log('the obj has more than one key');
        console.log('keyNamesArray:', keyNamesArray);
        return;
      } else {
        keyName = keyNamesArray[0];
      }
    }

    switch (keyName) {
      case 'ClearWeb':
        return 'CLEAR WEB';
      case 'DarkWeb':
        return 'DARK WEB';
      case 'Types':
        return 'TYPES';
      case 'Severities':
        return 'SEVERITIES';
      case 'Sources':
        return 'SOURCES';
      case 'AttackIndication':
        return 'ATTACK INDICATION';
      case 'DataLeakage':
        return 'DATA LEAKAGE';
      case 'Phishing':
        return 'PHISHING';
      case 'BrandSecurity':
        return 'BRAND SECURITY';
      case 'ExploitableData':
        return 'EXPLOITABLE DATA™';
      case 'vip':
        return 'VIP';
      case 'High':
        return 'HIGH';
      case 'Medium':
        return 'MEDIUM';
      case 'Low':
        return 'LOW';
      case 'ApplicationStores':
        return 'APPLICATION STORES';
      case 'SocialMedia':
        return 'SOCIAL MEDIA';
      case 'PasteSites':
        return 'PASTE SITES';
      case 'Others':
        return 'OTHERS';
      case 'BlackMarkets':
        return 'BLACK MARKETS';
      case 'HackingForums':
        return 'HACKING FORUMS';
      default:
        console.log('no obj key was found');
    }
  };

  $scope.pieLabels = ["Low", "Medium", "High"];
  $scope.pieData = [300, 500, 100];
  $scope.pieOptions = {
    cutoutPercentage: 90,
  };

});
