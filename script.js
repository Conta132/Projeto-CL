const materialMetal = {
    "EMPLACEMENT FLOODLIGHT": 5,
    "EMPLACEMENT POINTLIGHT": 10,
    "EXTENDING LADDER": 50,
    "FIRE AXE": 7,
    "FOLDING BARRIER": 40,
    "GLAIVE": 10,
    "KITCHEN KNIFE": 1,
    "MACHETE": 5,
    "METAL PIPE": 1,
    "MONKEY WRENCH": 1,
    "PURPLE GLOWSTICK": 1,
    "ROYAL RATION": 60,
    "SCRAP REVOLVER": 30,
    "SLEDGEHAMMER": 10,
    "SMG": 25,
    "X16": 10,
    "PIPE SHOTGUN": 30,
    "PIPE SMG": 15,
    "PIPE-MACHINE PISTOL": 10,
    "SHOVEL": 3,
    "TRAFFIC BARRIER": 10,
    "WHITE GLOWSTICK": 5
};

const materialGold = {
    "CHOCOLATE BAR": 0,
    "FOOD BAR": 0,
    "HARDTACK": 0,
    "PIPE ASSAULT RIFLE MAG": 0,
    "PIPE ASSAULT RIFLE": 0,
    "PIPE RIFLE": 0,
    "SMALL FOOD BAR": 0,
    "SODA CAN": 1,
    "SCRAP PISTOL BULLET": 3,
    "SCRAP PISTOL": 3,
    "PIPE SMG MAG": 5,
    "PIPE SHOTGUN SHELL": 5,
    "PIPE-MACHINE PISTOL MAG": 5,
    "SCRAP REVOLVER BULLET": 10,
    "SMG MAG": 7,
    "SPEAR": 5,
    "WATER BOTTLE": 1,
    "X16 MAG": 5,
    "EMPLACEMENT SCRAP LANTERN": 5
};

const reputation = {
    "ROYAL RATION": 200,
    "METAL PIPE": 0,
    "MONKEY WRENCH": 5,
    "MACHETE": 50,
    "SHOVEL": 10,
    "SLEDGEHAMMER": 50,
    "SPEAR": 30,
    "GLAIVE": 50,
    "SCAVENGER'S SPEAR": 250,
    "SCAVENGER'S ELETRICAL SPEAR": 2000,
    "MURAMASA": 500,
    "SMG": 200,
    "PIPE SMG": 150,
    "PIPE SHOTGUN": 400,
    "PIPE-MACHINE PISTOL": 40,
    "SCRAP REVOLVER": 300,
    "PIPE RIFLE": 0,
    "PIPE ASSAULT RIFLE": 0,
    "SCRAP PISTOL": 10,
    "SMG MAG": 60,
    "PIPE SMG MAG": 40,
    "PIPE-MACHINE PISTOL MAG": 20,
    "SCRAP REVOLVER BULLET": 30,
    "PIPE ASSAULT RIFLE MAG": 0,
    "SCRAP PISTOL BULLET": 10,
    "METAL INGOT": 20,
    "GOLD BAR": 10,
    "RED GLOWSTICK": 5,
    "PURPLE GLOWSTICK": 5,
    "GREEN GLOWSTICK": 0,
    "BLUE GLOWSTICK": 0,
    "YELLOW GLOWSTICK": 5,
    "WHITE GLOWSTICK": 20,
    "SCRAP LIGHTER": 5,
    "EMPLACEMENT FLOODLIGHT": 150,
    "EMPLACEMENT POINTLIGHT": 200,
    "EMPLACEMENT SCRAP LANTERN": 150,
    "EXTENDING LADDER": 500,
    "TRAFFIC BARRIER": 250,
    "FOLDING BARRIER": 350,
    "UNUSUAL LANTERN": 500,
    "PALE KEY": 500,
    "STRANGE GAS MASK": 1000,
    "SCAVENGER'S ORANGE LANTERN": 700,
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
    "X16": 20,
    "X16 MAG": 0,
    "BATTERY": 1,
    "FLASHLIGHT": 1,
    "FLOODLIGHT": 0,
    "CIVILIAN RADIO": 10,
    "LIGHTER": 3,
    "BANDAGE": 0,
    "FILM CAMERA": 3,
    "CRANKLIGHT": 5
}

const geartierrep = {
    "LOW TIER GEAR": 50,
    "MEDIUM TIER GEAR": 70,
    "HIGH TIER GEAR": 100
}

const itemSelect = document.getElementById("itemInput");
const penaltySelect = document.getElementById("penaltyItemInput");

// Combine all possible item names
const allItems = new Set([
    ...Object.keys(materialMetal),
    ...Object.keys(materialGold),
    ...Object.keys(reputation)
]);

function populateDropdown(selectElement) {
    const sortedItems = Array.from(allItems).sort((a, b) => a.localeCompare(b));
    sortedItems.forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        selectElement.appendChild(option);
    });
}



populateDropdown(itemSelect);
populateDropdown(penaltySelect);

let totalMetalIngots = 0;
let totalGoldBars = 0;
let addedItems = [];
let reputationTotal = 0;

let hasPurchase = false; // Track whether a purchase was added

const reputationDisplay = document.getElementById("totalReputation");
const quantityInput = document.getElementById("itemQuantity");
const addBtn = document.getElementById("addItem");
const itemList = document.getElementById("itemList");
const metalIngotDisplay = document.getElementById("totalMetalIngots");
const goldBarDisplay = document.getElementById("totalGoldBars");
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

    // Only show actual values if a purchase has been made
    if (hasPurchase) {
        metalIngotDisplay.textContent = totalMetalIngots;
        goldBarDisplay.textContent = totalGoldBars;
    } else {
        metalIngotDisplay.textContent = "N/A";
        goldBarDisplay.textContent = "N/A";
    }

    reputationDisplay.textContent = reputationTotal;
}

function addMaterials(item, quantity) {
    if (item === "METAL INGOT") {
        totalMetalIngots += quantity;
    } else if (item === "GOLD BAR") {
        totalGoldBars += quantity;
    } else {
        const value = minusCreds.hasOwnProperty(`m ${item}`) ? minusCreds[`m ${item}`] : credits[item] || 0;
        if (value > 0) {
            totalMetalIngots += Math.floor(value * quantity / 100);
            totalGoldBars += Math.floor(value * quantity / 500);
        }
    }
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
    addedItems.push(`${item} x${quantity} (donation)`);

    // ONLY update reputation
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

    erroMsg.textContent = "";
    addedItems.push(`${item} x${quantity} (purchase)`);

    hasPurchase = true;

    // Material values only apply for purchase processing
    const metalValue = materialMetal[item] || 0;
    const goldValue = materialGold[item] || 0;

    totalMetalIngots += metalValue * quantity;
    totalGoldBars += goldValue * quantity;

    // Still track reputation if applicable
    if (reputation[item]) {
        reputationTotal += reputation[item] * quantity;
    }

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

    const repValue = geartierrep[gearTier] || 0;
    reputationTotal += repValue * quantity;

    // No materials for gear tier
    updateDisplay();
    erroMsg.style.color = "limegreen";
    erroMsg.textContent = "Item added successfully!";
    setTimeout(() => { erroMsg.textContent = ""; }, 1500);
});

const clearAllBtn = document.getElementById("clearAllBtn");

clearAllBtn.addEventListener("click", () => {
    addedItems = [];
    totalMetalIngots = 0;
    totalGoldBars = 0;
    reputationTotal = 0;
    hasPurchase = false;
    erroMsg.textContent = "";
    quantityInput.value = "1";
    penaltyQuantityInput.value = "1";
    gearTierQuantityInput.value = "1";
    updateDisplay();

    erroMsg.style.color = "limegreen";
    erroMsg.textContent = "All items and totals cleared!";
    setTimeout(() => { erroMsg.textContent = ""; }, 1500);
});

