(function(){
    var app = angular.module('statistics', [ ]);

    app.controller('statsController', ['$http', '$scope', function($http, $scope){

        this.wordNumber;
        this.sentencesNumber;

        var wordsNumberContext = this;
        var sentencesNumberContext = this;

        $http.get('http://localhost:9000/stats/getSentencesNumber').then(successCallbackSent, errorCallbackSent);
        function successCallbackSent(response){
            sentencesNumberContext.sentencesNumber = response.data;
        }
        function errorCallbackSent(error){
            alert('Błąd! Komunikacja z bazą danych zakończona błędem.');
        }

        $http.get('http://localhost:9000/stats/getWordsNumber').then(successCallbackWord, errorCallbackWord);
        function successCallbackWord(response){
            wordsNumberContext.wordNumber = response.data;
        }
        function errorCallbackWord(error){
            alert('Błąd! Komunikacja z bazą danych zakończona błędem.');
        }


    }]);


})();