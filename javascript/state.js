"use strict";

Object.assign(V.ARedSecret, {
    latin: 0,
    greek: 0,
    sanskrit: 0,
    aramaic: 0,

    lantern: 0,
    forge: 0,
    edge: 0,
    winter: 0,
    heart: 0,
    grail: 0,
    moth: 0,
    knock: 0,
    secrethistories: 0,
});

V.ARedSecret.flags = {
    basicsRevealed: false,
    sunsetBookstoreVisited: false,
};

V.ARedSecret.daily = {
    bookstoreBooks: [],
};

Object.keys(V.ARedSecret.books).forEach (k => {
    Object.assign(V.ARedSecret.books[k], {
        finished: false,
        currentPart: 0,
    })
});

V.ARedSecret.bookshelf = {
    type: "basic",
    capacity: 10,
    books: [
        { id: "orchidtransfigurations1", translated: true},
        { id: "dehoris1" },
        { id: "dehoris1", translated: true },
        { id: "twentysixenticementsseventorments" },
    ],
    get occupancy() { return this.books.length / this.capacity },
};

V.ARedSecret.schoolLibInitBook = window.ARedSecret.utils.draw(schoolLibInitBooks)[0];

V.ARedSecret.temp = {};