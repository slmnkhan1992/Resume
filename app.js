// Add a new education entry
function addEducation() {
    const educationContainer = document.getElementById("educationContainer");
    const newEducationEntry = document.createElement("div");
    newEducationEntry.classList.add("education-entry");
    newEducationEntry.innerHTML = `
        <label>Degree: <input type="text" class="degree"></label><br>
        <label>Institution: <input type="text" class="institution"></label><br>
        <label>Year of Graduation: <input type="text" class="gradYear"></label><br>
    `;
    educationContainer.appendChild(newEducationEntry);
}

// Add a new experience entry
function addExperience() {
    const experienceContainer = document.getElementById("experienceContainer");
    const newExperienceEntry = document.createElement("div");
    newExperienceEntry.classList.add("experience-entry");
    newExperienceEntry.innerHTML = `
        <label>Company: <input type="text" class="company"></label><br>
        <label>Position: <input type="text" class="position"></label><br>
        <label>Duration: <input type="text" class="duration"></label><br>
    `;
    experienceContainer.appendChild(newExperienceEntry);
}

// Generate and display the resume
function generateResume() {
    // Displaying basic details
    document.getElementById("displayName").innerText = document.getElementById("nameInput").value;
    document.getElementById("displayJobTitle").innerText = document.getElementById("jobTitleInput").value;
    document.getElementById("displayAddress").innerText = document.getElementById("addressInput").value;
    document.getElementById("displayPhone").innerText = document.getElementById("phoneInput").value;
    document.getElementById("displayEmail").innerText = document.getElementById("emailInput").value;
    document.getElementById("displayObjective").innerText = document.getElementById("objectiveInput").value;

    // Adding education entries
    const educationList = document.getElementById("displayEducation");
    educationList.innerHTML = '';
    document.querySelectorAll(".education-entry").forEach(entry => {
        const degree = entry.querySelector(".degree").value;
        const institution = entry.querySelector(".institution").value;
        const gradYear = entry.querySelector(".gradYear").value;
        educationList.innerHTML += `<li>${degree}, ${institution} (${gradYear})</li>`;
    });

    // Adding experience entries
    const experienceList = document.getElementById("displayExperience");
    experienceList.innerHTML = '';
    document.querySelectorAll(".experience-entry").forEach(entry => {
        const company = entry.querySelector(".company").value;
        const position = entry.querySelector(".position").value;
        const duration = entry.querySelector(".duration").value;
        experienceList.innerHTML += `<li><b>${position}</b> at ${company} (${duration})</li>`;
    });

    // Adding skills
    const skillsText = document.getElementById("skillsInput").value;
    const skillsList = document.getElementById("displaySkills");
    skillsList.innerHTML = skillsText.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');

    // Adding personal information
    document.getElementById("displayFatherName").innerText = document.getElementById("fatherNameInput").value;
    document.getElementById("displayDOB").innerText = document.getElementById("dobInput").value;
    document.getElementById("displayReligion").innerText = document.getElementById("religionInput").value;
    document.getElementById("displayMaritalStatus").innerText = document.getElementById("maritalStatusInput").value;
    document.getElementById("displayNationality").innerText = document.getElementById("nationalityInput").value;

    // Show the resume and hide the form
    document.getElementById("form-container").style.display = "none";
    document.getElementById("main-container").style.display = "block";
}
