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
const minusCreds = {
    "m CHOCOLATE BAR": -35,
    "m HARDTACK": -5,
    "m SODA CAN": -30,
    "m WATER CANTEEN": -10,
    "m WATER BOTTLE": -15,
    "m KITCHEN KNIFE": -10,
    "m METAL PIPE": -40,
    "m MONKEY WRENCH": -25,
    "m MACHETE": -150,
    "m SHOVEL": -40,
    "m FIRE AXE": -100,
    "m SLEDGEHAMMER": -150,
    "m SPEAR": -40,
    "m GLAIVE": -350,
    "m SMG": -1000,
    "m PIPE SMG": -750,
    "m PIPE-MACHINE PISTOL": -600,
    "m SCRAP REVOLVER": -2500,
    "m SCRAP PISTOL": -100,
    "m X16": -1000,
    "m SMG MAG": -200,
    "m PIPE SMG MAG": -150,
    "m PIPE SHOTGUN SHELL": -90,
    "m PIPE-MACHINE PISTOL MAG": -120,
    "m SCRAP REVOLVER BULLET": -200,
    "m PIPE ASSAULT RIFLE MAG": 0,
    "m SCRAP PISTOL BULLET": -20,
    "m X16 MAG": -200,
    "m BATTERY": -5000,
    "m FLASHLIGHT": -30,
    "m FLOODLIGHT": -50,
    "m CIVILIAN RADIO": -125,
    "m BLUE GLOWSTICK": -150,
    "m PURPLE GLOWSTICK": -450,
    "m GREEN GLOWSTICK": -250,
    "m WHITE GLOWSTICK": -1000,
    "m LIGHTER": -200,
    "m SCRAP LIGHTER": -50,
    "m BANDAGE": -200,
    "m FILM CAMERA": -50,
    "m EMPLACEMENT FLOODLIGHT": -250,
    "m EMPLACEMENT POINTLIGHT": -350,
    "m EMPLACEMENT SCRAP LANTERN": -300,
    "m TRAFFIC BARRIER": -200,
}
const geartiercred = {
    "LOW TIER GEAR": 50,
    "MEDIUM TIER GEAR": 100,
    "HIGH TIER GEAR": 200
}
const geartierrep = {
    "LOW TIER GEAR": 50,
    "MEDIUM TIER GEAR": 70,
    "HIGH TIER GEAR": 100
}

const itemNameMap = {};
for (let key in credits) {
    itemNameMap[key.toLowerCase()] = key;
}

const itemSelect = document.getElementById("itemInput");
const penaltySelect = document.getElementById("penaltyItemInput");

function populateDropdown(selectElement) {
    for (const itemName in credits) {
        const option = document.createElement("option");
        option.value = itemName;
        option.textContent = itemName;
        selectElement.appendChild(option);
    }
}

populateDropdown(itemSelect);
populateDropdown(penaltySelect);

let total = 0;
let addedItems = [];
let reputationTotal = 0;

const reputationDisplay = document.getElementById("totalReputation");
const quantityInput = document.getElementById("itemQuantity");
const addBtn = document.getElementById("addItem");
const itemList = document.getElementById("itemList");
const totalDisplay = document.getElementById("totalCredits");
const erroMsg = document.getElementById("erroMsg");
const penaltyQuantityInput = document.getElementById("penaltyQuantity");
const addPenaltyBtn = document.getElementById("addPenaltyItem");

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
    const item = itemSelect.value;
    const quantity = parseInt(quantityInput.value) || 1;

    if (!item) {
        erroMsg.textContent = "Please select an item.";
        return;
    }

    if (quantity < 1) {
        erroMsg.textContent = "Invalid quantity.";
        return;
    }

    erroMsg.textContent = "";
    addedItems.push(`${item} x${quantity}`);

    if (minusCreds.hasOwnProperty(item)) {
        total += minusCreds[item] * quantity;
    } else {
        total += credits[item] * quantity;
    }

    reputationTotal += reputation[item] * quantity;

    updateDisplay();

    erroMsg.style.color = "limegreen";
    erroMsg.textContent = "Item added successfully!";
    setTimeout(() => { erroMsg.textContent = ""; }, 1500);

});

addPenaltyBtn.addEventListener("click", () => {
    const item = penaltySelect.value;
    const quantity = parseInt(penaltyQuantityInput.value) || 1;

    if (!item) {
        erroMsg.textContent = "Please select an item.";
        return;
    }

    if (quantity < 1) {
        erroMsg.textContent = "Invalid quantity.";
        return;
    }

    const penaltyKey = `m ${item}`;
    if (!minusCreds.hasOwnProperty(penaltyKey)) {
        erroMsg.textContent = `Item "${item}" does not have a registered purchase value.`;
        return;
    }

    erroMsg.textContent = "";
    addedItems.push(`${item} x${quantity} (purchase)`);

    total += (credits[item] || 0) * quantity;
    total += minusCreds[penaltyKey] * quantity;

    updateDisplay();
    erroMsg.style.color = "limegreen";
    erroMsg.textContent = "Item added successfully!";
    setTimeout(() => { erroMsg.textContent = ""; }, 1500);

});

const gearTierSelect = document.getElementById("gearTierInput");
const gearTierQuantityInput = document.getElementById("gearTierQuantity");
const addGearTierBtn = document.getElementById("addGearTier");

addGearTierBtn.addEventListener("click", () => {
    const gearTier = gearTierSelect.value;
    const quantity = parseInt(gearTierQuantityInput.value) || 1;

    if (!gearTier) {
        erroMsg.textContent = "Please select a gear tier.";
        return;
    }

    if (quantity < 1) {
        erroMsg.textContent = "Invalid quantity.";
        return;
    }

    erroMsg.textContent = "";
    addedItems.push(`${gearTier} x${quantity} (Recovery)`);

    const credValue = geartiercred[gearTier] || 0;
    const repValue = geartierrep[gearTier] || 0;

    total += credValue * quantity;
    reputationTotal += repValue * quantity;

    updateDisplay();
    erroMsg.style.color = "limegreen";
    erroMsg.textContent = "Item added successfully!";
    setTimeout(() => { erroMsg.textContent = ""; }, 1500);
});

const clearAllBtn = document.getElementById("clearAllBtn");

clearAllBtn.addEventListener("click", () => {
    addedItems = [];
    total = 0;
    reputationTotal = 0;
    erroMsg.textContent = "";
    quantityInput.value = "1";
    penaltyQuantityInput.value = "1";
    gearTierQuantityInput.value = "1";
    updateDisplay();

    erroMsg.style.color = "limegreen";
    erroMsg.textContent = "All items and totals cleared!";
    setTimeout(() => { erroMsg.textContent = ""; }, 1500);
});
