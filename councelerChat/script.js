document.addEventListener('DOMContentLoaded', () => { 
    const chatBox = document.getElementById('chat-box'); 
    const messageInput = document.getElementById('message-input'); 
    const sendButton = document.getElementById('send-button'); 
 
    // Function to add a new message to the chat 
    function addMessage(senderName, messageText, isUser, avatarUrl) { 
        const messageDiv = document.createElement('div'); 
        messageDiv.classList.add('message'); 
        messageDiv.classList.add(isUser ? 'user' : 'counselor'); 
 
        const messageContentDiv = document.createElement('div'); 
        messageContentDiv.classList.add('message-content'); 
         
        const senderSpan = document.createElement('span'); 
        senderSpan.classList.add('sender'); 
        senderSpan.textContent = senderName; 
 
        const messageParagraph = document.createElement('p'); 
        messageParagraph.textContent = messageText; 
 
        messageContentDiv.appendChild(senderSpan); 
        messageContentDiv.appendChild(messageParagraph); 
 
        if (isUser) { 
            const userAvatar = document.createElement('img'); 
            userAvatar.src = avatarUrl; 
            userAvatar.alt = senderName; 
            userAvatar.classList.add('avatar'); 
            messageDiv.appendChild(messageContentDiv); 
            messageDiv.appendChild(userAvatar); 
        } else { 
            const counselorAvatar = document.createElement('img'); 
            counselorAvatar.src = avatarUrl; 
            counselorAvatar.alt = senderName; 
            counselorAvatar.classList.add('avatar'); 
            messageDiv.appendChild(counselorAvatar); 
            messageDiv.appendChild(messageContentDiv); 
        } 
         
        chatBox.appendChild(messageDiv); 
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message 
    } 
 
    // Handle sending a message 
    sendButton.addEventListener('click', () => { 
        const messageText = messageInput.value.trim(); 
        if (messageText !== '') { 
            addMessage('Anya Sharma', messageText, true, 
'https://i.ibb.co/q7t5cKk/anya-sharma.png'); 
            messageInput.value = ''; 
 
            // Optional: Simulate a counselor response after a short 
delay 
            setTimeout(() => { 
                const counselorResponses = [ 
                    "That's great to hear! Let's explore some healthcare options.", 
                    "Many fields like medicine, pharmacy, or nursing could be a good fit.", 
                    "We can discuss the pros and cons of each path." 
                ]; 
                const randomResponse = 
counselorResponses[Math.floor(Math.random() * 
counselorResponses.length)]; 
                addMessage('Counselor Sarah', randomResponse, false, 
'https://i.ibb.co/L5k6YtK/counselor-sarah.png'); 
            }, 1000); 
        } 
    }); 
 
    // Allow sending messages with the Enter key 
    messageInput.addEventListener('keypress', (e) => { 
        if (e.key === 'Enter') { 
            sendButton.click(); 
        } 
    }); 
});