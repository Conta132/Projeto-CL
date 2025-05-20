const credits = {
    "ROYAL RATION": 500,
    "METAL PIPE": 5,
    "MONKEY WRENCH": 5,
    "MACHETE": 50,
    "SHOVEL": 10,
    "SLEDGEHAMMER": 65,
    "SPEAR": 25,
    "GLAIVE": 200,
    "SCAVENGER'S SPEAR": 750,
    "SCAVENGER'S ELETRICAL SPEAR": 40000,
    "MURAMASA": 2000,
    "SMG": 200,
    "PIPE SMG": 100,
    "PIPE SHOTGUN": 650,
    "PIPE-MACHINE PISTOL": 75,
    "SCRAP REVOLVER": 300,
    "PIPE ASSAULT RIFLE": 850,
    "SCRAP PISTOL": 25,
    "SMG MAG": 100,
    "PIPE SMG MAG": 60,
    "PIPE-MACHINE PISTOL MAG": 40,
    "SCRAP REVOLVER BULLET": 75,
    "PIPE ASSAULT RIFLE MAG": 175,
    "SCRAP PISTOL BULLET": 10,
    "METAL INGOT": 75,
    "GOLD BAR": 25,
    "RED GLOWSTICK": 250,
    "PURPLE GLOWSTICK": 100,
    "YELLOW GLOWSTICK": 250,
    "WHITE GLOWSTICK": 400,
    "SCRAP LIGHTER": 10,
    "EMPLACEMENT FLOODLIGHT": 50,
    "EMPLACEMENT POINTLIGHT": 55,
    "EMPLACEMENT SCRAP LANTERN": 100,
    "TRAFFIC BARRIER": 150,
    "FOLDING BARRIER": 400,
    "UNUSUAL LANTERN": 3000,
    "PALE KEY": 5000,
    "STRANGE GAS MASK": 4000,
    "SCAVENGER'S ORANGE LANTERN": 20000,
    "FOOD BAR": 0,
    "SMALL FOOD BAR": 0,
    "CHOCOLATE BAR": 0,
    "HARDTACK": 0,
    "SODA CAN": 0,
    "WATER CANTEEN": 0,
    "WATER BOTTLE": 0,
    "KITCHEN KNIFE": 0,
    "FIRE AXE": 0,
    "HUNTING KNIFE": 0,
    "MILK CARTON": 0,
    "X16": 0,
    "X16 MAG": 0,
    "BATTERY": 0,
    "FLASHLIGHT": 0,
    "FLOODLIGHT": 0,
    "CIVILIAN RADIO": 0,
    "LIGHTER": 0,
    "BANDAGE": 0,
    "FILM CAMERA": 0
};

const reputation = {
    "ROYAL RATION": 500,
    "METAL PIPE": 0,
    "MONKEY WRENCH": 0,
    "MACHETE": 50,
    "SHOVEL": 0,
    "SLEDGEHAMMER": 50,
    "SPEAR": 20,
    "GLAIVE": 50,
    "SCAVENGER'S SPEAR": 450,
    "SCAVENGER'S ELETRICAL SPEAR": 3100,
    "MURAMASA": 1000,
    "SMG": 75,
    "PIPE SMG": 50,
    "PIPE SHOTGUN": 250,
    "PIPE-MACHINE PISTOL": 40,
    "SCRAP REVOLVER": 200,
    "PIPE ASSAULT RIFLE": 300,
    "SCRAP PISTOL": 10,
    "SMG MAG": 40,
    "PIPE SMG MAG": 20,
    "PIPE-MACHINE PISTOL MAG": 10,
    "SCRAP REVOLVER BULLET": 25,
    "PIPE ASSAULT RIFLE MAG": 70,
    "SCRAP PISTOL BULLET": 15,
    "METAL INGOT": 10,
    "GOLD BAR": 20,
    "RED GLOWSTICK": 40,
    "PURPLE GLOWSTICK": 55,
    "YELLOW GLOWSTICK": 40,
    "WHITE GLOWSTICK": 100,
    "SCRAP LIGHTER": 5,
    "EMPLACEMENT FLOODLIGHT": 150,
    "EMPLACEMENT POINTLIGHT": 200,
    "EMPLACEMENT SCRAP LANTERN": 150,
    "TRAFFIC BARRIER": 250,
    "FOLDING BARRIER": 350,
    "UNUSUAL LANTERN": 1000,
    "PALE KEY": 800,
    "STRANGE GAS MASK": 2000,
    "SCAVENGER'S ORANGE LANTERN": 1000,
    "FOOD BAR": 0,
    "SMALL FOOD BAR": 0,
    "CHOCOLATE BAR": 0,
    "HARDTACK": 0,
    "SODA CAN": 0,
    "WATER CANTEEN": 0,
    "WATER BOTTLE": 0,
    "KITCHEN KNIFE": 0,
    "FIRE AXE": 0,
    "HUNTING KNIFE": 0,
    "MILK CARTON": 0,
    "X16": 0,
    "X16 MAG": 0,
    "BATTERY": 0,
    "FLASHLIGHT": 0,
    "FLOODLIGHT": 0,
    "CIVILIAN RADIO": 0,
    "LIGHTER": 0,
    "BANDAGE": 0,
    "FILM CAMERA": 0
}

const itemNameMap = {};
for (let key in credits) {
    itemNameMap[key.toLowerCase()] = key;
}

let total = 0;
let addedItems = [];
let reputationTotal = 0;

const reputationDisplay = document.getElementById("totalReputation");
const quantityInput = document.getElementById("itemQuantity");
const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addItem");
const resetBtn = document.getElementById("resetList");
const itemList = document.getElementById("itemList");
const totalDisplay = document.getElementById("totalCredits");
const erroMsg = document.getElementById("erroMsg");

function updateDisplay() {
    itemList.innerHTML = "";
    addedItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        itemList.appendChild(li);
    });
    totalDisplay.textContent = total;
    reputationDisplay.textContent = reputationTotal;
}


addBtn.addEventListener("click", () => {
    const userInput = input.value.trim().toLowerCase();
    const quantity = parseInt(quantityInput.value) || 1;

    if (!userInput) return;

    const item = itemNameMap[userInput];
    if (!item) {
        erroMsg.textContent = `Item "${input.value}" não encontrado.`;
        return;
    }

    if (quantity < 1) {
        erroMsg.textContent = "Quantidade inválida.";
        return;
    }

    erroMsg.textContent = "";
    addedItems.push(`${item} x${quantity}`);
    total += credits[item] * quantity;
    reputationTotal += reputation[item] * quantity;

    input.value = "";
    quantityInput.value = "1";

    updateDisplay();
});



resetBtn.addEventListener("click", () => {
    addedItems = [];
    total = 0;
    reputationTotal = 0;
    erroMsg.textContent = "";
    input.value = "";
    quantityInput.value = "1";
    updateDisplay();
});

