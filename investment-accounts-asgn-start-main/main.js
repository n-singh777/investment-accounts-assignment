// Investment Accounts Assignment Start Code

// HTML Variables
let containerEl = document.getElementById("container");
let outputEl = document.getElementById("output");
let goBtnEl = document.getElementById("go");
let menuEl = document.getElementById("menu");

// Global Variable
let accounts = [];
for (let n = 1; n <= 200; n++) {
  accounts.push(randomInt(1, 5001));
}
let maxAmount = 5000; // account values should be b/t 0 and max

// Display Data
drawArray();

function drawArray() {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < accounts.length; i++) {
    divHeight = (accounts[i] / maxAmount) * 600; // Scale accounts to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}

// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = menuEl.value;

  // Take action based on menu selection
  if (selection === "count-range") {
    countRange();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "hacker") {
    hackerAttack();
  } else if (selection === "stats") {
    investmentStats();
  } else if (selection === "add") {
    addAccount();
  } else if (selection === "remove-low") {
    removeLow();
  } else if (selection === "robin-hood") {
    robinHood();
  }

  // Redraw array to show any changes
  drawArray();
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

function countRange() {
  // Output the number of accounts with amounts between $2,000 and $4,000, inclusive
  let count = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] >= 2000 && accounts[i] <= 4000) {
      count++;
    }
  }
  outputEl.innerHTML = "Count Range: " + count;
}

function generousDonor() {
  // A generous donor has decided to give $500 to every investment
  // account that has less than $2000. 
  // Modify the investment account array to apply this donation.
  // Output the total amount of money that was donated.

  let totalMoney = 0;
  let count = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 2000) {
      accounts[i] = accounts[i] + 500;
      count++;
    }
    totalMoney = 200 * count;
  }
  outputEl.innerHTML = "Generous Donor: $" + totalMoney;
}

function hackerAttack() {
  // A hacker steals 5% from every account.
  // Modify the investment account array to apply this theft.
  // Output the total amount that was stolen.

  let totalMoney = 0;
  let count = 0;
  for (let i = 0; i < accounts.length; i++) {
    accounts[i] = accounts[i] * 0.95;
    count++
    totalMoney = ((accounts[i]/0.95) * 0.05) * count;
  }
  outputEl.innerHTML = "Hacker Attack: $" + totalMoney;
}

function investmentStats() {
  // Output the minimum account amount, the maximum account amount
  // and the average account amount.

  function arrayMin(arr) {
    return Math.min.apply(null, arr);
  }

  function arrayMax(arr) {
    return Math.max.apply(null, arr);
  }

  total = 0;
  for(let i = 0; i < accounts.length; i++) {
    total = total + accounts[i];
  }
  average = total / accounts.length;

  outputEl.innerHTML = "Investment Stats - Maximum: " + arrayMax(accounts) + " Minimum: " + arrayMin(accounts) + " Average: " + average;
}

function addAccount() {
  // Prompt for a new account amount and add this to the invesment account
  // array. Output a confirmation that a new account was added with an
  // opening amount of _______.
  let x = prompt("Welcome! Please enter your account amount.");
  accounts.push(Number(x));

  outputEl.innerHTML = "Add Account: A new account was added with an opening amount of $" + x + ".";
}

function removeLow() {
  // Remove all accounts that are below $500.
  // Output how many accounts were removed.
  let count = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 500) {
      delete accounts[i];
      count++
    }
  }
  outputEl.innerHTML = "Remove Low Accounts: " + count;
}

function robinHood() {
  // Steal from the rich and give to the poor.
  // Take $400 from every account that has over $4000.
  // Then evenly distribute the total amount taken between all the
  // accounts that have less than $1000.
  // Output how many accounts received money and 
  // how much each account received.

  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] > 4000) {
      accounts[i] = accounts[i] - 400;
      count1++;
    } if (accounts[i] < 1000) {
      let total = 400 * count1;
      let distributed = (total / accounts[i]);
      accounts[i] = accounts[i] + (total / accounts[i]);
      count2++;

      outputEl.innerHTML = "Robin Hood - How many accounts received money: " + count2 + ". How much each account received: $" + distributed;
    }
  }
}


