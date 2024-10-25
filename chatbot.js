const apiKey = "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"; // replace this with your actual OpenAI API key

async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    // Display user's message
    displayMessage(userInput, "user");

    // Clear input field
    document.getElementById("user-input").value = "";

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userInput }]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const botMessage = data.choices[0].message.content;
        displayMessage(botMessage, "bot");

    } catch (error) {
        console.error("Error:", error.message);
        displayMessage("Sorry, something went wrong. Check console for details.", "bot");
    }
}

function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", `${sender}-message`);
    messageElement.innerText = message;

    const messagesContainer = document.getElementById("messages");
    messagesContainer.appendChild(messageElement);

    // Scroll to the bottom of the chat
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {  // Modern way to check Enter key
        sendMessage();
    }
});
