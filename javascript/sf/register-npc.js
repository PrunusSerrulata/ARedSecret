NamedNPC.add(
    new NamedNPC(
        "Catherine",
        ["<<= $ARedSecret.loc.npcs.catherine.title>>", "<<= $ARedSecret.loc.npcs.catherine.title>>"],
        ["<<= $ARedSecret.loc.npcs.catherine.name>>", "<<= $ARedSecret.loc.npcs.catherine.name>>"],
        // ["Bookstore owner", "书店老板"],
        // ["Catherine", "凯瑟琳"],
        "human"
    )
        .Init("f", "adult")
        .setBreasts(5, "Cup")
        .setColour("white", "grey", "grey")
);

const ARS_NPCSetting = {
     Catherine : {
        trust : { maxValue : 50 }
    },
};

Object.assign(setup.ModNpcSetting, ARS_NPCSetting);