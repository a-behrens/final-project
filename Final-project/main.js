angular.module('KRRclass', [ 'chart.js']).controller('MainCtrl', ['$scope','$http', mainCtrl]);
console.log("connected")
function mainCtrl($scope, $http){


  $scope.myInstances = [193, 88, 70, 73, 194, 139, 90, 99, 877, 117, 137, 126, 171, 439, 141, 336, 291, 120, 87, 328, 259, 134, 239, 119, 164, 55, 143, 128, 186, 81, 702, 262, 255, 81, 59, 91, 66, 67, 47, 31, 70, 43, 188, 84, 102, 181, 311, 109, 49, 24];
  $scope.myClasses = [ "AmedeoModigliani","VasiliyKandinskiy", "DiegoRivera","ClaudeMonet", "ReneMagritte", "SalvadorDali", "EdouardManet" , "AndreiRublev", "VincentvanGogh","GustavKlimt", "HieronymusBosch",
                      "KazimirMalevich","MikhailVrubel", "PabloPicasso","PeterPaulRubens", "Pierre-AugusteRenoir", "FranciscoGoya", "FridaKahlo" , "ElGreco", "AlbrechtDürer","AlfredSisley", 
                      "PieterBruegel", "MarcChagall", "GiottodiBondone", "SandroBotticelli", "Caravaggio", "LeonardodaVinci", "DiegoVelazquez", "HenriMatisse", "JanvanEyck", "EdgarDegas", "Rembrandt",
                      "Titian", "HenrideToulouse-Lautrec", "GustaveCourbet", "CamillePissarro", "WilliamTurner", "EdvardMunch", "PaulCezanne", "EugeneDelacroix", "HenriRousseau", "GeorgesSeurat",
                      "PaulKlee", "PietMondrian", "JoanMiro", "AndyWarhol", "PaulGauguin", "Raphael", "Michelangelo", "JacksonPollock"];
  $scope.artistQuery = "Hover over the graph and discover the number of paintings per painter" 
  $scope.myquery = "SELECT ?artist ?painting WHERE { ?artist <http://example.com/vu/project/artwork/paintings> ?painting} " 
  



  $scope.myInstances2 = [5, 4, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  $scope.myClasses2 = ["NorthernRenaissance","Baroque", "Impressionism","Post-Impressionism", "HighRenaissance", "Romanticism", "Impressionism-Post-Impressionism", 
                        "Primitivism", "Surrealism", "AbstractExpressionism", "ByzantineArt", "Cubism", "EarlyRenaissance", "Expressionism", "Expressionism,Abstractionism", "Expressionism,Abstractionism,Surrealism", "Surrealism", "Surrealism",
                         "High Renaissance,Mannerism", "Mannerism", "Neoplasticism", "PopArt", "Primitivism,Surrealism", "ProtoRenaissance", "Realism", "Realism,Impressionism", "SocialRealism,Muralism", "Suprematism", "Surrealism,Impressionism",
                          "Symbolism", "Symbolism,Art Nouveau", "Symbolism,Expressionism", "Symbolism,Post-Impressionism" ];
  $scope.genreQuery = "Hover over the chart and discover how many painters in our database belong to which artistic genres" 
  $scope.myquery2 = "SELECT DISTINCT ?genre (COUNT(?painter) AS ?nmbr_artists )WHERE {?painter at:hasGenre ?genre }GROUP BY (?genre)ORDER BY DESC(?nmbr_artists)"



  $scope.myInstances3 = [13, 8, 5, 5, 4, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  $scope.myClasses3 = ["French","Italian", "Dutch","Spanish", "Russian", "Flemish", "American", 
                        "Mexican", "Austrian", "Belgian", "British", "French,British", "French,Jewish,Belarusian", "German", "German,Swiss", "Norwegian", "Spanish,Greek"];
  $scope.nationalityQuery = "Hover over the chart and discover how many artists belong to which artistic genres" 
  $scope.myquery3 = "SELECT DISTINCT ?genre (COUNT(?painter) AS ?nmbr_artists )WHERE {?painter at:genre ?genre }GROUP BY (?genre)ORDER BY DESC(?nmbr_artists)"

  $scope.dynamicChart1 = function(){
    $scope.myInputEndPoint = "http://192.168.178.108:7200/repositories/FINAL-PROJECT"
    $scope.myInputQuery = "SELECT DISTINCT ?genre (COUNT(?painter) AS ?nmbr_artists )WHERE {?painter at:genre ?genre }GROUP BY (?genre)ORDER BY DESC(?nmbr_artists)"
    $scope.myDisplayMessage = "Welcome to my great Web Application called: " + $scope.myInputAppName ;
    $scope.mySparqlEndpoint = $scope.myInputEndPoint ;
    $scope.mySparqlQuery = encodeURI($scope.myquery).replace(/#/, '%23');

    $http( {
      method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery,
      headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
      } )
      .success(function(data, status ) {
      $scope.myDynamicLabels = [];
      $scope.myDynamicData = [];

      // now iterate on the results
      angular.forEach(data.results.bindings, function(val) {
        $scope.myDynamicLabels.push(val.artist.value);
        $scope.myDynamicData.push(val.painting.value);
      });
      })
      .error(function(error ){
          console.log('Error '+error);
      });

  };

  $scope.dynamicChart2 = function(){

    $scope.myInputEndPoint = "http://192.168.178.108:7200/repositories/FINAL-PROJECT"
    $scope.myInputQuery2 = "SELECT DISTINCT ?genre (COUNT(?painter) AS ?nmbr_artists )WHERE {?painter at:genre ?genre }GROUP BY (?genre)ORDER BY DESC(?nmbr_artists)"
    $scope.myDisplayMessage = "Welcome to my great Web Application called: " + $scope.myInputAppName ;
    $scope.mySparqlEndpoint = $scope.myInputEndPoint ;
    $scope.mySparqlQuery2 = encodeURI($scope.myInputQuery2).replace(/#/, '%23');

    $http( {
      method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery2,
      headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
      } )
      .success(function(data, status ) {
      $scope.myDynamicLabels = [];
      $scope.myDynamicData = [];

      // now iterate on the results
      angular.forEach(data.results.bindings, function(val) {
        $scope.myDynamicLabels.push(val.genre.value);
        $scope.myDynamicData.push(val.nmbr_artists.value);
      });
      })
      .error(function(error ){
          console.log('Error '+error);
      });
    
    $scope.dynamicChart3 = function(){

    $scope.myInputEndPoint = "http://192.168.178.108:7200/repositories/Project_1"
    $scope.myInputQuery3 = "SELECT DISTINCT ?nationality (COUNT(?painter) AS ?nmbr_artists )WHERE {?painter at:hasNationality ?nationality }GROUP BY (?nationality)ORDER BY DESC(?nmbr_artists)"
    $scope.mySparqlEndpoint = $scope.myInputEndPoint ;
    $scope.mySparqlQuery3 = encodeURI($scope.myInputQuery3).replace(/#/, '%23');

    $http( {
      method: "GET",
      url : $scope.mySparqlEndpoint + "?query=" + $scope.mySparqlQuery3,
      headers : {'Accept':'application/sparql-results+json', 'Content-Type':'application/sparql-results+json'}
      } )
      .success(function(data, status ) {
      $scope.myDynamicLabels = [];
      $scope.myDynamicData = [];

      // now iterate on the results
      angular.forEach(data.results.bindings, function(val) {
        $scope.myDynamicLabels.push(val.nationality.value);
        $scope.myDynamicData.push(val.nmbr_artists.value);
      });
      })
      .error(function(error ){
          console.log('Error '+error);
      });

  };

  };
	
}

