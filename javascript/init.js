"use strict";

window.V.ARedSecret = window.V.ARedSecret ?? {};

let zip = window.modSC2DataManager.getModLoader().getModByNameOne("ARedSecret").zip.zip;
let locFile = zip.file("localisation/" + navigator.language + ".json") ?? zip.file("localisation/zh-CN.json");
locFile.async("string").then((v) => {
    window.V.ARedSecret.loc = JSON.parse(v);
});

Object.assign(window.V.ARedSecret, {
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


window.V.ARedSecret.bookshelf = {
    type: "basic",
    capacity: 10,
    books: [
        {
            id: "orchidtransfigurations1",
            translated: false,
        },
        {
            id: "orchidtransfigurations1",
            translated: true,
        },
        {
            id: "twentysixenticementsseventorments",
            translated: true,
        }
    ],
    getOccupancy: function () { return this.books.length / this.capacity },
};

let schoolLibBooks = [
    { id: "skeletonsongs" },
    { id: "travellingatnight1" },
    { id: "dehoris1", translated: true },
];

window.V.ARedSecret.schoolLibInitBook = window.ARedSecret.utils.draw(schoolLibBooks);