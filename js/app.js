/* =================================================================
 FIREBASE/FIRESTORE LOGIC
==================================================================== */
$(document).ready(() => {
  // listen for auth status changes
  auth.onAuthStateChanged(user => {
    if (user) {
      window.location.href = "#mainPage";
      showNewDog(user);
      showImgDogAndName(user);
      showImgDog(user);
      this.user = user.uid
      // get data
      db.collection('healthinfo').onSnapshot(snapshot => {
        showHealth(snapshot.docs);
      }, err => console.log(err.message));
      console.log('User logged in')
    } else {
      showHealth([]);
      showNewDog();
      showImgDogAndName();
      showImgDog();
      //window.location.href = "#start";
      console.log('User logged out')
    }
  })

  // saving new dog
  const createNewDogForm = document.querySelector('#create-newdog-form');
  createNewDogForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const imgTitle = createNewDogForm.dogImageTitle.value
    const array = imgTitle.split('\\');
    const imageTitle = array.slice(-1)[0]

    db.collection('dogs').doc(this.user).set({
      firstname: createNewDogForm.dogFirstname.value,
      lastname: createNewDogForm.dogLastname.value,
      imageTitle: imageTitle,
      dob: createNewDogForm.dogDob.value,
      gender: createNewDogForm.dogGender.value,
      breed: createNewDogForm.dogBreed.value,
      weight: createNewDogForm.dogWeight.value,
      particularity: createNewDogForm.particularity.value
    }).then(() => {
      // reset form
      console.log('Data saved!')
      createNewDogForm.reset();
      //window.location.replace('#dogProfile');
      window.location.href = "#dogProfile";
    }).catch(err => {
      console.log(err.message);
    });

  })

  // signup
  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // sign up the user & add firestore data
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      return db.collection('users').doc(cred.user.uid).set({
        username: signupForm['signup-username'].value
      });
    }).then(() => {
      // close the signup modal & reset form
      signupForm.reset();
      signupForm.querySelector('.logError').innerHTML = '';
      signupForm.querySelector('.msgPanel').style.display = 'block';
    }).catch(err => {
      signupForm.querySelector('.msgPanel').style.display = 'block';
      signupForm.querySelector('.logError').innerHTML = err.message;
    });
  });

  // logout
  const btn_logout = document.querySelector('#Logout');
  btn_logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    window.location.href = "#start";
  });

  // login
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    //var email = $("#login-email").val();
	  //var password = $("#login-password").val();

    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      // close the signup modal & reset form
      window.location.href = "#mainPage";
      loginForm.reset();
      loginForm.querySelector('.logError').innerHTML = '';
      loginForm.querySelector('.msgPanel').style.display = 'none';
    }).catch(err => {
      loginForm.querySelector('.msgPanel').style.display = 'block';
      loginForm.querySelector('.logError').innerHTML = err.message;
    });

  });

});
