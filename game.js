const medicines = [
    { name: "Aspirin", type: "good", sideEffects: ["Headache", "Nausea"] },
    { name: "Ibuprofen", type: "good", sideEffects: ["Upset Stomach", "Drowsiness"] },
    { name: "Acetaminophen", type: "good", sideEffects: ["Rash", "Liver Damage"] },
    { name: "Caffeine", type: "good", sideEffects: ["Insomnia", "Nervousness"] },
    { name: "Nicotine", type: "evil", sideEffects: ["Addiction", "Lung Damage"] },
    { name: "LSD", type: "evil", sideEffects: ["Hallucinations", "Paranoia"] },
    { name: "MDMA", type: "evil", sideEffects: ["Euphoria", "Dehydration"] },
    { name: "Ketamine", type: "evil", sideEffects: ["Dissociation", "Nausea"] },
    { name: "Heroin", type: "evil", sideEffects: ["Addiction", "Overdose"] },
    { name: "Methamphetamine", type: "evil", sideEffects: ["Psychosis", "Dental Issues"] },
    { name: "Penicillin", type: "good", sideEffects: ["Allergic Reaction", "Rash"] },
    { name: "Vitamin C", type: "good", sideEffects: ["Stomach Cramps", "Diarrhea"] },
    { name: "Morphine", type: "evil", sideEffects: ["Addiction", "Constipation"] },
    { name: "Cocaine", type: "evil", sideEffects: ["Heart Attack", "Stroke"] },
    { name: "Adderall", type: "good", sideEffects: ["Insomnia", "Increased Heart Rate"] },
    { name: "Ritalin", type: "good", sideEffects: ["Nervousness", "Loss of Appetite"] },
    { name: "Prozac", type: "good", sideEffects: ["Nausea", "Weight Gain"] },
    { name: "Xanax", type: "good", sideEffects: ["Drowsiness", "Dizziness"] },
    { name: "Zoloft", type: "good", sideEffects: ["Dry Mouth", "Fatigue"] },
    { name: "Oxycodone", type: "evil", sideEffects: ["Addiction", "Respiratory Depression"] },
    { name: "Fentanyl", type: "evil", sideEffects: ["Overdose", "Confusion"] },
    { name: "Hydrocodone", type: "evil", sideEffects: ["Addiction", "Drowsiness"] },
    { name: "Methadone", type: "evil", sideEffects: ["Addiction", "Nausea"] },
    { name: "Codeine", type: "evil", sideEffects: ["Addiction", "Constipation"] },
    { name: "Ginseng", type: "good", sideEffects: ["Insomnia", "Headaches"] },
    { name: "Echinacea", type: "good", sideEffects: ["Rash", "Nausea"] },
    { name: "Garlic", type: "good", sideEffects: ["Bad Breath", "Digestive Issues"] },
    { name: "Ginger", type: "good", sideEffects: ["Heartburn", "Mouth Irritation"] },
    { name: "Turmeric", type: "good", sideEffects: ["Stomach Upset", "Allergic Reaction"] },
    { name: "Valium", type: "good", sideEffects: ["Drowsiness", "Coordination Issues"] },
    { name: "Klonopin", type: "good", sideEffects: ["Fatigue", "Memory Issues"] },
    { name: "Librium", type: "good", sideEffects: ["Drowsiness", "Confusion"] },
    { name: "Ativan", type: "good", sideEffects: ["Dizziness", "Muscle Weakness"] },
    { name: "Ambien", type: "good", sideEffects: ["Daytime Drowsiness", "Sleepwalking"] },
    { name: "Buspirone", type: "good", sideEffects: ["Nausea", "Dizziness"] },
    { name: "Lithium", type: "good", sideEffects: ["Tremors", "Thirst"] },
    { name: "Abilify", type: "good", sideEffects: ["Weight Gain", "Restlessness"] },
    { name: "Seroquel", type: "good", sideEffects: ["Drowsiness", "Weight Gain"] },
    { name: "Risperdal", type: "good", sideEffects: ["Weight Gain", "Dizziness"] },
    { name: "Geodon", type: "good", sideEffects: ["Nausea", "Drowsiness"] },
    { name: "Haldol", type: "good", sideEffects: ["Tardive Dyskinesia", "Drowsiness"] },
    { name: "Tramadol", type: "evil", sideEffects: ["Dizziness", "Nausea"] },
    { name: "Ultram", type: "evil", sideEffects: ["Addiction", "Drowsiness"] },
    { name: "Lyrica", type: "evil", sideEffects: ["Dizziness", "Swelling"] },
    { name: "Neurontin", type: "evil", sideEffects: ["Drowsiness", "Coordination Issues"] },
    { name: "Topamax", type: "evil", sideEffects: ["Fatigue", "Tingling"] },
    { name: "Amitriptyline", type: "good", sideEffects: ["Drowsiness", "Weight Gain"] },
    { name: "Nortriptyline", type: "good", sideEffects: ["Dry Mouth", "Drowsiness"] },
    { name: "Desipramine", type: "good", sideEffects: ["Constipation", "Dizziness"] },
    { name: "Imipramine", type: "good", sideEffects: ["Weight Gain", "Dry Mouth"] },
    { name: "Clomipramine", type: "good", sideEffects: ["Drowsiness", "Dry Mouth"] },
    { name: "Soma", type: "evil", sideEffects: ["Drowsiness", "Dependence"] },
    { name: "Flexeril", type: "evil", sideEffects: ["Drowsiness", "Dizziness"] },
    { name: "Skelaxin", type: "evil", sideEffects: ["Drowsiness", "Nausea"] },
    { name: "Robaxin", type: "evil", sideEffects: ["Drowsiness", "Dizziness"] },
    { name: "Zanaflex", type: "evil", sideEffects: ["Drowsiness", "Dry Mouth"] },
    { name: "Cymbalta", type: "good", sideEffects: ["Nausea", "Dry Mouth"] },
    { name: "Effexor", type: "good", sideEffects: ["Dizziness", "Nausea"] },
    { name: "Wellbutrin", type: "good", sideEffects: ["Insomnia", "Dry Mouth"] },
    { name: "Pristiq", type: "good", sideEffects: ["Nausea", "Dizziness"] },
    { name: "Zyban", type: "good", sideEffects: ["Insomnia", "Dry Mouth"] },
    { name: "Baclofen", type: "evil", sideEffects: ["Drowsiness", "Dizziness"] },
    { name: "Diazepam", type: "evil", sideEffects: ["Drowsiness", "Dependence"] },
    { name: "Midazolam", type: "evil", sideEffects: ["Drowsiness", "Confusion"] },
    { name: "Lorazepam", type: "evil", sideEffects: ["Drowsiness", "Confusion"] },
    { name: "Clonazepam", type: "evil", sideEffects: ["Drowsiness", "Coordination Issues"] },
    { name: "Zyrtec", type: "good", sideEffects: ["Drowsiness", "Dry Mouth"] },
    { name: "Claritin", type: "good", sideEffects: ["Dry Mouth", "Headache"] },
    { name: "Allegra", type: "good", sideEffects: ["Drowsiness", "Headache"] },
    { name: "Benadryl", type: "good", sideEffects: ["Drowsiness", "Dry Mouth"] },
    { name: "Singulair", type: "good", sideEffects: ["Headache", "Stomach Pain"] },
    { name: "Atenolol", type: "good", sideEffects: ["Fatigue", "Dizziness"] },
    { name: "Lisinopril", type: "good", sideEffects: ["Cough", "Dizziness"] },
    { name: "Metoprolol", type: "good", sideEffects: ["Fatigue", "Dizziness"] },
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
