angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $rootScope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  
  //Establecer la posición por defecto para el Mapa si no se ha iniciado el GPS
		$rootScope.posicion = { latitud: 6.222611, longitud: -75.57935};
//6.222611,-75.57935

		// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
$scope.onSuccess = function(position) {
          
          $rootScope.posicion = { latitud: position.coords.latitude, longitud: position.coords.longitude};
          
          alert($rootScope.posicion.latitud);
          
     PuntosPago.get(position.coords.latitude, position.coords.longitude, $http, function(success, data){
            if(success){
                $scope.puntos = data.puntosDePago;
                $rootScope.puntosPago = data.puntosDePago;

            }else{
                alert("En este momento no podemos acceder a la información de puntos de pago");
            }

        });     
};

// onError Callback receives a PositionError object
//
  $scope.onError =function(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}


try {
    navigator.geolocation.getCurrentPosition($scope.onSuccess, $scope.onError, { maximumAge: 3000, enableHighAccuracy: true });
}
catch(err) {
    alert(err.message);
}



        
  
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
