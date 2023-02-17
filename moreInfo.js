let userInfo = JSON.parse(localStorage.getItem('body'));

for(let i = 0; i < userInfo.length; i++){
    document.getElementById('info').innerHTML += `
    <div>
        <h2>
            <ul>
            ${userInfo[i].part}
            </ul>
        </h2>

        <h4>
            ${userInfo[i].summary}
        </h4>

        <p>${userInfo[i].description}</p>
    </div>`
}