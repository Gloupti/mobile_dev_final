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
                
                const html = `
                <div class="dog-profile">

        <div style="text-align: center">
            <img src='pictures/${dog.imageTitle}' alt='...'/>
        </div>
    
        <div>
            <h3>First Name:<strong style="color: #81bc4a"> ${dog.firstname}</strong></h3>
        </div>
        <div>
            <h3>Last Name:<strong style="color: #81bc4a"> ${dog.lastname}</strong></h3>
        </div>
        <div>
            <h3>Date of Birth:<strong style="color: #81bc4a"> ${dog.dob}</strong></h3>
        </div>
        <div>
            <h3>Sex:<strong style="color: #81bc4a"> ${dog.gender}</strong></h3>
        </div>
        <div>
            <h3>Weight:<strong style="color: #81bc4a"> ${dog.weight}</strong></h3>
        </div>
        <div>
            <h3>Breed:<strong style="color: #81bc4a"> ${dog.breed}</strong></h3>
        </div>
        <div>
            <h3>Particularities:<strong style="color: #81bc4a"> ${dog.particularity}</strong></h3>
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
DOG'S PROFILE MAIN PAGE
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