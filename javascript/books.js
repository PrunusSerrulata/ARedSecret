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
            () => { $("#finish-effects-output").wiki("<<gainIAKnowledge 'grail' 50>><br><br>"); },
        ],
    },
    skeletonsongs: {
        id: "skeletonsongs",
        finished: false,
        parts: [60],
        currentPart: 0,
        basePrice: 2000,
        effects: [
            () => { $("#finish-effects-output").wiki("<<gainIAKnowledge 'grail' 50>><br><br>"); },
        ],
    },
    travellingatnight1: {
        id: "travellingatnight1",
        finished: false,
        parts: [60],
        currentPart: 0,
        basePrice: 2000,
        effects: [
            () => { $("#finish-effects-output").wiki("<<gainIAKnowledge 'moth' 50>><br><br>"); },
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
            () => { $("#finish-effects-output").wiki("<<gainIAKnowledge 'moth' 50>><br><br>"); },
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
            () => { $("#finish-effects-output").wiki("<<gainIAKnowledge 'grail' 150>><br><br>"); },
        ],
    }
}