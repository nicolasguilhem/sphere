angular.module('sphere').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/glob/accueil/views/accueil.html',
    "<div> <div class=\"carac\"> <span class=\"textCarac\">physique</span> <div class=\"quart quart1\"> <span class=\"textQuart textQuartHaut\">martialité</span> </div> <div class=\"quart quart2\"> <span class=\"textQuart textQuartHaut\">force</span> </div> <div class=\"quart quart3\"> <span class=\"textQuart textQuartBas\">mobilité</span> </div> <div class=\"quart quart4\"> <span class=\"textQuart textQuartBas\">solidité</span> </div> </div> <div class=\"carac\"> <span class=\"textCarac\">sensorielle</span> <div class=\"quart quart1\"> <span class=\"textQuart textQuartHaut\">perception</span> </div> <div class=\"quart quart2\"> <span class=\"textQuart textQuartHaut\">précision</span> </div> <div class=\"quart quart3\"> <span class=\"textQuart textQuartBas\">anticipation</span> </div> <div class=\"quart quart4\"> <span class=\"textQuart textQuartBas\">équilibre</span> </div> </div> <div class=\"carac\"> <span class=\"textCarac\">psychique</span> <div class=\"quart quart1\"> <span class=\"textQuart textQuartHaut\">sagacité</span> </div> <div class=\"quart quart2 textQuartHaut\"> <span class=\"textQuart\">énergie</span> </div> <div class=\"quart quart3 textQuartBas\"> <span class=\"textQuart\">conscience</span> </div> <div class=\"quart quart4 textQuartBas\"> <span class=\"textQuart\">absorption</span> </div> </div> </div> "
  );


  $templateCache.put('app/modules/glob/accueil/views/entete.html',
    "Entete"
  );

}]);