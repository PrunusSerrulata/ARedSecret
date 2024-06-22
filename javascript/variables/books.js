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
            () => { 
                V.ARedSecret.flags.basicsRevealed = true;
                return "<<gainIAKnowledge 'grail' 50>><br><br>"; 
            },
        ],
    },
    travellingatnight1: {
        id: "travellingatnight1",
        principle: "moth",
        parts: [60],
        basePrice: 2000,
        effects: [
            () => { 
                V.ARedSecret.flags.basicsRevealed = true;
                return "<<gainIAKnowledge 'moth' 50>><br><br>"; 
            },
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
            () => { 
                V.ARedSecret.flags.basicsRevealed = true;
                return "<<gainIAKnowledge 'moth' 50>><br><br>"; 
            },
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
        parts: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        basePrice: 10000,
        effects: [
            () => { return "<<gainIAKnowledge 'lantern' 1>><br><br>"; },
            () => { return "<<gainIAKnowledge 'lantern' 24>><br><br>"; },
            () => { return "<<gainIAKnowledge 'lantern' 25>><br><br>"; },
            () => { return "<<gainIAKnowledge 'lantern' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'lantern' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'lantern' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'lantern' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'lantern' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'lantern' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'lantern' 225>><br><br>"; },
            () => { return "<<gainIAKnowledge 'lantern' 225>><br><br>"; },
        ],
    },
    test2: {
        id: "test2",
        principle: "forge",
        parts: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        basePrice: 10000,
        effects: [
            () => { return "<<gainIAKnowledge 'forge' 1>><br><br>"; },
            () => { return "<<gainIAKnowledge 'forge' 24>><br><br>"; },
            () => { return "<<gainIAKnowledge 'forge' 25>><br><br>"; },
            () => { return "<<gainIAKnowledge 'forge' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'forge' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'forge' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'forge' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'forge' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'forge' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'forge' 225>><br><br>"; },
            () => { return "<<gainIAKnowledge 'forge' 225>><br><br>"; },
        ],
    },
    test3: {
        id: "test3",
        principle: "edge",
        parts: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        basePrice: 10000,
        effects: [
            () => { return "<<gainIAKnowledge 'edge' 1>><br><br>"; },
            () => { return "<<gainIAKnowledge 'edge' 24>><br><br>"; },
            () => { return "<<gainIAKnowledge 'edge' 25>><br><br>"; },
            () => { return "<<gainIAKnowledge 'edge' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'edge' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'edge' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'edge' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'edge' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'edge' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'edge' 225>><br><br>"; },
            () => { return "<<gainIAKnowledge 'edge' 225>><br><br>"; },
        ],
    },
    test4: {
        id: "test4",
        principle: "winter",
        parts: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        basePrice: 10000,
        effects: [
            () => { return "<<gainIAKnowledge 'winter' 1>><br><br>"; },
            () => { return "<<gainIAKnowledge 'winter' 24>><br><br>"; },
            () => { return "<<gainIAKnowledge 'winter' 25>><br><br>"; },
            () => { return "<<gainIAKnowledge 'winter' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'winter' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'winter' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'winter' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'winter' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'winter' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'winter' 225>><br><br>"; },
            () => { return "<<gainIAKnowledge 'winter' 225>><br><br>"; },
        ],
    },
    test5: {
        id: "test5",
        principle: "heart",
        parts: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        basePrice: 10000,
        effects: [
            () => { return "<<gainIAKnowledge 'heart' 1>><br><br>"; },
            () => { return "<<gainIAKnowledge 'heart' 24>><br><br>"; },
            () => { return "<<gainIAKnowledge 'heart' 25>><br><br>"; },
            () => { return "<<gainIAKnowledge 'heart' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'heart' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'heart' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'heart' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'heart' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'heart' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'heart' 225>><br><br>"; },
            () => { return "<<gainIAKnowledge 'heart' 225>><br><br>"; },
        ],
    },
    test6: {
        id: "test6",
        principle: "grail",
        parts: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        basePrice: 10000,
        effects: [
            () => { return "<<gainIAKnowledge 'grail' 1>><br><br>"; },
            () => { return "<<gainIAKnowledge 'grail' 24>><br><br>"; },
            () => { return "<<gainIAKnowledge 'grail' 25>><br><br>"; },
            () => { return "<<gainIAKnowledge 'grail' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'grail' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'grail' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'grail' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'grail' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'grail' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'grail' 225>><br><br>"; },
            () => { return "<<gainIAKnowledge 'grail' 225>><br><br>"; },
        ],
    },
    test7: {
        id: "test7",
        principle: "moth",
        parts: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        basePrice: 10000,
        effects: [
            () => { return "<<gainIAKnowledge 'moth' 1>><br><br>"; },
            () => { return "<<gainIAKnowledge 'moth' 24>><br><br>"; },
            () => { return "<<gainIAKnowledge 'moth' 25>><br><br>"; },
            () => { return "<<gainIAKnowledge 'moth' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'moth' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'moth' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'moth' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'moth' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'moth' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'moth' 225>><br><br>"; },
            () => { return "<<gainIAKnowledge 'moth' 225>><br><br>"; },
        ],
    },
    test8: {
        id: "test8",
        principle: "knock",
        parts: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        basePrice: 10000,
        effects: [
            () => { return "<<gainIAKnowledge 'knock' 1>><br><br>"; },
            () => { return "<<gainIAKnowledge 'knock' 24>><br><br>"; },
            () => { return "<<gainIAKnowledge 'knock' 25>><br><br>"; },
            () => { return "<<gainIAKnowledge 'knock' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'knock' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'knock' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'knock' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'knock' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'knock' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'knock' 225>><br><br>"; },
            () => { return "<<gainIAKnowledge 'knock' 225>><br><br>"; },
        ],
    },
    test9: {
        id: "test9",
        principle: "secrethistories",
        parts: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        basePrice: 10000,
        effects: [
            () => { return "<<gainIAKnowledge 'secrethistories' 1>><br><br>"; },
            () => { return "<<gainIAKnowledge 'secrethistories' 24>><br><br>"; },
            () => { return "<<gainIAKnowledge 'secrethistories' 25>><br><br>"; },
            () => { return "<<gainIAKnowledge 'secrethistories' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'secrethistories' 50>><br><br>"; },
            () => { return "<<gainIAKnowledge 'secrethistories' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'secrethistories' 75>><br><br>"; },
            () => { return "<<gainIAKnowledge 'secrethistories' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'secrethistories' 125>><br><br>"; },
            () => { return "<<gainIAKnowledge 'secrethistories' 225>><br><br>"; },
            () => { return "<<gainIAKnowledge 'secrethistories' 225>><br><br>"; },
        ],
    },
    test_latin: {
        id: "test_latin",
        principle: "lantern",
        parts: [2, 4, 6, 8, 10, 12],
        basePrice: 10000,
        effects: [
            () => { return "<<gainLanguageKnowledge 'latin' 1>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'latin' 49>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'latin' 100>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'latin' 150>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'latin' 250>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'latin' 450>><br><br>"; },
        ],
    },
    test_greek: {
        id: "test_greek",
        principle: "lantern",
        parts: [2, 4, 6, 8, 10, 12],
        basePrice: 10000,
        effects: [
            () => { return "<<gainLanguageKnowledge 'greek' 1>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'greek' 49>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'greek' 100>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'greek' 150>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'greek' 250>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'greek' 450>><br><br>"; },
        ],
    },
    test_sanskrit: {
        id: "test_sanskrit",
        principle: "lantern",
        parts: [2, 4, 6, 8, 10, 12],
        basePrice: 10000,
        effects: [
            () => { return "<<gainLanguageKnowledge 'sanskrit' 1>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'sanskrit' 49>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'sanskrit' 100>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'sanskrit' 150>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'sanskrit' 250>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'sanskrit' 450>><br><br>"; },
        ],
    },
    test_aramaic: {
        id: "test_aramaic",
        principle: "lantern",
        parts: [2, 4, 6, 8, 10, 12],
        basePrice: 10000,
        effects: [
            () => { return "<<gainLanguageKnowledge 'aramaic' 1>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'aramaic' 49>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'aramaic' 100>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'aramaic' 150>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'aramaic' 250>><br><br>"; },
            () => { return "<<gainLanguageKnowledge 'aramaic' 450>><br><br>"; },
        ],
    },

    // #endregion
}