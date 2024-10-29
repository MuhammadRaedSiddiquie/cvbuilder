// Element References
const elements = {
    imageView: document.getElementById('imgView') as HTMLDivElement,
    imageView2: document.getElementById('imgView2') as HTMLDivElement,
    imageFile: document.getElementById('imgFile') as HTMLInputElement,
    resumeBuild: document.getElementById('resumeBuild') as HTMLElement,
    resumeOutput: document.getElementById('resumeOutput') as HTMLElement,
    resumeWrapper: document.getElementById('resumeWrapper') as HTMLDivElement,
    username: document.getElementById('name') as HTMLInputElement,
    usernameCv: document.getElementById('usernameCv') as HTMLParagraphElement,
    address: document.getElementById('address') as HTMLInputElement,
    addressCv: document.getElementById('addressCv') as HTMLParagraphElement,
    phone: document.getElementById('phone') as HTMLInputElement,
    phoneCv: document.getElementById('phoneCv') as HTMLParagraphElement,
    email: document.getElementById('email') as HTMLInputElement,
    emailCv: document.getElementById('emailCv') as HTMLParagraphElement,
    degree: document.getElementById('degree') as HTMLInputElement,
    degreeCv: document.getElementById('degreeCv') as HTMLParagraphElement,
    college: document.getElementById('college') as HTMLInputElement,
    collegeCv: document.getElementById('collegeCv') as HTMLParagraphElement,
    eduMain: document.getElementById('eduMain') as HTMLElement,
    eduMain2: document.getElementById('eduMain2') as HTMLElement,
    jobMain: document.getElementById('jobMain') as HTMLElement,
    degree2: document.getElementById('degree2') as HTMLInputElement,
    degreeCv2: document.getElementById('degreeCv2') as HTMLParagraphElement,
    college2: document.getElementById('college2') as HTMLInputElement,
    collegeCv2: document.getElementById('collegeCv2') as HTMLParagraphElement,
    sDate: document.getElementById('sdate') as HTMLInputElement,
    eDate: document.getElementById('edate') as HTMLInputElement,
    dateCv: document.getElementById('dateCv') as HTMLParagraphElement,
    sDate2: document.getElementById('sdate2') as HTMLInputElement,
    eDate2: document.getElementById('edate2') as HTMLInputElement,
    dateCv2: document.getElementById('dateCv2') as HTMLParagraphElement,
    profile: document.getElementById('profile') as HTMLInputElement,
    profileCv: document.getElementById('profileCv') as HTMLParagraphElement,
    job: document.getElementById('job') as HTMLInputElement,
    company: document.getElementById('company') as HTMLInputElement,
    companyCv: document.getElementById('companyCv') as HTMLParagraphElement,
    job2: document.getElementById('job2') as HTMLInputElement,
    company2: document.getElementById('company2') as HTMLInputElement,
    companyCv2: document.getElementById('companyCv2') as HTMLParagraphElement,
    description2: document.getElementById('description2') as HTMLInputElement,
    descriptionCv2: document.getElementById('descriptionCv2') as HTMLParagraphElement,
    from: document.getElementById('from') as HTMLInputElement,
    till: document.getElementById('till') as HTMLInputElement,
    experienceCv: document.getElementById('experienceCv') as HTMLParagraphElement,
    from2: document.getElementById('from2') as HTMLInputElement,
    till2: document.getElementById('till2') as HTMLInputElement,
    experienceCv2: document.getElementById('experienceCv2') as HTMLParagraphElement,
    skill: document.getElementsByClassName('skill') as HTMLCollectionOf<HTMLInputElement>,
    skillCv: document.getElementById('skillCv') as HTMLParagraphElement,
    skillMain: document.getElementById('skillMain') as HTMLElement,
    borderSize: document.getElementById('borSize') as HTMLInputElement,
    borderRadius: document.getElementById('borRadius') as HTMLInputElement,
    sizeVal: document.getElementById('demo1') as HTMLParagraphElement,
    radiusVal: document.getElementById('demo2') as HTMLParagraphElement,
    prifontVal: document.getElementById('demo3') as HTMLParagraphElement,
    secfontVal: document.getElementById('demo4') as HTMLParagraphElement,
    primaryColor: document.getElementById('priColor') as HTMLInputElement,
    secondaryColor: document.getElementById('secColor') as HTMLInputElement,
    borderColor: document.getElementById('borColor') as HTMLInputElement,
    primaryFontColor: document.getElementById('prifontColor') as HTMLInputElement,
    secondaryFontColor: document.getElementById('secfontColor') as HTMLInputElement,
    primaryFontSize: document.getElementById('prifontSize') as HTMLInputElement,
    secondaryFontSize: document.getElementById('secfontSize') as HTMLInputElement,
    primarySpacing: document.getElementById('priSpacing') as HTMLInputElement,
    secondarySpacing: document.getElementById('secSpacing') as HTMLInputElement,
    primaryFontFamily: document.getElementById('priFamily') as HTMLInputElement,
    secondaryFontFamily: document.getElementById('secFamily') as HTMLInputElement,
    editPanel: document.getElementById('editPanel') as HTMLDivElement,
    editPanelMob: document.getElementById('editPanelMob') as HTMLDivElement,
    shareButton: document.getElementById('shareButton') as HTMLButtonElement,
    closeButton: document.getElementById('closePanel') as HTMLButtonElement,
    skillAddbtn: document.getElementById('skillButton') as HTMLButtonElement,
    eduAddbtn: document.getElementById('eduButton') as HTMLButtonElement,
    jobAddbtn: document.getElementById('jobButton') as HTMLButtonElement,
    buttons: document.getElementById('Buttons') as HTMLElement,
    resumeButton: document.getElementById('resumeLink') as HTMLParagraphElement,
    icons: document.getElementsByClassName('icons') as HTMLCollectionOf<HTMLDivElement>,
    options: document.getElementsByClassName('edit-option') as HTMLCollectionOf<HTMLDivElement>,
    // zoombtn: document.getElementById('zoomBtn') as HTMLButtonElement,


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
    // elements.closeButton.addEventListener('click', closeEditPanel);
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
    elements.resumeWrapper.style.display='flex';
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
    elements.skillCv.innerHTML = ''; // Clear previous skills
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
    elements.resumeWrapper.style.display='none';
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
    if(screen.width <= 768) {
        elements.editPanel.style.display = 'none';
        elements.editPanelMob.style.display = 'flex';
        for (let i = 0; i < elements.icons.length; i++) {
            elements.icons[i].addEventListener('click', () => {
                elements.icons[i].classList.add('active')
                elements.options[i].classList.add('open')
                elements.options[i].scrollIntoView()
        
                for (let j = 0; j < elements.icons.length; j++) {
                    if (i != j) {
                        elements.icons[j].classList.remove('active');
                        elements.options[j].classList.remove('open')
                    }
                }
            })
        }
      }else{
          elements.editPanel.style.display = 'flex';
        elements.editPanelMob.style.display = 'none';
      }
    elements.buttons.style.display = 'none';
    // elements.zoombtn.style.display='flex'
}
function closeEditPanel() {
    document.body.style.flexDirection = 'column';
    elements.editPanel.style.display = 'none';
    elements.buttons.style.display = 'flex';
}

function updateBorderSize(event: Event) {
    const target = event.target as HTMLInputElement;
    document.documentElement.style.setProperty("--border-size", `${target.value}px`);
}

function updateBorderRadius(event: Event) {
    const target = event.target as HTMLInputElement;
    document.documentElement.style.setProperty("--border-radius", `${target.value}%`);
}

function updatePrimaryColor(event: Event) {
    const target = event.target as HTMLInputElement;
    document.documentElement.style.setProperty("--primary-color", target.value);
}
function updatePrimarySize(event: Event) {
    const target = event.target as HTMLInputElement;
    elements.prifontVal.innerHTML = target.value;
    document.documentElement.style.setProperty("--primary-font-size", `${target.value}px`);
}
function updateSecondarySize(event: Event) {
    const target = event.target as HTMLInputElement;
    elements.secfontVal.innerHTML = target.value;
    document.documentElement.style.setProperty("--secondary-font-size", `${target.value}px`);
}
function updatePrimarySpacing(event: Event) {
    const target = event.target as HTMLInputElement;
    document.documentElement.style.setProperty("--primary-spacing", `${target.value}px`);
}
function updateSecondarySpacing(event: Event) {
    const target = event.target as HTMLInputElement;
    document.documentElement.style.setProperty("--secondary-spacing", `${target.value}px`);
}

function updateSecondaryColor(event: Event) {
    const target = event.target as HTMLInputElement;
    document.documentElement.style.setProperty("--secondary-color", target.value);
}

function updateBorderColor(event: Event) {
    const target = event.target as HTMLInputElement;
    document.documentElement.style.setProperty("--border-color", target.value);
}

function updatePrimaryFontColor(event: Event) {
    const target = event.target as HTMLInputElement;
    document.documentElement.style.setProperty("--primary-font-color", target.value);
}

function updateSecondaryFontColor(event: Event) {
    const target = event.target as HTMLInputElement;
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

