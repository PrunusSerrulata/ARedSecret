"use strict";

let zip = modSC2DataManager.getModLoader().getModByNameOne("ARedSecret").zip.zip;
let locFile = zip.file("localisation/" + navigator.language + ".json") ?? zip.file("localisation/zh-CN.json");
locFile.async("string").then((v) => {
    V.ARedSecret.loc = JSON.parse(v);
});