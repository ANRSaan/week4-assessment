const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const emotionBtn = document.getElementById("emotionButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then (res => {
            const data = res.data
            alert(data)
    })
}

const getProfile = (body) => {
    axios.post("http://localhost:4000/api/profile/", body)
        .then (res => {
            const data = res.data
            console.log(data)
        })
        .catch ((err) => {
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
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
emotionBtn.addEventListener('click', sumbitHandler)