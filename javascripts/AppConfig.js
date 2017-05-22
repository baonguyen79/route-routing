
app.config(function($routeProvider) {
  $routeProvider
  .when('/' , {
    template: "<p>Click on the link to show highways</P>"
  })
  .when('/blueridgeparkway', {              //:id variable
     templateUrl: 'partials/highway1.html',
     controller: 'Highway1Ctrl'
  })
  .when('/route66', {
     templateUrl: 'partials/highway2.html',
     controller: 'Highway2Ctrl'
  })
  // .otherwise('' )
});
