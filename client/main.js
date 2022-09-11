const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const emotionBtn = document.getElementById("emotionButton")

const newSelectProducer = () => {
    let profDiv = document.getElementById('profileDiv')

    let changeText = document.createElement('p')
    changeText.textContent = "If you are now feeling a different emotion, please select the proper option below:"
    profDiv.appendChild(changeText)

    let newSelect = document.createElement('select')
    newSelect.setAttribute('id', "newEmotionSelect")
    profDiv.appendChild(newSelect)

    let blankOption = document.createElement('option')
    let mellowOption = document.createElement('option')
    let stressedOption = document.createElement('option')
    let worriedOption = document.createElement('option')
    let joyfulOption = document.createElement('option')
    let fifthOption = document.createElement('option')
    let breakBr = document.createElement('br')
    let breakBr2 = document.createElement('br')
    let emotionBtn2 = document.createElement('input')


    emotionBtn2.type = 'submit'
    

    blankOption.value = ''
    mellowOption.value = "Fairly Mellow"
    stressedOption.value = "Held up entirely through stress"
    worriedOption.value = "Generally kinda worried"
    joyfulOption.value = "Deliriously joyful"
    fifthOption.value = "Some mysterious 5th emotion"
    emotionBtn2.value = 'I now have different feels'

    mellowOption.textContent = "Fairly Mellow"
    stressedOption.textContent = "Held up entirely through stress"
    worriedOption.textContent = "Generally kinda worried"
    joyfulOption.textContent = "Deliriously joyful"
    fifthOption.textContent = "Some mysterious 5th emotion"

    newSelect.appendChild(blankOption)
    newSelect.appendChild(mellowOption)
    newSelect.appendChild(stressedOption)
    newSelect.appendChild(worriedOption)
    newSelect.appendChild(joyfulOption)
    newSelect.appendChild(fifthOption)
    profDiv.appendChild(breakBr)
    profDiv.appendChild(breakBr2)
    profDiv.appendChild(emotionBtn2)
}

const deleteProducer = () => {
    let profDiv = document.getElementById('profileDiv')

    let deleteText = document.createElement('p')
    let deleteBtn = document.createElement('input')

    deleteBtn.type = 'submit'
    
    deleteText.textContent = "If you would rather not exist, press button below:"
    deleteBtn.value = "Untether me from your coil"

    profDiv.appendChild(deleteText)
    profDiv.appendChild(deleteBtn)

}

const infoProducer = data => {
    let profDiv = document.getElementById('profileDiv')
    while(profDiv.firstChild){
        profDiv.removeChild(profDiv.firstChild)
    }

    let profText = document.createElement('p')
    let profText2 = document.createElement('p')
    let userLi = document.createElement('li')
    let firstNameLi = document.createElement('li')
    let lastNameLi = document.createElement('li')
    let emotionLi = document.createElement('li')

    profText.textContent = "Now you're part of the SYSTEM, man."
    profText2.textContent = "Here's your info:"
    userLi.textContent = `User Name: ${data.userName}`
    firstNameLi.textContent = `First Name: ${data.firstName}`
    lastNameLi.textContent = `Last Name: ${data.lastName}`
    emotionLi.textContent = `Current Emotional State: ${data.emotion}`
    
    profDiv.appendChild(profText)
    profDiv.appendChild(profText2)
    profDiv.appendChild(userLi)
    profDiv.appendChild(firstNameLi)
    profDiv.appendChild(lastNameLi)
    profDiv.appendChild(emotionLi)
}

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data
            alert(data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const getProfile = (body) => {
    axios.post("http://localhost:4000/api/profile/", body)
        .then(res => {
            infoProducer(res.data)
            newSelectProducer()
            deleteProducer()
        })
        .catch(() => {
            alert('User already exists!')
        })
}

const changeEmotion = (emotion) => {
    axios.put(`http://localhost:4000/api/profile/${emotion}`)
        .then(res => {
            infoProducer(res.data)
            newSelectProducer()
            deleteProducer()
        })
        .catch((err) => {
            console.log(err)
        })
}


const sumbitHandler = (event) => {
    event.preventDefault()

    let emotion = document.getElementById("emotionSelect")
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let userName = document.getElementById("userName")

    if (emotion.value === '') {
        alert("Please enter an emotive unit")
        return
    }
    if (firstName.value === ''){
        alert("Please enter a first name")
        return
    }
    if (lastName.value === ''){
        alert("Please enter a last name")
        return
    }
    if (userName.value === ''){
        alert("Please enter a username")
        return
    }


    let bodyObj = {
        emotion: emotion.value,
        firstName: firstName.value,
        lastName: lastName.value,
        userName: userName.value
    }

    getProfile(bodyObj)

    emotion.value = 'Select an option'
    firstName.value = ''
    lastName.value = ''
    userName.value = ''
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
emotionBtn.addEventListener('click', sumbitHandler)