console.log('veikia');
const registrationName = document.getElementById('registrationName');
const nameInfo = document.getElementById('registrationNameInfo');
const email = document.getElementById('registrationEmail');
const emailInfo = document.getElementById('registrationEmailInfo');
const age = document.getElementById('registrationAge');
const ageInfo = document.getElementById('registrationAgeInfo');
const firstPassword = document.getElementById('registrationFirstPassword');
const firstPasswordInfo = document.getElementById('registrationFirstPasswordInfo');
const firstPasswordError = document.getElementById('registrationFirstPasswordError')
const secondPassword = document.getElementById('registrationSecondPassword');
const secondPasswordInfo = document.getElementById('registrationSecondPasswordInfo');
const registrationButton = document.getElementById('registrationBtn');
const registrationNameErrorMessage = document.getElementById('registrationNameError');
const registrationFormContainer = document.getElementById('registrationFormContainerj')
const phone = document.getElementById('registrationPhone');
const phoneInfo = document.getElementById('registrationPhoneInfo');


registrationFormContainer.addEventListener("click", (event) => {
    if (!registrationName.contains(event.target)) {
        nameInfo.style.opacity = 0;
    } else {
        nameInfo.style.opacity = 1;
    }

    if (!firstPassword.contains(event.target)) {
        firstPasswordInfo.style.opacity = 0;
    } else {
        firstPasswordInfo.style.opacity = 1;
    }
});


  let isNameValid = false;
  let isEmailValid = false;
  let isAgeValid = false;
  let isPhoneValid = false;
  let isFirstPasswordValid = false;
  let isSecondPasswordValid = false;





  registrationName.addEventListener("input", () => {
    const value = registrationName.value;

    const isOnlyLetters = (str) => {
        const allowedLetters = "abcdefghijklmnopqrstuvwxyząčęėįšųūžABCDEFGHIJKLMNOPQRSTUVWXYZĄČĘĖĮŠŲŪŽ";
        for (let char of str) {
            if (!allowedLetters.includes(char)) {
                return false;
            }
        }
        return true;
    };

   
    if (value === '') {
        registrationName.style.backgroundColor = 'white';
        registrationNameErrorMessage.style.opacity = '0';
    } else if (!isNaN(value.charAt(0)) && value.charAt(0) !== ' ') {  
        registrationName.style.backgroundColor = 'red';
        registrationNameErrorMessage.innerText = 'Vardas negali prasidėti skaičiumi';
        registrationNameErrorMessage.style.color = 'red';
        registrationNameErrorMessage.style.opacity = '1';
        isNameValid = false;
    } else if (value.length < 2) {
        registrationName.style.backgroundColor = 'red';
        registrationNameErrorMessage.innerText = 'Vardas yra per trumpas';
        registrationNameErrorMessage.style.color = 'red';
        registrationNameErrorMessage.style.opacity = '1';
        isNameValid = false;
    } else if (value.length > 30) {
        registrationName.style.backgroundColor = 'red';
        registrationNameErrorMessage.innerText = 'Vardas yra per ilgas';
        registrationNameErrorMessage.style.color = 'red';
        registrationNameErrorMessage.style.opacity = '1';
        isNameValid = false;
    } else if (!isOnlyLetters(value)) {
        registrationName.style.backgroundColor = 'red';
        registrationNameErrorMessage.innerText = 'Galima vesti tiktais raides';
        registrationNameErrorMessage.style.color = 'red';
        registrationNameErrorMessage.style.opacity = '1';
        isNameValid = false;
    } else {
        registrationName.style.backgroundColor = 'white';
        registrationNameErrorMessage.style.opacity = '0';
        isNameValid = true;
    }
});

email.addEventListener("input", () => {
    const isValidEmail = (str) => {
        let hasAt = false;
        let hasDotAfterAt = false;

        for (let i = 0; i < str.length; i++) {
            if (str[i] === '@') {
                if (hasAt) return false; 
                hasAt = true;
            } else if (str[i] === '.' && hasAt) {
                hasDotAfterAt = true;
            }
        }

       
        return hasAt && hasDotAfterAt;
    };

    if (email.value === '') {
        email.style.backgroundColor = 'white';
        registrationEmailInfo.innerText = '';
    } else if (!isValidEmail(email.value)) {
        email.style.backgroundColor = 'red';
        registrationEmailInfo.innerText = 'Netinkamas elektroninis paštas';
        registrationEmailInfo.style.color = 'red';
        isEmailValid = false;
    } else {
        email.style.backgroundColor = 'white';
        registrationEmailInfo.innerText = '';
        isEmailValid = true;
    }
});



age.addEventListener("input", () => {
    if (age.value === '') {
     age.style.backgroundColor = 'white';
     ageInfo.innerText = '';
    } else if (age.value < 18 || age.value > 120) {
     age.style.backgroundColor = 'red';
     ageInfo.innerText = 'Netinkamas amžius';
     ageInfo.style.color = 'red';
     isAgeValid = false;
 
    } else {
     age.style.backgroundColor = 'white';
     ageInfo.innerText = '';
     isAgeValid = true;
 
    }
    });

    phone.addEventListener("input", () => {
        const isValidPhone = (str) => {
           
            if (str[0] !== '+') return false;
    
           
            if (str.length !== 12) return false; 
            for (let i = 1; i < str.length; i++) {
                if (str[i] < '0' || str[i] > '9') {
                    return false; 
                }
            }
    
            return true;
        };
    
        if (phone.value === '') {
            phone.style.backgroundColor = 'white';
            phoneInfo.innerText = '';
        } else if (!isValidPhone(phone.value)) {
            phone.style.backgroundColor = 'red';
            phoneInfo.innerText = 'Netinkamas telefono numeris';
            phoneInfo.style.color = 'red';
            isPhoneValid = false;
        } else {
            phone.style.backgroundColor = 'white';
            phoneInfo.innerText = '';
            isPhoneValid = true;
        }
    });

    
      firstPassword.addEventListener("input", () => {
        const isValidPassword = (str) => {
            if (str.length < 8 || str.length > 15) return false; 
    
            let hasLowercase = false;
            let hasUppercase = false;
            let hasDigit = false;
            let hasSpecialChar = false;
    
          
            const allowedSpecialChars = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~"; // Add more if needed
    
           
            const lowercaseLithuanianLetters = 'ąčęėįšųūž';
            const uppercaseLithuanianLetters = 'ĄČĘĖĮŠŲŪŽ';
    
            for (let char of str) {
                if ((char >= 'a' && char <= 'z') || lowercaseLithuanianLetters.includes(char)) {
                    hasLowercase = true; 
                }
                if ((char >= 'A' && char <= 'Z') || uppercaseLithuanianLetters.includes(char)) {
                    hasUppercase = true; 
                }
                if (char >= '0' && char <= '9') {
                    hasDigit = true; 
                }
                if (allowedSpecialChars.includes(char)) {
                    hasSpecialChar = true; 
                }
            }
    
            return hasLowercase && hasUppercase && hasDigit && hasSpecialChar;
        };
    
        if (firstPassword.value === '') {
            firstPassword.style.backgroundColor = 'white';
            firstPasswordError.innerText = '';
        } else if (!isValidPassword(firstPassword.value)) {
            firstPassword.style.backgroundColor = 'red';
            firstPasswordError.innerText = 'netinkamas slaptažodis';
            firstPasswordError.style.color = 'red';
            isFirstPasswordValid = false;
        } else {
            firstPassword.style.backgroundColor = 'white';
            firstPasswordError.innerText = '';
            isFirstPasswordValid = true;
        }
    
       
        if (secondPassword.value !== '' && firstPassword.value !== secondPassword.value) {
            secondPassword.style.backgroundColor = 'red';
            secondPasswordInfo.innerText = 'neatitinka slaptažodžiai';
            secondPasswordInfo.style.color = 'red';
            isSecondPasswordValid = false;
        } else if (secondPassword.value === firstPassword.value) {
            secondPassword.style.backgroundColor = 'green';
            secondPasswordInfo.style.color = 'green';
            secondPasswordInfo.innerText = 'slaptažodžiai sutampa';
            isSecondPasswordValid = true;
        }
    });
    
    secondPassword.addEventListener("input", () => {
        if (secondPassword.value === '') {
            secondPassword.style.backgroundColor = 'white';
            secondPasswordInfo.innerText = '';
        } else if (firstPassword.value !== secondPassword.value) {
            secondPassword.style.backgroundColor = 'red';
            secondPasswordInfo.innerText = 'neatitinka slaptažodžiai';
            secondPasswordInfo.style.color = 'red';
            isSecondPasswordValid = false;
        } else if (firstPassword.value === secondPassword.value) {
            secondPassword.style.backgroundColor = 'green';
            secondPasswordInfo.style.color = 'green';
            secondPasswordInfo.innerText = 'slaptažodžiai sutampa';
            isSecondPasswordValid = true;
        } else {
            secondPassword.style.backgroundColor = 'white';
            secondPasswordInfo.innerText = '';
        }
    });
    
       
         const passwordShow = document.getElementById("pwShow");
 
         passwordShow.addEventListener("click", () => {
             if (firstPassword.type === "password") {
                firstPassword.type = "text";
             } else {
                firstPassword.type = "password";
                 
             }
         });

            
         const passwordShow2 = document.getElementById("pwShow2");
 
         passwordShow2.addEventListener("click", () => {
             if (secondPassword.type === "password") {
                secondPassword.type = "text";
             } else {
                secondPassword.type = "password";
                 
             }
         });



        registrationButton.addEventListener('click', (event) => {
            event.preventDefault(); 
        
            let allFieldsValid = isNameValid && isEmailValid && isAgeValid && isPhoneValid && isFirstPasswordValid && isSecondPasswordValid;
        
         
            if (allFieldsValid) {
                alert('Registracija sėkminga!');
        
              
                const registrationData = {
                    name: registrationName.value,
                    email: email.value,
                    age: age.value,
                    phone: phone.value,
                    firstPassword: firstPassword.value,
                    secondPassword: secondPassword.value,
                };
        
                console.log('Registracijos duomenys:', registrationData);
        
               
                registrationName.value = '';
                email.value = '';
                age.value = '';
                phone.value = '';
                firstPassword.value = '';
                secondPassword.value = '';
                secondPassword.style.backgroundColor = 'white';
                secondPasswordInfo.innerText = '';
            } else {
               
                alert('Prašau pataisyti neteisingus laukelius');
            }
        
           
            if (!isNameValid) {
                registrationName.style.backgroundColor = 'red';
                registrationNameErrorMessage.style.color = 'red';
                registrationNameErrorMessage.style.opacity = '1';
            }
            if (!isEmailValid) {
                email.style.backgroundColor = 'red';
                registrationEmailInfo.style.color = 'red';
                registrationEmailInfo.innerText = 'Netinkamas elektroninis paštas';
            }
            if (!isAgeValid) {
                age.style.backgroundColor = 'red';
                ageInfo.style.color = 'red';
                ageInfo.innerText = 'Netinkamas amžius';
            }
            if (!isPhoneValid) {
                phone.style.backgroundColor = 'red';
                phoneInfo.style.color = 'red';
                phoneInfo.innerText = 'Netinkamas telefono numeris';
            }
            if (!isFirstPasswordValid) {
                firstPassword.style.backgroundColor = 'red';
                firstPasswordError.style.color = 'red';
                firstPasswordError.innerText = 'Netinkamas slaptažodis';
            }
            if (!isSecondPasswordValid) {
                secondPassword.style.backgroundColor = 'red';
                secondPasswordInfo.innerText = 'Slaptažodžiai nesutampa';
                secondPasswordInfo.style.color = 'red';
            }
        });
        
