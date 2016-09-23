app.controller( "mainCtrl", function( $scope, pokeSrvc ) {
  //$scope.test = "test";

  $scope.trainers = pokeSrvc.getAllTrainers();

  $scope.addTrainer = function() {
    pokeSrvc.addTrainer( $scope.trainer );
    $scope.trainer = "";
  }

  $scope.removeTrainer = function( name ) {
    pokeSrvc.removeTrainer( name )
  }


} )
