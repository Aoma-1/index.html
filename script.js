async function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
    const userMessage = input.value;
    
    chatBox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    input.value = "";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer YOUR_OPENAI_API_KEY",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }]
        })
    });

    const data = await response.json();
    const botReply = data.choices[0].message.content;
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;
}
