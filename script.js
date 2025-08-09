async function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
    const userMessage = input.value;
    
    chatBox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    input.value = "";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "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,
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
