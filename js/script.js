/* ======================================================
ELEMENTS WITHIN DOCUMENT THAT MATCHES SPECIFIC SELECTOR
========================================================= */
const healthList = document.querySelector('.healtInfo');
const dogDetails = document.querySelector('.dogInfo');
const dogImgAndName = document.querySelector('.dogImgName');
var dogImg = document.querySelectorAll('.dog-pp');


/*=======================================================
HEALTH INFORMATION
========================================================= */
const showHealth = (data) => {

    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const health = doc.data();
            const drColaps = `
                <div data-role='collapsible'>
                    <h4>${health.title}</h4>
                <p>${health.content}</p>
                </div>
            `;
            html += drColaps
        })

        healthList.innerHTML = html
    } else {
        healthList.innerHTML = '<h4>Login to view health information</h4>'
    }

};

/*=======================================================
DOG'S PROFILE
========================================================= */
const showNewDog = (user) => {
    if (user) {
        var doc = db.collection('dogs').doc(user.uid);
        doc.get().then(docData => {
            if (docData.exists) {
                const dog = docData.data();
                var sex = '';
                var dogWeight = '';
                var dogBreed = '';
                // Dog Gender Select
                if (dog.gender == 'male'){
                    sex = `<select id="dogGender" name="dogGender">
                                    <option selected value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>`;
                } else {
                    sex =  `<select id="dogGender" name="dogGender">
                                    <option value="male">Male</option>
                                    <option selected value="female">Female</option>
                                </select>`;
                }
                // Dog Weight Select
                if (dog.weight == 'XS') {
                    dogWeight = `<select id="dogWeight" name="dogWeight">
                                    <option selected value="XS">1 - 10 lbs → X-Small dog</option>
                                    <option value="S">11 - 25 lbs → Small dog</option>
                                    <option value="M">26 - 40 lbs → Medium dog</option>
                                    <option value="L">41 - 70 lbs → Large dog</option>
                                    <option value="XL">71 - 90 lbs → X-Large dog</option>
                                    <option value="XXL">91 -110 lbs → XX-Large dog</option>
                                </select>`
                } else if (dog.weight == 'S') {
                    dogWeight = `<select id="dogWeight" name="dogWeight">
                                    <option value="XS">1 - 10 lbs → X-Small dog</option>
                                    <option selected value="S">11 - 25 lbs → Small dog</option>
                                    <option value="M">26 - 40 lbs → Medium dog</option>
                                    <option value="L">41 - 70 lbs → Large dog</option>
                                    <option value="XL">71 - 90 lbs → X-Large dog</option>
                                    <option value="XXL">91 -110 lbs → XX-Large dog</option>
                                </select>`
                } else if ( dog.weight == 'M') {
                    dogWeight = `<select id="dogWeight" name="dogWeight">
                                    <option value="XS">1 - 10 lbs → X-Small dog</option>
                                    <option value="S">11 - 25 lbs → Small dog</option>
                                    <option selected value="M">26 - 40 lbs → Medium dog</option>
                                    <option value="L">41 - 70 lbs → Large dog</option>
                                    <option value="XL">71 - 90 lbs → X-Large dog</option>
                                    <option value="XXL">91 -110 lbs → XX-Large dog</option>
                                </select>`
                } else if (dog.weight == 'L') {
                    dogWeight = `<select id="dogWeight" name="dogWeight">
                                    <option value="XS">1 - 10 lbs → X-Small dog</option>
                                    <option value="S">11 - 25 lbs → Small dog</option>
                                    <option value="M">26 - 40 lbs → Medium dog</option>
                                    <option selected value="L">41 - 70 lbs → Large dog</option>
                                    <option value="XL">71 - 90 lbs → X-Large dog</option>
                                    <option value="XXL">91 -110 lbs → XX-Large dog</option>
                                </select>`
                } else if (dog.weight == 'XL') {
                    dogWeight = `<select id="dogWeight" name="dogWeight">
                                    <option value="XS">1 - 10 lbs → X-Small dog</option>
                                    <option value="S">11 - 25 lbs → Small dog</option>
                                    <option value="M">26 - 40 lbs → Medium dog</option>
                                    <option value="L">41 - 70 lbs → Large dog</option>
                                    <option selected value="XL">71 - 90 lbs → X-Large dog</option>
                                    <option value="XXL">91 -110 lbs → XX-Large dog</option>
                                </select>`
                } else {
                    dogWeight = `<select id="dogWeight" name="dogWeight">
                                    <option value="XS">1 - 10 lbs → X-Small dog</option>
                                    <option value="S">11 - 25 lbs → Small dog</option>
                                    <option value="M">26 - 40 lbs → Medium dog</option>
                                    <option value="L">41 - 70 lbs → Large dog</option>
                                    <option value="XL">71 - 90 lbs → X-Large dog</option>
                                    <option selected value="XXL">91 -110 lbs → XX-Large dog</option>
                                </select>`
                }
                // Dog Breed select
                if (dog.breed == 'labrador'){
                    dogBreed = `<select id="dogBreed" name="dogBreed">
                                    <option value="labrador">Labrador</option>
                                    <option value="pit-bull">Pitbull</option>
                                    <option value="teckel">Teckel</option>
                                    <option value="malinois">Malinois</option>
                                    <option value="poodle">Poodle</option>
                                </select>`
                } else if (dog.breed == 'pit-bull') {
                    dogBreed = `<select id="dogBreed" name="dogBreed">
                                    <option value="labrador">Labrador</option>
                                    <option value="pit-bull">Pitbull</option>
                                    <option value="teckel">Teckel</option>
                                    <option value="malinois">Malinois</option>
                                    <option value="poodle">Poodle</option>
                                </select>`
                } else if (dog.breed == 'teckel') {
                    dogBreed = `<select id="dogBreed" name="dogBreed">
                                    <option value="labrador">Labrador</option>
                                    <option value="pit-bull">Pitbull</option>
                                    <option value="teckel">Teckel</option>
                                    <option value="malinois">Malinois</option>
                                    <option value="poodle">Poodle</option>
                                </select>`
                } else if (dog.breed == 'malinois') {
                    dogBreed = `<select id="dogBreed" name="dogBreed">
                                    <option value="labrador">Labrador</option>
                                    <option value="pit-bull">Pitbull</option>
                                    <option value="teckel">Teckel</option>
                                    <option value="malinois">Malinois</option>
                                    <option value="poodle">Poodle</option>
                                </select>`
                } else {
                    dogBreed = `<select id="dogBreed" name="dogBreed">
                                    <option value="labrador">Labrador</option>
                                    <option value="pit-bull">Pitbull</option>
                                    <option value="teckel">Teckel</option>
                                    <option value="malinois">Malinois</option>
                                    <option value="poodle">Poodle</option>
                                </select>`
                }
                // Show data in front end
                const html = `
                <div class="dog-profile">
                    <div class="ui-field-contain">
                        <img src='pictures/${dog.imageTitle}' alt='...'/>
                    </div>
                    <div class="ui-field-contain">
                        <label>First Name:</label>
                        <input type="text" name="firstname" value="${dog.firstname}" class="ui-state-disabled">
                    </div>
                    <div class="ui-field-contain">
                        <label>Last name:</label>
                        <input type="text" name="lastname" value="${dog.lastname}" class="ui-state-disabled">
                    </div>
                    <div class="ui-field-contain">
                        <label>Date of birth:</label>
                        <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                            <input type="date" data-role="date" name="dogDob" id="dogDob" value="${dog.dob}">
                        </div>
                    </div>
                    <div class="ui-field-contain">
                        <fieldset data-role="controlgroup" class="ui-controlgroup ui-controlgroup-vertical ui-corner-all">
                            <div role="heading" class="ui-controlgroup-label">
                                <legend>Sex:</legend>
                            </div>
                            <div class="ui-controlgroup-controls ">  
                                <div class="ui-select">
                                    <div id="dogGender-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow ui-first-child ui-last-child">
                                    <span>${dog.gender}</span>
                                    ${sex}
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="ui-field-contain">
                        <fieldset data-role="controlgroup" class="ui-controlgroup ui-controlgroup-vertical ui-corner-all">
                            <div role="heading" class="ui-controlgroup-label">
                                <legend>Weight:</legend>
                            </div>
                            <div class="ui-controlgroup-controls ">        
                                <div class="ui-select">
                                    <div id="dogWeight-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow ui-first-child ui-last-child">
                                        <span>11 - 25 lbs → Small dog</span>
                                        ${dogWeight}
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                        <div class="ui-field-contain">
                        <label>Breed</label>
                        <div class="ui-select">
                            <div id="dogBreed-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow">
                                <span>${dog.breed}</span>
                                ${dogBreed}
                            </div>
                        </div>
                    </div>
                    <div class="ui-field-contain">
                        <label>Particularities:</label>
                        <textarea cols="30" rows="3" name="textarea" id="textarea" class="ui-state-disabled">${dog.particularity}</textarea>
                    </div>
                </div>
                `;
                dogDetails.innerHTML = html;
            } else {
              // clear account info
                dogDetails.innerHTML = '<h4>You don not have any dog saved!</h4>';
            }
          }).catch((err) => {
            // Either
            // 1. failed to read due to some reason such as permission denied ( online )
            // 2. failed because document does not exists on local storage ( offline )
            console.log('Ooopss!', err.message)
          });
    } else {
        // clear account info
        dogDetails.innerHTML = '<h4>You are not loged in!</h4>';
        console.log('You are not loged in!')
    }
};

/*=======================================================
DOG'S PROFILE
========================================================= */
const showImgDogAndName = (user) => {
    if (user) {
        var doc = db.collection('dogs').doc(user.uid);
        doc.get().then(docData => {
            if (docData.exists) {
                console.log(docData);
                const dog = docData.data();
                // Show data in front end
                const html = `<a href="#dogPage"><img src='pictures/${dog.imageTitle}' alt="Dog Page"/>
                                  <h2>${dog.firstname}</h2>
                              </a>`;
                dogImgAndName.innerHTML = html;
            } else {
              // clear account info
              dogImgAndName.innerHTML = '';
            }
          }).catch((err) => {
            // Either
            // 1. failed to read due to some reason such as permission denied ( online )
            // 2. failed because document does not exists on local storage ( offline )
            console.log('Ooopss!', err.message)
          });
    } else {
        // clear account info
        dogImgAndName.innerHTML = '<h4>You are not loged in!</h4>';
        console.log('You are not loged in!')
    }
};

/*=======================================================
DOG HEADER IMAGE
========================================================= */
const showImgDog = (user) => {
    if (user) {
        var doc = db.collection('dogs').doc(user.uid);
        doc.get().then(docData => {
            if (docData.exists) {
                const dog = docData.data();
                // Show data in front end
                const html = `<img src='pictures/${dog.imageTitle}' alt="..." />`;
                dogImg.forEach(item => item.innerHTML = html);
            } else {
              // clear account info
              dogImg.forEach(item => item.innerHTML = '');
            }
          }).catch((err) => {
            // Either
            // 1. failed to read due to some reason such as permission denied ( online )
            // 2. failed because document does not exists on local storage ( offline )
            console.log('Ooopss!', err.message)
          });
    } else {
        // clear account info
        dogImg.innerHTML = '<h4>You are not loged in!</h4>';
        console.log('You are not loged in!')
    }
};

/*=======================================================
HELP GUIDE SLIDE
========================================================= */
jQuery( document ).ready(function($) {
    var slide = new Array();
    for (j=1; j < 11; j++) {
        slide[j] = new Image;
        slide[j].src = "pictures/Guide/guide"+j+".png";
        console.log(slide[j]);
    };
    
    var i = 0;
    
    $("#guide").click(function(event) {
        console.log(event.clientX);
        
        if (event.clientX <= $("#guide").width()/2 ) {
            i = i - 1 + 11; 
        } else {
            i = (i + 1)%11 ; 
        };
        i = i % 11;
        $("#guide").attr("src",slide[i].src);
        console.log(i);
        console.log(slide[i]);
    });
}); 

/*=======================================================
OWNER'S ACCOUNT
========================================================= */

var incomplete = $('p');

var confirm = $('#confirmation');

var check = $('#validateEdit');

check.css({ "background-color": "#81bc4a", "color": "white" });

var username = $('#userAccName');
var usermail = $('#userAccEmail');
var userpwd = $('#userAccPassword');
var confirmPwd = $('#confirmPassword');
var notComplete = $('#notComplete');
//disabling the form
$('document').ready(loadFct);

function loadFct() {
    // notComplete.hide();
    confirm.hide();
    check.hide();
}

//to edit the profile
$('#btnEdit').click(editProfile);
function editProfile() {
    username.textinput('enable');
    usermail.textinput('enable');
    userpwd.textinput('enable');
    check.show();
    confirm.show();
}

//to confirm the changes to your profile
check.click(btnCheck);
function btnCheck(){

    var inputs = [username, usermail, userpwd, confirmPwd ];
    
    if ($('.inputAcc').val() == "")
    {
        for (var i = 0;i<=3;i++)
        {
            if (inputs[i].val() == "")
            {
                inputs[i].css("border","1px solid red");
                $('#notComplete p').text('your input is not complete');
            }
        }
    }
    else
    {
        if (userpwd.val() == confirmPwd.val())
        {
            alert('completed form'); //success // Davide you can call your fire base function here instead of the alert
        }                                      //if there is a problem with the var names you can change them
        else
        {
            confirmPwd.css("border","1px solid red");
            $('#notComplete p').text('the confirmed password is different');
        }
    }

}