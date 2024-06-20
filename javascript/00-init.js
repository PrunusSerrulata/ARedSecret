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
    { id: "test_latin" },
    { id: "test_greek" },
    { id: "test_sanskrit" },
    { id: "test_aramaic" },
    { id: "orchidtransfigurations1" },
    { id: "orchidtransfigurations1", translated: true },
    { id: "skeletonsongs" },
    { id: "travellingatnight1" },
    { id: "dehoris1" },
    { id: "dehoris1", translated: true },
    { id: "twentysixenticementsseventorments" },
    { id: "twentysixenticementsseventorments", translated: true },
];

Object.assign(V.ARedSecret, {
    languageSkillGrades: [
        { requiredValue: 0,    level: "$ARedSecret.loc.none", color: 'red'},
        { requiredValue: 1,    level: "F",    color: 'pink'},
        { requiredValue: 50,  level: "D",    color: 'purple'},
        { requiredValue: 150,  level: "C",    color: 'blue'},
        { requiredValue: 300,  level: "B",    color: 'lblue'},
        { requiredValue: 550,  level: "A",    color: 'teal'},
        { requiredValue: 1000, level: "S",    color: 'green'},
    ],
    IASkillGrades: [
        { requiredValue: 0,    level: "$ARedSecret.loc.none", color: 'red'},
        { requiredValue: 1,    level: "F",    color: 'pink'},
        { requiredValue: 25,   level: "F+",   color: 'pink'},
        { requiredValue: 50,  level: "D",    color: 'purple'},
        { requiredValue: 100,  level: "D+",   color: 'purple'},
        { requiredValue: 150,  level: "C",    color: 'blue'},
        { requiredValue: 225,  level: "C+",   color: 'blue'},
        { requiredValue: 300,  level: "B",    color: 'lblue'},
        { requiredValue: 425,  level: "B+",   color: 'lblue'},
        { requiredValue: 550,  level: "A",    color: 'teal'},
        { requiredValue: 775,  level: "A+",   color: 'teal'},
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