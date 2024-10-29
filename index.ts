// Element References
const elements = {
    imageView: document.getElementById('imgView') as HTMLDivElement || null,
    imageView2: document.getElementById('imgView2') as HTMLDivElement || null,
    imageFile: document.getElementById('imgFile') as HTMLInputElement || null,
    resumeBuild: document.getElementById('resumeBuild') as HTMLElement || null,
    resumeOutput: document.getElementById('resumeOutput') as HTMLElement || null,
    resumeWrapper: document.getElementById('resumeWrapper') as HTMLDivElement || null,
    username: document.getElementById('name') as HTMLInputElement || null,
    usernameCv: document.getElementById('usernameCv') as HTMLParagraphElement || null,
    address: document.getElementById('address') as HTMLInputElement || null,
    addressCv: document.getElementById('addressCv') as HTMLParagraphElement || null,
    phone: document.getElementById('phone') as HTMLInputElement || null,
    phoneCv: document.getElementById('phoneCv') as HTMLParagraphElement || null,
    email: document.getElementById('email') as HTMLInputElement || null,
    emailCv: document.getElementById('emailCv') as HTMLParagraphElement || null,
    degree: document.getElementById('degree') as HTMLInputElement || null,
    degreeCv: document.getElementById('degreeCv') as HTMLParagraphElement || null,
    college: document.getElementById('college') as HTMLInputElement || null,
    collegeCv: document.getElementById('collegeCv') as HTMLParagraphElement || null,
    eduMain: document.getElementById('eduMain') as HTMLElement || null,
    eduMain2: document.getElementById('eduMain2') as HTMLElement || null,
    jobMain: document.getElementById('jobMain') as HTMLElement || null,
    degree2: document.getElementById('degree2') as HTMLInputElement || null,
    degreeCv2: document.getElementById('degreeCv2') as HTMLParagraphElement || null,
    college2: document.getElementById('college2') as HTMLInputElement || null,
    collegeCv2: document.getElementById('collegeCv2') as HTMLParagraphElement || null,
    sDate: document.getElementById('sdate') as HTMLInputElement || null,
    eDate: document.getElementById('edate') as HTMLInputElement || null,
    dateCv: document.getElementById('dateCv') as HTMLParagraphElement || null,
    sDate2: document.getElementById('sdate2') as HTMLInputElement || null,
    eDate2: document.getElementById('edate2') as HTMLInputElement || null,
    dateCv2: document.getElementById('dateCv2') as HTMLParagraphElement || null,
    profile: document.getElementById('profile') as HTMLInputElement || null,
    profileCv: document.getElementById('profileCv') as HTMLParagraphElement || null,
    job: document.getElementById('job') as HTMLInputElement || null,
    company: document.getElementById('company') as HTMLInputElement || null,
    companyCv: document.getElementById('companyCv') as HTMLParagraphElement || null,
    job2: document.getElementById('job2') as HTMLInputElement || null,
    company2: document.getElementById('company2') as HTMLInputElement || null,
    companyCv2: document.getElementById('companyCv2') as HTMLParagraphElement || null,
    description2: document.getElementById('description2') as HTMLInputElement || null,
    descriptionCv2: document.getElementById('descriptionCv2') as HTMLParagraphElement || null,
    from: document.getElementById('from') as HTMLInputElement || null,
    till: document.getElementById('till') as HTMLInputElement || null,
    experienceCv: document.getElementById('experienceCv') as HTMLParagraphElement || null,
    from2: document.getElementById('from2') as HTMLInputElement || null,
    till2: document.getElementById('till2') as HTMLInputElement || null,
    experienceCv2: document.getElementById('experienceCv2') as HTMLParagraphElement || null,
    skill: document.getElementsByClassName('skill') as HTMLCollectionOf<HTMLInputElement> || null,
    skillCv: document.getElementById('skillCv') as HTMLParagraphElement || null,
    skillMain: document.getElementById('skillMain') as HTMLElement || null,
    borderSize: document.getElementById('borSize') as HTMLInputElement || null,
    borderRadius: document.getElementById('borRadius') as HTMLInputElement || null,
    sizeVal: document.getElementById('demo1') as HTMLParagraphElement || null,
    radiusVal: document.getElementById('demo2') as HTMLParagraphElement || null,
    prifontVal: document.getElementById('demo3') as HTMLParagraphElement || null,
    secfontVal: document.getElementById('demo4') as HTMLParagraphElement || null,
    primaryColor: document.getElementById('priColor') as HTMLInputElement || null,
    secondaryColor: document.getElementById('secColor') as HTMLInputElement || null,
    borderColor: document.getElementById('borColor') as HTMLInputElement || null,
    primaryFontColor: document.getElementById('prifontColor') as HTMLInputElement || null,
    secondaryFontColor: document.getElementById('secfontColor') as HTMLInputElement || null,
    primaryFontSize: document.getElementById('prifontSize') as HTMLInputElement || null,
    secondaryFontSize: document.getElementById('secfontSize') as HTMLInputElement || null,
    primarySpacing: document.getElementById('priSpacing') as HTMLInputElement || null,
    secondarySpacing: document.getElementById('secSpacing') as HTMLInputElement || null,
    primaryFontFamily: document.getElementById('priFamily') as HTMLInputElement || null,
    secondaryFontFamily: document.getElementById('secFamily') as HTMLInputElement || null,
    editPanel: document.getElementById('editPanel') as HTMLDivElement || null,
    editPanelMob: document.getElementById('editPanelMob') as HTMLDivElement || null,
    shareButton: document.getElementById('shareButton') as HTMLButtonElement || null,
    closeButton: document.getElementById('closePanel') as HTMLButtonElement || null,
    skillAddbtn: document.getElementById('skillButton') as HTMLButtonElement || null,
    eduAddbtn: document.getElementById('eduButton') as HTMLButtonElement || null,
    jobAddbtn: document.getElementById('jobButton') as HTMLButtonElement || null,
    buttons: document.getElementById('Buttons') as HTMLElement || null,
    resumeButton: document.getElementById('resumeLink') as HTMLParagraphElement || null,
    icons: document.getElementsByClassName('icons') as HTMLCollectionOf<HTMLDivElement> || null,
    options: document.getElementsByClassName('edit-option') as HTMLCollectionOf<HTMLDivElement> || null,
    // zoombtn: document.getElementById('zoomBtn') as HTMLButtonElement || null,

    borderSizeMob: document.getElementById('borSizeMob') as HTMLInputElement || null,
    borderRadiusMob: document.getElementById('borRadiusMob') as HTMLInputElement || null,
    primaryColorMob: document.getElementById('priColorMob') as HTMLInputElement || null,
    secondaryColorMob: document.getElementById('secColorMob') as HTMLInputElement || null,
    borderColorMob: document.getElementById('borColorMob') as HTMLInputElement || null,
    primaryFontColorMob: document.getElementById('prifontColorMob') as HTMLInputElement || null,
    secondaryFontColorMob: document.getElementById('secfontColorMob') as HTMLInputElement || null,
    primaryFontSizeMob: document.getElementById('prifontSizeMob') as HTMLInputElement || null,
    secondaryFontSizeMob: document.getElementById('secfontSizeMob') as HTMLInputElement || null,
    primarySpacingMob: document.getElementById('priSpacingMob') as HTMLInputElement || null,
    secondarySpacingMob: document.getElementById('secSpacingMob') as HTMLInputElement || null,
    // primaryFontFamilyMob: document.getElementById('priFamilyMob') as HTMLInputElement || null,
    // secondaryFontFamilyMob: document.getElementById('secFamilyMob') as HTMLInputElement || null,


};

let resumeUrl = '';
let skillCounter = 1;
let eduCounter = 1;
let jobCounter = 1;
let imgLink2;


// Event Listeners
function initializeEventListeners() {
    elements.imageFile.addEventListener('change', handleImageChange);
    elements.shareButton.addEventListener('click', () => shareResumeUrl(resumeUrl));
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
    // elements.primaryFontFamilyMob.addEventListener('change', updatePrimaryFontFamily);
    // elements.secondaryFontFamilyMob.addEventListener('change', updateSecondaryFontFamily);
}

// Functions
function handleImageChange() {
    if (elements.imageFile.files && elements.imageFile.files[0]) {
        console.log('file selected')
        const imgLink = URL.createObjectURL(elements.imageFile.files[0]);
        imgLink2 = imgLink
        elements.imageView.style.backgroundImage = `url('${imgLink}')`;


    } else {
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
    elements.imageView2.style.backgroundImage = `url('${imgLink2}')`;

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

    } else {
        elements.companyCv.innerHTML = elements.job.value + ' at ' + elements.company.value || '-';

    }
    if (elements.job2.value == '' || elements.company2.value == '') {
        elements.companyCv2.innerHTML = elements.job2.value + ' ' + elements.company2.value || '-';

    } else {
        elements.companyCv2.innerHTML = elements.job2.value + ' at ' + elements.company2.value || '-';

    }

    if (elements.sDate.value == '' || elements.eDate.value == '') {
        elements.dateCv.innerHTML = `${elements.sDate.value}  ${elements.eDate.value}`;
    } else {
        elements.dateCv.innerHTML = `${elements.sDate.value} / ${elements.eDate.value}`;
    }
    if (elements.sDate2.value == '' || elements.eDate2.value == '') {
        elements.dateCv2.innerHTML = `${elements.sDate2.value}  ${elements.eDate2.value}`;
    } else {
        elements.dateCv2.innerHTML = `${elements.sDate2.value} / ${elements.eDate2.value}`;
    }
    if (elements.from.value == '' || elements.till.value == '') {
        elements.experienceCv.innerHTML = `${elements.from.value}  ${elements.till.value}`;
    } else {
        elements.experienceCv.innerHTML = `${elements.from.value} / ${elements.till.value}`;
    }
    if (elements.from2.value == '' || elements.till2.value == '') {
        elements.experienceCv2.innerHTML = `${elements.from2.value}  ${elements.till2.value}`;
    } else {
        elements.experienceCv2.innerHTML = `${elements.from2.value} / ${elements.till2.value}`;
    }


    updateSkills();

    resumeUrl = generateUniqueUrl(elements.username.value);

}


function updateSkills() {
    elements.skillCv.innerHTML = ''; // Clear previous skill || nulls
    for (let i = 0; i < elements.skill.length; i++) {
        elements.skillCv.insertAdjacentHTML('beforeend', `<li>${elements.skill[i].value}</li>`);
    }
}


function generateUniqueUrl(user: string): string {
    const baseUrl = "https://yourapp.vercel.app";
    return `${baseUrl}/${encodeURIComponent(user)}/resume`;
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
        elements.skillMain.insertAdjacentHTML('beforeend', `<input class="skill" type="text" placeholder="Skill${skillCounter}">`);
        if (skillCounter == 5) {
            elements.skillAddbtn.style.display = 'none';
        }
    }
}
function addEducation() {
    elements.eduMain2.style.display = 'flex';
    elements.eduAddbtn.style.display = 'none'
}
function addjob() {

    elements.jobMain.style.display = 'flex';
    elements.jobAddbtn.style.display = 'none';
}

function resumePanel() {
    document.body.style.flexDirection = 'row'
    // elements.editPanel.style.display = 'flex';
    if (screen.width <= 768) {
        elements.editPanel.style.display = 'none';
        elements.editPanelMob.style.display = 'flex';
        for (let i = 0; i < elements.icons.length; i++) {
            elements.icons[i].addEventListener('click', () => {
                elements.icons[i].classList.add('active')
                elements.options[i].classList.add('open')
                elements.options[i].scrollIntoView()
                console.log("site ok 3")
                for (let j = 0; j < elements.icons.length; j++) {
                    if (i != j) {
                        elements.icons[j].classList.remove('active');
                        elements.options[j].classList.remove('open')
                    }
                }
            })

        }
        console.log("site ok 2")
    } else {
        elements.editPanel.style.display = 'flex';
        elements.editPanelMob.style.display = 'none';
    }
    elements.buttons.style.display = 'none';
    // elements.zoombtn.style.display='flex'
}
// function closeEditPanel() {
//     document.body.style.flexDirection = 'column';
//     elements.editPanel.style.display = 'none';
//     elements.buttons.style.display = 'flex';
// }

function updateBorderSize(event: Event) {
    const target = event.target as HTMLInputElement || null;
    document.documentElement.style.setProperty("--border-size", `${target.value}px`);
    console.log(target.value)
}

function updateBorderRadius(event: Event) {
    const target = event.target as HTMLInputElement || null;
    document.documentElement.style.setProperty("--border-radius", `${target.value}%`);
}

function updatePrimaryColor(event: Event) {
    const target = event.target as HTMLInputElement || null;
    document.documentElement.style.setProperty("--primary-color", target.value);
}
function updatePrimarySize(event: Event) {
    const target = event.target as HTMLInputElement || null;
    elements.prifontVal.innerHTML = target.value;
    document.documentElement.style.setProperty("--primary-font-size", `${target.value}px`);
}
function updateSecondarySize(event: Event) {
    const target = event.target as HTMLInputElement || null;
    elements.secfontVal.innerHTML = target.value;
    document.documentElement.style.setProperty("--secondary-font-size", `${target.value}px`);
}
function updatePrimarySpacing(event: Event) {
    const target = event.target as HTMLInputElement || null;
    document.documentElement.style.setProperty("--primary-spacing", `${target.value}px`);
}
function updateSecondarySpacing(event: Event) {
    const target = event.target as HTMLInputElement || null;
    document.documentElement.style.setProperty("--secondary-spacing", `${target.value}px`);
}

function updateSecondaryColor(event: Event) {
    const target = event.target as HTMLInputElement || null;
    document.documentElement.style.setProperty("--secondary-color", target.value);
}

function updateBorderColor(event: Event) {
    const target = event.target as HTMLInputElement || null;
    document.documentElement.style.setProperty("--border-color", target.value);
}

function updatePrimaryFontColor(event: Event) {
    const target = event.target as HTMLInputElement || null;
    document.documentElement.style.setProperty("--primary-font-color", target.value);
}

function updateSecondaryFontColor(event: Event) {
    const target = event.target as HTMLInputElement || null;
    document.documentElement.style.setProperty("--secondary-font-color", target.value);
}

function updatePrimaryFontFamily() {
    document.documentElement.style.setProperty("--primary-font-family", elements.primaryFontFamily.value);
}

function updateSecondaryFontFamily() {
    document.documentElement.style.setProperty("--secondary-font-family", elements.secondaryFontFamily.value);
}
// let zoom=1;
// function zoomIn(){
//     zoom+=0.1;
//     elements.resumeOutput.style.transform=`scale(${zoom})`
// console.log('zoomed')
// }

function shareResumeUrl(url: string) {
    if (navigator.share) {
        navigator.share({
            title: 'My Resume',
            text: 'Check out my resume!',
            url: url,
        }).catch(error => console.error('Sharing failed:', error));
    } else {
        navigator.clipboard.writeText(url).then(() => {
            alert('Resume URL copied to clipboard!');
        }).catch(error => console.error('Copy failed:', error));
    }
}

// Initialize Event Listeners






initializeEventListeners();
console.log('working')

