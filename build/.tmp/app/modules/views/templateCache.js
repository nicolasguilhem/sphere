angular.module('sphere').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/glob/accueil/views/accueil.html',
    "<div> <div class=\"caracGroup carac1\"> <div class=\"carac carac1\"> <span class=\"textCarac carac1\">physique</span> <div class=\"quart quart1\"> <span class=\"textQuart textQuartHaut\">martialité</span> </div> <div class=\"quart quart2\"> <span class=\"textQuart textQuartHaut\">force</span> </div> <div class=\"quart quart3\"> <span class=\"textQuart textQuartBas\">mobilité</span> </div> <div class=\"quart quart4\"> <span class=\"textQuart textQuartBas\">solidité</span> </div> </div> </div> <div class=\"caracGroup carac2\"> <div class=\"carac carac2\"> <span class=\"textCarac carac2\">sensorielle</span> <div class=\"quart quart1\"> <span class=\"textQuart textQuartHaut\">perception</span> </div> <div class=\"quart quart2\"> <span class=\"textQuart textQuartHaut\">précision</span> </div> <div class=\"quart quart3\"> <span class=\"textQuart textQuartBas\">anticipation</span> </div> <div class=\"quart quart4\"> <span class=\"textQuart textQuartBas\">équilibre</span> </div> </div> </div> <div class=\"caracGroup carac3\"> <div class=\"carac carac3\"> <span class=\"textCarac carac3\">psychique</span> <div class=\"quart quart1\"> <span class=\"textQuart textQuartHaut\">sagacité</span> </div> <div class=\"quart quart2\"> <span class=\"textQuart textQuartHaut\">énergie</span> </div> <div class=\"quart quart3\"> <span class=\"textQuart textQuartBas\">conscience</span> </div> <div class=\"quart quart4\"> <span class=\"textQuart textQuartBas\">absorption</span> </div> </div> </div> </div> "
  );


  $templateCache.put('app/modules/glob/accueil/views/entete.html',
    "Entete"
  );

}]);
