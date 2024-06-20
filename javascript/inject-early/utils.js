"use strict";

window.ARedSecret ??= {};

window.ARedSecret.utils = {
    isFileExists(path) {
        return window.modUtils.getModZip("ARedSecret")._zip.files[path]
    },

    deepEqual(x, y) {
        const ok = Object.keys, tx = typeof x, ty = typeof y;
        return x && y && tx === 'object' && tx === ty ? (
            ok(x).length === ok(y).length &&
            ok(x).every(key => deepEqual(x[key], y[key]))
        ) : (x === y);
    },

    getHourTimeString(minutes) {
        return parseInt(minutes/60) + ":" + (""+(minutes % 60)).padStart(2, "0");
    },

    getSkillLevel(score, type) {
        let index, grades;

        switch (type) {
            case "language":
            case "lang":
            case 0:
                grades = window.V.ARedSecret.languageSkillGrades;
                break;
            case "invisible arts":
            case "ia":
            case 1:
                grades = window.V.ARedSecret.IASkillGrades;
                break;
            default:
                return;
        }

        for (let i = 0; i < grades.length; i++) {
            if (score >= grades[i].requiredValue) {
                index = i;
            }
        }
        return { index: index, level: grades[index] };
    },

    getSkillLevelText(score, type) {
        const level = this.getSkillLevel(score, type).level;
        return `<span class="${level.color}">${level.level}</span>`;
    },

    getCappedSkillLevel(type, subjectLevel) {
        let maxLevel, grades;
        switch (type) {
            case "language":
            case "lang":
            case 0:
                grades = window.V.ARedSecret.languageSkillGrades;
                maxLevel = Math.min(2 + subjectLevel, grades.length);
                break;
            case "invisible arts":
            case "ia":
            case 1:
                grades = window.V.ARedSecret.IASkillGrades;
                maxLevel = Math.min(4 + subjectLevel*2, grades.length);
                break;
            default:
                return;
        }
        return { maxLevel: maxLevel, maxScore: grades[maxLevel].requiredValue };
    },

    draw(array, n = 1) {
        if (n <= 0) {
            return [];
        } else if (n >= array.length) {
            return array;
        }

        let temp = [...array]
        let res = [];
        for (let i = 0; i < n; i++) {
            let index = Math.floor(Math.random() * temp.length);
            let item = temp[index];
            res.push(item);
            temp.splice(index, 1);
        }
        return res;
    },
};