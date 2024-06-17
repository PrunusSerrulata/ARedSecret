"use strict";

window.V.ARedSecret = window.V.ARedSecret ?? {};

window.V.ARedSecret.books = {
    orchidtransfigurations1: {
        id: "orchidtransfigurations1",
        finished: false,
        parts: [60],
        currentPart: 0,
        language: "latin",
        requirements: {
            language: 200,
        },
        basePrice: 2000,
        effects: [
            function () { $("#finish-effects-output").wiki("<<gainIAKnowledge 'grail' 50>><br><br>"); },
        ],
    },
    skeletonsongs: {
        id: "skeletonsongs",
        finished: false,
        parts: [60],
        currentPart: 0,
        basePrice: 2000,
        effects: [
            () => { return 0; },
        ],
    },
    travellingatnight1: {
        id: "travellingatnight1",
        finished: false,
        parts: [60],
        currentPart: 0,
        basePrice: 2000,
        effects: [
            () => { return 0; },
        ],
    },
    dehoris1: {
        id: "dehoris1",
        finished: false,
        parts: [60],
        currentPart: 0,
        language: "latin",
        requirements: {
            language: 200,
        },
        basePrice: 2000,
        effects: [
            () => { return 0; },
        ],
    },
    twentysixenticementsseventorments: {
        id: "twentysixenticementsseventorments",
        finished: false,
        parts: [240],
        currentPart: 0,
        language: "latin",
        requirements: {
            language: 800,
            invisibleArt: {
                type: "grail",
                value: 600,
            },
        },
        basePrice: 10000,
        effects: [
            () => { return 0; },
        ],
    }
}