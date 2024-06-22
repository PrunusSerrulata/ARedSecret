"use strict";

function ARS_DayPassed() {
    const fragment = document.createDocumentFragment();

    if (V.ARedSecret.flags.sunsetBookstoreVisited) { fragment.append(wikifier("bookstoreBooksUpdate")); }
    if (!V.ARedSecret.commissions.catherine.unlocked 
        && V.NPCName.find(e => e.nam === "Catherine").trust > 10 
        && (V.ARedSecret.lantern >= V.ARedSecret.IASkillGrades[3].requiredValue 
            || V.ARedSecret.winter >= V.ARedSecret.IASkillGrades[3].requiredValue 
            || V.ARedSecret.secrethistories >= V.ARedSecret.IASkillGrades[3].requiredValue)) {
        V.ARedSecret.temp.catherineCommissionReady = true;
    }

    return fragment;
}

const _pass = Time.pass;
Time.pass = function () {
    const prevDate = new DateTime(V.startDate + V.timeStamp);
    const fragment = _pass.apply(null, arguments);

    const currentDate = new DateTime(V.startDate + V.timeStamp);
    const minutes = Math.floor((currentDate.timeStamp - prevDate.timeStamp) / 60) || (60 + (currentDate.minute - prevDate.minute)) % 60;
    const hours = Math.floor(minutes / 60) || (24 + (currentDate.hour - prevDate.hour)) % 24;
    const days = Math.floor(hours / 24) || (prevDate.lastDayOfMonth + currentDate.day - prevDate.day) % prevDate.lastDayOfMonth;

    if (days) { fragment.append(ARS_DayPassed()); }
    
    return fragment;
}
