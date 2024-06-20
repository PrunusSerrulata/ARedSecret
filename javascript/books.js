"use strict";

V.ARedSecret.books = {
    orchidtransfigurations1: {
        id: "orchidtransfigurations1",
        principle: "grail",
        parts: [60],
        language: "latin",
        requirements: {
            language: 100,
        },
        basePrice: 2000,
        effects: [
            () => { return "<<gainIAKnowledge 'grail' 50>><br><br>"; },
        ],
    },
    skeletonsongs: {
        id: "skeletonsongs",
        principle: "grail",
        parts: [60],
        basePrice: 2000,
        effects: [
            () => { return "<<gainIAKnowledge 'grail' 50>><br><br>"; },
        ],
    },
    travellingatnight1: {
        id: "travellingatnight1",
        principle: "moth",
        parts: [60],
        basePrice: 2000,
        effects: [
            () => { return "<<gainIAKnowledge 'moth' 50>><br><br>"; },
        ],
    },
    dehoris1: {
        id: "dehoris1",
        principle: "moth",
        parts: [60],
        language: "latin",
        requirements: {
            language: 100,
        },
        basePrice: 2000,
        effects: [
            () => { return "<<gainIAKnowledge 'moth' 50>><br><br>"; },
        ],
    },
    twentysixenticementsseventorments: {
        id: "twentysixenticementsseventorments",
        principle: "grail",
        parts: [240],
        language: "latin",
        requirements: {
            language: 500,
            invisibleArt: {
                type: "grail",
                value: 425,
            },
        },
        basePrice: 10000,
        effects: [
            () => { return "<<gainIAKnowledge 'grail' 150>><br><br>"; },
        ],
    },

    // #region test books

    test1: {
        id: "test1",
        principle: "lantern",
        parts: [60],
        basePrice: 10000,
        effects: [
            () => {},
        ],
    },
    test2: {
        id: "test2",
        principle: "forge",
        parts: [60],
        basePrice: 10000,
        effects: [
            () => {},
        ],
    },
    test3: {
        id: "test3",
        principle: "edge",
        parts: [60],
        basePrice: 10000,
        effects: [
            () => {},
        ],
    },
    test4: {
        id: "test4",
        principle: "winter",
        parts: [60],
        basePrice: 10000,
        effects: [
            () => {},
        ],
    },
    test5: {
        id: "test5",
        principle: "heart",
        parts: [60],
        basePrice: 10000,
        effects: [
            () => {},
        ],
    },
    test6: {
        id: "test6",
        principle: "grail",
        parts: [60],
        basePrice: 10000,
        effects: [
            () => {},
        ],
    },
    test7: {
        id: "test7",
        principle: "moth",
        parts: [60],
        basePrice: 10000,
        effects: [
            () => {},
        ],
    },
    test8: {
        id: "test8",
        principle: "knock",
        parts: [60],
        basePrice: 10000,
        effects: [
            () => {},
        ],
    },
    test9: {
        id: "test9",
        principle: "secrethistories",
        parts: [60],
        basePrice: 10000,
        effects: [
            () => {},
        ],
    },

    // #endregion
}