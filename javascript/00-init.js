"use strict";

V.ARedSecret = V.ARedSecret ?? {};

const schoolLibInitBooks = [
    { id: "skeletonsongs" },
    { id: "travellingatnight1" },
    { id: "dehoris1", translated: true },
];

V.ARedSecret.bookstoreInventory = [
    { id: "test1" },
    { id: "test2" },
    { id: "test3" },
    { id: "test4" },
    { id: "test5" },
    { id: "test6" },
    { id: "test7" },
    { id: "test8" },
    { id: "test9" },
    { id: "orchidtransfigurations1" },
    { id: "orchidtransfigurations1", translated: true },
    { id: "skeletonsongs" },
    { id: "travellingatnight1" },
    { id: "dehoris1" },
    { id: "dehoris1", translated: true },
    { id: "twentysixenticementsseventorments" },
    { id: "twentysixenticementsseventorments", translated: true },
];

Object.assign(window.V.ARedSecret, {
    languageSkillGrades: [
        { requiredValue: 0,    level: "$ARedSecret.loc.none", color: 'red'},
        { requiredValue: 1,    level: "F",    color: 'pink'},
        { requiredValue: 100,  level: "D",    color: 'purple'},
        { requiredValue: 200,  level: "C",    color: 'blue'},
        { requiredValue: 350,  level: "B",    color: 'lblue'},
        { requiredValue: 500,  level: "A",    color: 'teal'},
        { requiredValue: 1000, level: "S",    color: 'green'},
    ],
    IASkillGrades: [
        { requiredValue: 0,    level: "$ARedSecret.loc.none", color: 'red'},
        { requiredValue: 1,    level: "F",    color: 'pink'},
        { requiredValue: 50,   level: "F+",   color: 'pink'},
        { requiredValue: 100,  level: "D",    color: 'purple'},
        { requiredValue: 150,  level: "D+",   color: 'purple'},
        { requiredValue: 200,  level: "C",    color: 'blue'},
        { requiredValue: 275,  level: "C+",   color: 'blue'},
        { requiredValue: 350,  level: "B",    color: 'lblue'},
        { requiredValue: 425,  level: "B+",   color: 'lblue'},
        { requiredValue: 500,  level: "A",    color: 'teal'},
        { requiredValue: 750,  level: "A+",   color: 'teal'},
        { requiredValue: 1000, level: "S",    color: 'green'},
    ],

    bookshelves: {
        basic: {
            type: "basic",
            capacity: 10,
        },
        big: {
            type: "big",
            capacity: 20,
        },
    }
});