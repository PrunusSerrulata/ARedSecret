"use strict";

window.ARedSecret = window.ARedSecret || {};

window.ARedSecret.utils = {
    getHourTimeString: function (minutes) {
        return parseInt(minutes/60) + ":" + (""+(minutes % 60)).padStart(2, "0");
    },

    getSkillLevelFromScore: function (score) {
        if (score >= 1000) { return "<span class=\"green\">S</span>"; }
        else if (score < 1000 && score >= 900) { return "<span class=\"teal\">A+</span>"; }
        else if (score < 900 && score >= 800) { return "<span class=\"teal\">A</span>"; }
        else if (score < 800 && score >= 700) { return "<span class=\"lblue\">B+</span>"; }
        else if (score < 700 && score >= 600) { return "<span class=\"lblue\">B</span>"; }
        else if (score < 600 && score >= 500) { return "<span class=\"blue\">C+</span>"; }
        else if (score < 500 && score >= 400) { return "<span class=\"blue\">C</span>"; }
        else if (score < 400 && score >= 300) { return "<span class=\"purple\">D+</span>"; }
        else if (score < 300 && score >= 200) { return "<span class=\"purple\">D</span>"; }
        else if (score < 200 && score >= 100) { return "<span class=\"pink\">F+</span>"; }
        else if (score < 100 && score >= 1) { return "<span class=\"pink\">F</span>"; }
        else { return "<span class=\"red\">$ARedSecret.loc.none</span>"; }
    },

    draw: function (array) { return array[Math.floor(Math.random()*array.length)]; }
};