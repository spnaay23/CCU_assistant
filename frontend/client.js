// /Users/spnaay_/ccu-web/public/client.js
const socket = io();

const chatBox = document.getElementById('chatBox');
const msgForm = document.getElementById('msgForm');
const msgInput = document.getElementById('msgInput');

function addMessage(text, from = 'user') {
    const div = document.createElement('div');
    div.className = `msg ${from}`;
    div.textContent = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

msgForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = msgInput.value.trim();
    if (!msg) return;
    addMessage(msg, 'user');
    socket.emit('chatMessage', msg);
    msgInput.value = '';
});

socket.on('assistantReply', (reply) => {
    addMessage(reply, 'assistant');
});
