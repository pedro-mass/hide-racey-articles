// ==UserScript==
// @name         Hide Racey Articles
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Hide articles from sources that tend to talk about race.
// @author       You
// @match        *.lifehacker.com/*
// @match        *.kotaku.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==

(function () {
    'use strict';

    var triggerWords = ["The Grapevine"];

    triggerWords.forEach(function (triggerWord) {
        // hide from main page
        $("article:contains('" + triggerWord + "')").css("display", "none");
        // hide related from article page
        $("div.related-module--commerce:contains('" + triggerWord + "')").css("display", "none");
        // hide more from lifehacker
        $("li.thumb-inset:contains('" + triggerWord + "')").css("display", "none");
    })
})();
