// Element References
var elements = {
    // loader: document.getElementById('preLoader') as HTMLDivElement,
    imageView: document.getElementById('imgView') || null,
    imageView2: document.getElementById('imgView2') || null,
    imageFile: document.getElementById('imgFile') || null,
    resumeBuild: document.getElementById('resumeBuild') || null,
    resumeOutput: document.getElementById('resumeOutput') || null,
    resumeWrapper: document.getElementById('resumeWrapper') || null,
    username: document.getElementById('name') || null,
    usernameCv: document.getElementById('usernameCv') || null,
    address: document.getElementById('address') || null,
    addressCv: document.getElementById('addressCv') || null,
    phone: document.getElementById('phone') || null,
    phoneCv: document.getElementById('phoneCv') || null,
    email: document.getElementById('email') || null,
    emailCv: document.getElementById('emailCv') || null,
    degree: document.getElementById('degree') || null,
    degreeCv: document.getElementById('degreeCv') || null,
    college: document.getElementById('college') || null,
    collegeCv: document.getElementById('collegeCv') || null,
    eduMain: document.getElementById('eduMain') || null,
    eduMain2: document.getElementById('eduMain2') || null,
    jobMain: document.getElementById('jobMain') || null,
    degree2: document.getElementById('degree2') || null,
    degreeCv2: document.getElementById('degreeCv2') || null,
    college2: document.getElementById('college2') || null,
    collegeCv2: document.getElementById('collegeCv2') || null,
    sDate: document.getElementById('sdate') || null,
    eDate: document.getElementById('edate') || null,
    dateCv: document.getElementById('dateCv') || null,
    sDate2: document.getElementById('sdate2') || null,
    eDate2: document.getElementById('edate2') || null,
    dateCv2: document.getElementById('dateCv2') || null,
    profile: document.getElementById('profile') || null,
    profileCv: document.getElementById('profileCv') || null,
    job: document.getElementById('job') || null,
    company: document.getElementById('company') || null,
    companyCv: document.getElementById('companyCv') || null,
    job2: document.getElementById('job2') || null,
    company2: document.getElementById('company2') || null,
    companyCv2: document.getElementById('companyCv2') || null,
    description2: document.getElementById('description2') || null,
    descriptionCv2: document.getElementById('descriptionCv2') || null,
    from: document.getElementById('from') || null,
    till: document.getElementById('till') || null,
    experienceCv: document.getElementById('experienceCv') || null,
    from2: document.getElementById('from2') || null,
    till2: document.getElementById('till2') || null,
    experienceCv2: document.getElementById('experienceCv2') || null,
    skill: document.getElementsByClassName('skill') || null,
    skillCv: document.getElementById('skillCv') || null,
    skillMain: document.getElementById('skillMain') || null,
    borderSize: document.getElementById('borSize') || null,
    borderRadius: document.getElementById('borRadius') || null,
    sizeVal: document.getElementById('demo1') || null,
    radiusVal: document.getElementById('demo2') || null,
    prifontVal: document.getElementById('demo3') || null,
    secfontVal: document.getElementById('demo4') || null,
    primaryColor: document.getElementById('priColor') || null,
    secondaryColor: document.getElementById('secColor') || null,
    borderColor: document.getElementById('borColor') || null,
    primaryFontColor: document.getElementById('prifontColor') || null,
    secondaryFontColor: document.getElementById('secfontColor') || null,
    primaryFontSize: document.getElementById('prifontSize') || null,
    secondaryFontSize: document.getElementById('secfontSize') || null,
    primarySpacing: document.getElementById('priSpacing') || null,
    secondarySpacing: document.getElementById('secSpacing') || null,
    primaryFontFamily: document.getElementById('priFamily') || null,
    secondaryFontFamily: document.getElementById('secFamily') || null,
    editPanel: document.getElementById('editPanel') || null,
    editPanelMob: document.getElementById('editPanelMob') || null,
    shareButton: document.getElementById('shareButton') || null,
    closeButton: document.getElementById('closePanel') || null,
    skillAddbtn: document.getElementById('skillButton') || null,
    eduAddbtn: document.getElementById('eduButton') || null,
    jobAddbtn: document.getElementById('jobButton') || null,
    buttons: document.getElementById('Buttons') || null,
    resumeButton: document.getElementById('resumeLink') || null,
    icons: document.getElementsByClassName('icons') || null,
    options: document.getElementsByClassName('edit-option') || null,
    // zoombtn: document.getElementById('zoomBtn') as HTMLButtonElement || null,
    borderSizeMob: document.getElementById('borSizeMob') || null,
    borderRadiusMob: document.getElementById('borRadiusMob') || null,
    primaryColorMob: document.getElementById('priColorMob') || null,
    secondaryColorMob: document.getElementById('secColorMob') || null,
    borderColorMob: document.getElementById('borColorMob') || null,
    primaryFontColorMob: document.getElementById('priFontColorMob') || null,
    secondaryFontColorMob: document.getElementById('secFontColorMob') || null,
    primaryFontSizeMob: document.getElementById('prifontSizeMob') || null,
    secondaryFontSizeMob: document.getElementById('secfontSizeMob') || null,
    primarySpacingMob: document.getElementById('priSpacingMob') || null,
    secondarySpacingMob: document.getElementById('secSpacingMob') || null,
    primaryFontFamilyMob: document.getElementById('priFamilyMob') || null,
    secondaryFontFamilyMob: document.getElementById('secFamilyMob') || null,
    shareButtonMob: document.getElementById('shareButtonMob') || null
};
window.addEventListener("beforeunload", function (event) {
    console.log("UNLOAD:1");
    //event.preventDefault();
    event.returnValue = null; //"Any text"; //true; //false;
    //return null; //"Any text"; //true; //false;
});
var resumeUrl = '';
var skillCounter = 1;
var eduCounter = 1;
var jobCounter = 1;
var imgLink2;
// Event Listeners
function initializeEventListeners() {
    elements.imageFile.addEventListener('change', handleImageChange);
    elements.shareButton.addEventListener('click', function () { return shareResumeUrl(resumeUrl); });
    elements.shareButtonMob.addEventListener('click', function () { return shareResumeUrl(resumeUrl); });
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
    // elements.closeButton.addEventListener('click', closeEditPanel);
    elements.borderSizeMob.oninput = updateBorderSize;
    elements.borderRadiusMob.oninput = updateBorderRadius;
    elements.primaryColorMob.oninput = updatePrimaryColor;
    elements.primaryFontSizeMob.oninput = updatePrimarySize;
    elements.secondaryFontSizeMob.oninput = updateSecondarySize;
    elements.primarySpacingMob.oninput = updatePrimarySpacing;
    elements.secondarySpacingMob.oninput = updateSecondarySpacing;
    elements.secondaryColorMob.oninput = updateSecondaryColor;
    elements.borderColorMob.oninput = updateBorderColor;
    elements.primaryFontColorMob.oninput = updatePrimaryFontColor;
    elements.secondaryFontColorMob.oninput = updateSecondaryFontColor;
    elements.primaryFontFamilyMob.addEventListener('change', updatePrimaryFontFamilyMob);
    elements.secondaryFontFamilyMob.addEventListener('change', updateSecondaryFontFamilyMob);
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
    //Ensure at least 3 skills are added
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
    elements.resumeWrapper.style.display = 'flex';
    resumePanel();
    elements.imageView2.style.backgroundImage = "url('".concat(imgLink2, "')");
    elements.usernameCv.innerHTML = elements.username.value || '-';
    elements.collegeCv.innerHTML = elements.college.value || '-';
    elements.degreeCv.innerHTML = elements.degree.value || '-';
    elements.collegeCv2.innerHTML = elements.college2.value;
    elements.degreeCv2.innerHTML = elements.degree2.value;
    elements.addressCv.innerHTML = elements.address.value || '-';
    elements.phoneCv.innerHTML = elements.phone.value || '-';
    elements.emailCv.innerHTML = elements.email.value || '-';
    elements.profileCv.innerHTML = elements.profile.value || '-';
    if (elements.job.value == '' || elements.company.value == '') {
        elements.companyCv.innerHTML = '-';
    }
    else {
        elements.companyCv.innerHTML = elements.job.value + ' at ' + elements.company.value || '-';
    }
    if (elements.job2.value == '' || elements.company2.value == '') {
        elements.companyCv2.innerHTML = '-';
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
}
function updateSkills() {
    elements.skillCv.innerHTML = ''; // Clear previous skill || nulls
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
    elements.resumeWrapper.style.display = 'none';
    elements.resumeBuild.style.display = 'flex';
    elements.editPanel.style.display = 'none';
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
        var _loop_1 = function (i) {
            elements.icons[i].addEventListener('click', function () {
                elements.icons[i].classList.add('active');
                elements.options[i].classList.add('open');
                elements.options[i].scrollIntoView();
                console.log("site ok 3");
                for (var j = 0; j < elements.icons.length; j++) {
                    if (i != j) {
                        elements.icons[j].classList.remove('active');
                        elements.options[j].classList.remove('open');
                    }
                }
            });
        };
        // elements.editPanel.style.display = 'none';
        // elements.editPanelMob.style.display = 'flex';
        for (var i = 0; i < elements.icons.length; i++) {
            _loop_1(i);
        }
        console.log("site ok 2");
    }
    else {
        elements.editPanel.style.display = 'flex';
        elements.editPanelMob.style.display = 'none';
        console.log('heppp');
    }
    // elements.zoombtn.style.display='flex'
}
// function closeEditPanel() {
//     document.body.style.flexDirection = 'column';
//     elements.editPanel.style.display = 'none';
//     elements.buttons.style.display = 'flex';
// }
function updateBorderSize(event) {
    var target = event.target || null;
    document.documentElement.style.setProperty("--border-size", "".concat(target.value, "px"));
    console.log(target.value);
}
function updateBorderRadius(event) {
    var target = event.target || null;
    document.documentElement.style.setProperty("--border-radius", "".concat(target.value, "%"));
}
function updatePrimaryColor(event) {
    var target = event.target || null;
    document.documentElement.style.setProperty("--primary-color", target.value);
}
function updatePrimarySize(event) {
    var target = event.target || null;
    elements.prifontVal.innerHTML = target.value;
    document.documentElement.style.setProperty("--primary-font-size", "".concat(target.value, "px"));
}
function updateSecondarySize(event) {
    var target = event.target || null;
    elements.secfontVal.innerHTML = target.value;
    document.documentElement.style.setProperty("--secondary-font-size", "".concat(target.value, "px"));
}
function updatePrimarySpacing(event) {
    var target = event.target || null;
    document.documentElement.style.setProperty("--primary-spacing", "".concat(target.value, "px"));
}
function updateSecondarySpacing(event) {
    var target = event.target || null;
    document.documentElement.style.setProperty("--secondary-spacing", "".concat(target.value, "px"));
}
function updateSecondaryColor(event) {
    var target = event.target || null;
    document.documentElement.style.setProperty("--secondary-color", target.value);
}
function updateBorderColor(event) {
    var target = event.target || null;
    document.documentElement.style.setProperty("--border-color", target.value);
}
function updatePrimaryFontColor(event) {
    var target = event.target || null;
    document.documentElement.style.setProperty("--primary-font-color", target.value);
}
function updateSecondaryFontColor(event) {
    var target = event.target || null;
    document.documentElement.style.setProperty("--secondary-font-color", target.value);
}
function updatePrimaryFontFamily() {
    document.documentElement.style.setProperty("--primary-font-family", elements.primaryFontFamily.value);
}
function updateSecondaryFontFamily() {
    document.documentElement.style.setProperty("--secondary-font-family", elements.secondaryFontFamily.value);
}
function updatePrimaryFontFamilyMob() {
    document.documentElement.style.setProperty("--primary-font-family", elements.primaryFontFamilyMob.value);
}
function updateSecondaryFontFamilyMob() {
    document.documentElement.style.setProperty("--secondary-font-family", elements.secondaryFontFamilyMob.value);
}
// let zoom=1;
// function zoomIn(){
//     zoom+=0.1;
//     elements.resumeOutput.style.transform=`scale(${zoom})`
// console.log('zoomed')
// }
function shareResumeUrl(url) {
    if (navigator.share) {
        navigator.share({
            title: 'My Resume',
            text: 'Check out my resume!',
            url: url,
        }).catch(function (error) { return console.error('Sharing failed:', error); });
    }
    else {
        navigator.clipboard.writeText(url).then(function () {
            alert('Resume URL copied to clipboard!');
        }).catch(function (error) { return console.error('Copy failed:', error); });
    }
}
// Initialize Event Listeners
initializeEventListeners();
console.log('working');
