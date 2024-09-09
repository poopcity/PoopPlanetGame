const medicines = [
    { name: "Aspirin", type: "good", sideEffects: ["Headache", "Nausea"] },
    { name: "Ibuprofen", type: "good", sideEffects: ["Upset Stomach", "Drowsiness"] },
    // ... (Add more medicines up to 100)
];

const countries = ["Country A", "Country B", "Country C", "Country D", "Country E"];
const staff = ["Scientist", "Engineer", "Doctor", "Advisor", "Security"];

let currentMedicineIndex = 0;
let currentEmailIndex = 0;
let currentCountryIndex = 0;
let currentStaffIndex = 0;
let approvalRating = 100;

const emailTemplates = [
    { subject: "Medicine Approval Request", body: "Should we approve the medicine {medicine} for use? Side effects: {sideEffects}" },
    { subject: "Country Intervention Decision", body: "Should we help or destroy {country}?" },
    { subject: "Staff Hiring Request", body: "Should we hire a {staff}?" }
];

function updateScreen(content) {
    document.getElementById('screen').textContent = content;
}

function updateMedicineList() {
    const medicineList = document.getElementById('medicine-list');
    medicineList.innerHTML = medicines.map((med, index) =>
        `<div>${index + 1}. ${med.name} (${med.type}) - Side Effects: ${med.sideEffects.join(", ")}</div>`
    ).join('');
}

function updateEmailList() {
    const email = generateEmail();
    document.getElementById('email-list').innerHTML = `<strong>${email.subject}</strong><p>${email.body}</p>`;
}

function updateCountryList() {
    const countryList = document.getElementById('country-list');
    countryList.innerHTML = countries.map((country, index) =>
        `<div>${index + 1}. ${country}</div>`
    ).join('');
}

function updateStaffList() {
    const staffList = document.getElementById('staff-list');
    staffList.innerHTML = staff.map((staffMember, index) =>
        `<div>${index + 1}. ${staffMember}</div>`
    ).join('');
}

function calculateApprovalRating(medicine) {
    let rating = approvalRating;
    if (medicine.type === "evil") {
        rating -= 30;
    }
    medicine.sideEffects.forEach(effect => {
        if (effect === "Death") {
            rating -= 50;
        } else {
            rating -= 10;
        }
    });
    return Math.max(0, rating);
}

function generateEmail() {
    const template = emailTemplates[Math.floor(Math.random() * emailTemplates.length)];
    const medicine = medicines[currentMedicineIndex];
    const country = countries[currentCountryIndex];
    const staffMember = staff[currentStaffIndex];
    let body = template.body;

    if (template.subject.includes("Medicine")) {
        body = body.replace("{medicine}", medicine.name).replace("{sideEffects}", medicine.sideEffects.join(", "));
    } else if (template.subject.includes("Country")) {
        body = body.replace("{country}", country);
    } else if (template.subject.includes("Staff")) {
        body = body.replace("{staff}", staffMember);
    }

    return { subject: template.subject, body: body };
}

function approveMedicine() {
    const medicine = medicines[currentMedicineIndex];
    approvalRating = calculateApprovalRating(medicine);
    updateScreen(`Approving medicine: ${medicine.name}\nApproval Rating: ${approvalRating}`);
    currentMedicineIndex = (currentMedicineIndex + 1) % medicines.length;
    updateMedicineList();
    updateEmailList();
}

function banMedicine() {
    const medicine = medicines[currentMedicineIndex];
    updateScreen(`Banning medicine: ${medicine.name}`);
    currentMedicineIndex = (currentMedicineIndex + 1) % medicines.length;
    updateMedicineList();
    updateEmailList();
}

function respondYes() {
    updateScreen(`Responding "Yes" to email: ${generateEmail().subject}`);
    updateEmailList();
}

function respondNo() {
    updateScreen(`Responding "No" to email: ${generateEmail().subject}`);
    updateEmailList();
}

function helpCountry() {
    const country = countries[currentCountryIndex];
    updateScreen(`Helping country: ${country}`);
    currentCountryIndex = (currentCountryIndex + 1) % countries.length;
    updateCountryList();
    updateEmailList();
}

function destroyCountry() {
    const country = countries[currentCountryIndex];
    updateScreen(`Destroying country: ${country}`);
    currentCountryIndex = (currentCountryIndex + 1) % countries.length;
    updateCountryList();
    updateEmailList();
}

function hireStaff() {
    const staffMember = staff[currentStaffIndex];
    updateScreen(`Hiring staff: ${staffMember}`);
    currentStaffIndex = (currentStaffIndex + 1) % staff.length;
    updateStaffList();
    updateEmailList();
}

function fireStaff() {
    const staffMember = staff[currentStaffIndex];
    updateScreen(`Firing staff: ${staffMember}`);
    currentStaffIndex = (currentStaffIndex + 1) % staff.length;
    updateStaffList();
    updateEmailList();
}

updateMedicineList();
updateEmailList();
updateCountryList();
updateStaffList();
updateScreen("Welcome to Poop Planet CEO. Manage the planet wisely!");
