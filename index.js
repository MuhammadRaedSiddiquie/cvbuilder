// Element References
var elements = {
    imageView: document.getElementById('imgView'),
    imageView2: document.getElementById('imgView2'),
    imageFile: document.getElementById('imgFile'),
    resumeBuild: document.getElementById('resumeBuild'),
    resumeOutput: document.getElementById('resumeOutput'),
    username: document.getElementById('name'),
    usernameCv: document.getElementById('usernameCv'),
    address: document.getElementById('address'),
    addressCv: document.getElementById('addressCv'),
    phone: document.getElementById('phone'),
    phoneCv: document.getElementById('phoneCv'),
    email: document.getElementById('email'),
    emailCv: document.getElementById('emailCv'),
    degree: document.getElementById('degree'),
    degreeCv: document.getElementById('degreeCv'),
    college: document.getElementById('college'),
    collegeCv: document.getElementById('collegeCv'),
    eduMain: document.getElementById('eduMain'),
    eduMain2: document.getElementById('eduMain2'),
    jobMain: document.getElementById('jobMain'),
    degree2: document.getElementById('degree2'),
    degreeCv2: document.getElementById('degreeCv2'),
    college2: document.getElementById('college2'),
    collegeCv2: document.getElementById('collegeCv2'),
    sDate: document.getElementById('sdate'),
    eDate: document.getElementById('edate'),
    dateCv: document.getElementById('dateCv'),
    sDate2: document.getElementById('sdate2'),
    eDate2: document.getElementById('edate2'),
    dateCv2: document.getElementById('dateCv2'),
    profile: document.getElementById('profile'),
    profileCv: document.getElementById('profileCv'),
    job: document.getElementById('job'),
    company: document.getElementById('company'),
    companyCv: document.getElementById('companyCv'),
    job2: document.getElementById('job2'),
    company2: document.getElementById('company2'),
    companyCv2: document.getElementById('companyCv2'),
    description2: document.getElementById('description2'),
    descriptionCv2: document.getElementById('descriptionCv2'),
    from: document.getElementById('from'),
    till: document.getElementById('till'),
    experienceCv: document.getElementById('experienceCv'),
    from2: document.getElementById('from2'),
    till2: document.getElementById('till2'),
    experienceCv2: document.getElementById('experienceCv2'),
    skill: document.getElementsByClassName('skill'),
    skillCv: document.getElementById('skillCv'),
    skillMain: document.getElementById('skillMain'),
    borderSize: document.getElementById('borSize'),
    borderRadius: document.getElementById('borRadius'),
    sizeVal: document.getElementById('demo1'),
    radiusVal: document.getElementById('demo2'),
    prifontVal: document.getElementById('demo3'),
    secfontVal: document.getElementById('demo4'),
    primaryColor: document.getElementById('priColor'),
    secondaryColor: document.getElementById('secColor'),
    borderColor: document.getElementById('borColor'),
    primaryFontColor: document.getElementById('prifontColor'),
    secondaryFontColor: document.getElementById('secfontColor'),
    primaryFontSize: document.getElementById('prifontSize'),
    secondaryFontSize: document.getElementById('secfontSize'),
    primarySpacing: document.getElementById('priSpacing'),
    secondarySpacing: document.getElementById('secSpacing'),
    primaryFontFamily: document.getElementById('priFamily'),
    secondaryFontFamily: document.getElementById('secFamily'),
    editPanel: document.getElementById('editPanel'),
    editPanelMob: document.getElementById('editPanelMob'),
    shareButton: document.getElementById('shareButton'),
    closeButton: document.getElementById('closePanel'),
    skillAddbtn: document.getElementById('skillButton'),
    eduAddbtn: document.getElementById('eduButton'),
    jobAddbtn: document.getElementById('jobButton'),
    buttons: document.getElementById('Buttons'),
    resumeButton: document.getElementById('resumeLink'),
    icons: document.getElementsByClassName('icons'),
    options: document.getElementsByClassName('edit-option'),
    zoombtn: document.getElementById('zoomBtn'),
};
var resumeUrl = '';
var skillCounter = 1;
var eduCounter = 1;
var jobCounter = 1;
var imgLink2;
// Event Listeners
function initializeEventListeners() {
    elements.imageFile.addEventListener('change', handleImageChange);
    // elements.shareButton.addEventListener('click', () => shareResumeUrl(resumeUrl));
    elements.closeButton.addEventListener('click', closeEditPanel);
    elements.borderSize.oninput = updateBorderSize;
    elements.borderRadius.oninput = updateBorderRadius;
    elements.primaryColor.oninput = updatePrimaryColor;
    elements.primaryFontSize.oninput = updatePrimarySize;
    elements.secondaryFontSize.oninput = updateSecondarySize;
    elements.primarySpacing.oninput = updatePrimarySpacing;
    elements.secondarySpacing.oninput = updateSecondarySpacing;
    elements.secondaryColor.oninput = updateSecondaryColor;
    elements.borderColor.oninput = updateBorderColor;
    elements.primaryFontColor.oninput = updatePrimaryFontColor;
    elements.secondaryFontColor.oninput = updateSecondaryFontColor;
    elements.primaryFontFamily.addEventListener('change', updatePrimaryFontFamily);
    elements.secondaryFontFamily.addEventListener('change', updateSecondaryFontFamily);
}
// Functions
function handleImageChange() {
    if (elements.imageFile.files && elements.imageFile.files[0]) {
        console.log('file selected');
        var imgLink = URL.createObjectURL(elements.imageFile.files[0]);
        imgLink2 = imgLink;
        elements.imageView.style.backgroundImage = "url('".concat(imgLink, "')");
    }
    else {
        console.log("No file selected.");
    }
}
function resumeDisplay() {
    // Ensure at least 3 skills are added
    // let filledSkillsCount = 0;
    // for (let i = 0; i < elements.skill.length; i++) {
    //     if (elements.skill[i].value.trim() !== '') {
    //         filledSkillsCount++;
    //     }
    // }
    // if (filledSkillsCount < 3) {
    //     alert('Please add at least 3 skills to your resume.');
    //     return; 
    // }
    elements.resumeBuild.style.display = 'none';
    elements.resumeOutput.style.display = 'flex';
    elements.buttons.style.display = 'flex';
    elements.imageView2.style.backgroundImage = "url('".concat(imgLink2, "')");
    elements.usernameCv.innerHTML = elements.username.value || '-';
    elements.collegeCv.innerHTML = elements.college.value || '-';
    elements.degreeCv.innerHTML = elements.degree.value || '-';
    elements.collegeCv2.innerHTML = elements.college2.value || '-';
    elements.degreeCv2.innerHTML = elements.degree2.value || '-';
    elements.addressCv.innerHTML = elements.address.value;
    elements.phoneCv.innerHTML = elements.phone.value;
    elements.emailCv.innerHTML = elements.email.value;
    elements.profileCv.innerHTML = elements.profile.value;
    if (elements.job.value == '' || elements.company.value == '') {
        elements.companyCv.innerHTML = elements.job.value + ' ' + elements.company.value || '-';
    }
    else {
        elements.companyCv.innerHTML = elements.job.value + ' at ' + elements.company.value || '-';
    }
    if (elements.job2.value == '' || elements.company2.value == '') {
        elements.companyCv2.innerHTML = elements.job2.value + ' ' + elements.company2.value || '-';
    }
    else {
        elements.companyCv2.innerHTML = elements.job2.value + ' at ' + elements.company2.value || '-';
    }
    if (elements.sDate.value == '' || elements.eDate.value == '') {
        elements.dateCv.innerHTML = "".concat(elements.sDate.value, "  ").concat(elements.eDate.value);
    }
    else {
        elements.dateCv.innerHTML = "".concat(elements.sDate.value, " / ").concat(elements.eDate.value);
    }
    if (elements.sDate2.value == '' || elements.eDate2.value == '') {
        elements.dateCv2.innerHTML = "".concat(elements.sDate2.value, "  ").concat(elements.eDate2.value);
    }
    else {
        elements.dateCv2.innerHTML = "".concat(elements.sDate2.value, " / ").concat(elements.eDate2.value);
    }
    if (elements.from.value == '' || elements.till.value == '') {
        elements.experienceCv.innerHTML = "".concat(elements.from.value, "  ").concat(elements.till.value);
    }
    else {
        elements.experienceCv.innerHTML = "".concat(elements.from.value, " / ").concat(elements.till.value);
    }
    if (elements.from2.value == '' || elements.till2.value == '') {
        elements.experienceCv2.innerHTML = "".concat(elements.from2.value, "  ").concat(elements.till2.value);
    }
    else {
        elements.experienceCv2.innerHTML = "".concat(elements.from2.value, " / ").concat(elements.till2.value);
    }
    updateSkills();
    resumeUrl = generateUniqueUrl(elements.username.value);
    elements.resumeButton.textContent = resumeUrl;
}
function updateSkills() {
    elements.skillCv.innerHTML = ''; // Clear previous skills
    for (var i = 0; i < elements.skill.length; i++) {
        elements.skillCv.insertAdjacentHTML('beforeend', "<li>".concat(elements.skill[i].value, "</li>"));
    }
}
function generateUniqueUrl(user) {
    var baseUrl = "https://yourapp.vercel.app";
    return "".concat(baseUrl, "/").concat(encodeURIComponent(user), "/resume");
}
function resumeEdit() {
    elements.resumeOutput.style.display = 'none';
    elements.resumeBuild.style.display = 'flex';
    elements.editPanel.style.display = 'none';
    if (screen.width <= 768) {
        elements.editPanel.style.display = 'none';
        elements.editPanelMob.style.display = 'flex';
    }
    else {
        elements.editPanel.style.display = 'flex';
        elements.editPanelMob.style.display = 'none';
    }
    elements.buttons.style.display = 'none';
}
function addSkill() {
    if (skillCounter < 5) {
        skillCounter++;
        elements.skillMain.insertAdjacentHTML('beforeend', "<input class=\"skill\" type=\"text\" placeholder=\"Skill".concat(skillCounter, "\">"));
        if (skillCounter == 5) {
            elements.skillAddbtn.style.display = 'none';
        }
    }
}
function addEducation() {
    elements.eduMain2.style.display = 'flex';
    elements.eduAddbtn.style.display = 'none';
}
function addjob() {
    elements.jobMain.style.display = 'flex';
    elements.jobAddbtn.style.display = 'none';
}
function resumePanel() {
    document.body.style.flexDirection = 'row';
    // elements.editPanel.style.display = 'flex';
    if (screen.width <= 768) {
        elements.editPanel.style.display = 'none';
        elements.editPanelMob.style.display = 'flex';
        var _loop_1 = function (i) {
            elements.icons[i].addEventListener('click', function () {
                elements.icons[i].classList.add('active');
                elements.options[i].classList.add('open');
                elements.options[i].scrollIntoView();
                for (var j = 0; j < elements.icons.length; j++) {
                    if (i != j) {
                        elements.icons[j].classList.remove('active');
                        elements.options[j].classList.remove('open');
                    }
                }
            });
        };
        for (var i = 0; i < elements.icons.length; i++) {
            _loop_1(i);
        }
    }
    else {
        elements.editPanel.style.display = 'flex';
        elements.editPanelMob.style.display = 'none';
    }
    elements.buttons.style.display = 'none';
    elements.zoombtn.style.display = 'flex';
}
function closeEditPanel() {
    document.body.style.flexDirection = 'column';
    elements.editPanel.style.display = 'none';
    elements.buttons.style.display = 'flex';
}
function updateBorderSize(event) {
    var target = event.target;
    elements.sizeVal.innerHTML = target.value;
    document.documentElement.style.setProperty("--border-size", "".concat(target.value, "px"));
}
function updateBorderRadius(event) {
    var target = event.target;
    elements.radiusVal.innerHTML = target.value;
    document.documentElement.style.setProperty("--border-radius", "".concat(target.value, "%"));
}
function updatePrimaryColor(event) {
    var target = event.target;
    document.documentElement.style.setProperty("--primary-color", target.value);
}
function updatePrimarySize(event) {
    var target = event.target;
    elements.prifontVal.innerHTML = target.value;
    document.documentElement.style.setProperty("--primary-font-size", "".concat(target.value, "px"));
}
function updateSecondarySize(event) {
    var target = event.target;
    elements.secfontVal.innerHTML = target.value;
    document.documentElement.style.setProperty("--secondary-font-size", "".concat(target.value, "px"));
}
function updatePrimarySpacing(event) {
    var target = event.target;
    document.documentElement.style.setProperty("--primary-spacing", "".concat(target.value, "px"));
}
function updateSecondarySpacing(event) {
    var target = event.target;
    document.documentElement.style.setProperty("--secondary-spacing", "".concat(target.value, "px"));
}
function updateSecondaryColor(event) {
    var target = event.target;
    document.documentElement.style.setProperty("--secondary-color", target.value);
}
function updateBorderColor(event) {
    var target = event.target;
    document.documentElement.style.setProperty("--border-color", target.value);
}
function updatePrimaryFontColor(event) {
    var target = event.target;
    document.documentElement.style.setProperty("--primary-font-color", target.value);
}
function updateSecondaryFontColor(event) {
    var target = event.target;
    document.documentElement.style.setProperty("--secondary-font-color", target.value);
}
function updatePrimaryFontFamily() {
    document.documentElement.style.setProperty("--primary-font-family", elements.primaryFontFamily.value);
}
function updateSecondaryFontFamily() {
    document.documentElement.style.setProperty("--secondary-font-family", elements.secondaryFontFamily.value);
}
var zoom = 1;
function zoomIn() {
    zoom += 0.1;
    elements.resumeOutput.style.transform = "scale(".concat(zoom, ")");
    console.log('zoomed');
}
// function shareResumeUrl(url: string) {
//     if (navigator.share) {
//         navigator.share({
//             title: 'My Resume',
//             text: 'Check out my resume!',
//             url: url,
//         }).catch(error => console.error('Sharing failed:', error));
//     } else {
//         navigator.clipboard.writeText(url).then(() => {
//             alert('Resume URL copied to clipboard!');
//         }).catch(error => console.error('Copy failed:', error));
//     }
// }
// Initialize Event Listeners
initializeEventListeners();
