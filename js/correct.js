// ==UserScript==
// @name         Manu Auto Correct
// @namespace    https://raw.githubusercontent.com/Bo-Duke/Manu-Auto-Correct/master/js/correct.js
// @version      3.2
// @description  Bon alors déjà c'est M. Le Président.
// @author       Bo-Duke
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var textNode;
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT,null,false);
const rExp = new RegExp('Emmanuel Macron|'+
	'EmmanuelMacron|'+
	'M[\.r] le Président de la République|'+ // Keep the dot in case of "Mr" or "M."
	'le Président de la République|'+ // Put this one after, so that the one above matches first
	'Monsieur le Président de la République|'+
	'Monsieur le Président|'+
	'Président de la République française|'+
	'Président de la République|' +
	'Le Président Macron|' +
	'Emmanuel Jean-Michel Frédéric Macron|' +
	'M[\.r] Macron', 'gi');

while(textNode=walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue.replace(rExp, 'Manu');
}

document.title = document.title.replace(rExp, 'Manu');



})();
