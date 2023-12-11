const socket = io();
let selectedImage1 = null;
let selectedImage2 = null;

function sendMessage() {
    const username = document.getElementById('username').value;
    const messageContent = document.getElementById('message').value;
    const imageUrl = document.getElementById('imageInput').value; // Obtener la URL de la imagen

    if (username.trim() !== '' && messageContent.trim() !== '' && imageUrl.trim() !== '') {
        const message = {
            user: username,
            message: messageContent,
            image: imageUrl, // Usar la URL de la imagen
            time: new Date().toLocaleTimeString().slice(0, -3),
            sentByMe: true
        };
        displayMessage(message, 'sent');
        socket.emit('chat message 1', message);

        saveMessageToDatabase(username, messageContent, imageUrl); // Guardar la URL en la base de datos

        document.getElementById('message').value = '';
        document.getElementById('sendButton1').disabled = true;
    } else {
        showCustomAlert('Por favor, completa todos los campos y proporciona una URL de imagen antes de enviar el mensaje.');
    }
}


function sendMessage2() {
    const username = document.getElementById('username2').value;
    const messageContent = document.getElementById('message2').value;
    const imageUrl = document.getElementById('imageInput2').value; // Obtener la URL de la imagen

    if (username.trim() !== '' && messageContent.trim() !== '' && imageUrl.trim() !== '') {
        const message = {
            user: username,
            message: messageContent,
            image: imageUrl, // Usar la URL de la imagen
            time: new Date().toLocaleTimeString().slice(0, -3),
            sentByMe: true
        };
        displayMessage(message, 'received');
        socket.emit('chat message 2', message);

        saveMessageToDatabase(username, messageContent, imageUrl); // Guardar la URL en la base de datos

        document.getElementById('message2').value = '';
        document.getElementById('sendButton2').disabled = true;
    } else {
        showCustomAlert('Por favor, completa todos los campos y proporciona una URL de imagen antes de enviar el mensaje.');
    }
}

function saveMessageToDatabase(username, messageContent, image) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/save-message', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log('Mensaje guardado en la base de datos');
            } else {
                console.error('Error al guardar el mensaje en la base de datos');
            }
        }
    };
    xhr.send(`usuario=${encodeURIComponent(username)}&mensaje=${encodeURIComponent(messageContent)}&imagen=${encodeURIComponent(image)}`);
}

function displayMessage(message, messageType) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(messageType);
    messageDiv.innerHTML = `
                <div class="avatar">
                    <img src="${message.image || 'default-avatar.png'}" alt="Avatar">
                </div>
                <div>
                    <span class="user">${message.user}</span>
                    <div class="content">${message.message}</div>
                    <span class="time">${message.time}</span>
                </div>
            `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

document.getElementById('imageInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            selectedImage1 = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('imageInput2').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            selectedImage2 = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function checkInputs() {
    const username = document.getElementById('username').value.trim();
    const messageContent = document.getElementById('message').value.trim();
    const username2 = document.getElementById('username2').value.trim();
    const messageContent2 = document.getElementById('message2').value.trim();

    const sendButton1 = document.getElementById('sendButton1');
    const sendButton2 = document.getElementById('sendButton2');

    sendButton1.disabled = !(username && messageContent);
    sendButton2.disabled = !(username2 && messageContent2);
}

function showCustomAlert(message) {
    const customAlert = document.getElementById('customAlert');
    const customAlertMessage = document.getElementById('customAlertMessage');

    customAlertMessage.innerText = message;
    customAlert.style.display = 'flex';
}

function closeCustomAlert() {
    const customAlert = document.getElementById('customAlert');
    customAlert.style.display = 'none';
}