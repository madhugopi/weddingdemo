const users = [
    { id: 1, name: "Arjun Das", online: true, photo: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Sara Khan", online: false, photo: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Meera Nair", online: true, photo: "https://i.pravatar.cc/150?u=3" }
];

const chatFab = document.getElementById('chat-fab');
const chatWindow = document.getElementById('chat-window');
const userList = document.getElementById('user-list');
const chatView = document.getElementById('chat-view');
const headerTitle = document.getElementById('header-title');
const backBtn = document.getElementById('back-btn');

// Toggle Chat Window
chatFab.onclick = () => chatWindow.classList.toggle('hidden');
document.getElementById('close-btn').onclick = () => chatWindow.classList.add('hidden');

// Initialize User List
function loadUsers() {
    userList.innerHTML = '';
    users.forEach(user => {
        const div = document.createElement('div');
        div.className = 'user-item';
        div.innerHTML = `
            <img src="${user.photo}" class="user-photo">
            <span>${user.name}</span>
            <div class="status-dot" style="background: ${user.online ? '#4CAF50' : '#9E9E9E'}"></div>
        `;
        div.onclick = () => openChat(user);
        userList.appendChild(div);
    });
}

function openChat(user) {
    headerTitle.innerText = user.name;
    userList.classList.add('hidden');
    chatView.classList.remove('hidden');
    backBtn.classList.remove('hidden');
    
    // Mock existing messages
    const container = document.getElementById('message-container');
    container.innerHTML = `
        <div class="msg receiver">Hi, I'm ${user.name}. How can I help?</div>
        <div class="msg sender">Hey! Just checking in.</div>
    `;
}

backBtn.onclick = () => {
    headerTitle.innerText = "Messages";
    userList.classList.remove('hidden');
    chatView.classList.add('hidden');
    backBtn.classList.add('hidden');
};

loadUsers();