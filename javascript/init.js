"use strict";

window.V.ARedSecret = window.V.ARedSecret ?? {};

let zip = window.modSC2DataManager.getModLoader().getModByNameOne("ARedSecret").zip.zip;
let locFile = zip.file("localisation/" + navigator.language + ".json") ?? zip.file("localisation/zh-CN.json");
locFile.async("string").then((v) => {
    window.V.ARedSecret.loc = JSON.parse(v);
});

window.V.ARedSecret.latin = 0;
window.V.ARedSecret.greek = 0;
window.V.ARedSecret.sanskrit = 0;
window.V.ARedSecret.aramaic = 0;

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
        }
    ],
    occupancy: function () { return this.books.length / this.capacity },
};

let schoolLibBooks = [
    { id: "skeletonsongs" },
    { id: "travellingatnight1" },
    { id: "dehoris1", translated: true },
];

window.V.ARedSecret.schoolLibInitBook = window.ARedSecret.utils.draw(schoolLibBooks);