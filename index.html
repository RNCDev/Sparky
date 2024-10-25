async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const apiKey = localStorage.getItem('openai_api_key'); // Retrieve API key from localStorage

    if (!userInput || !apiKey) {
        alert("Please enter your API key and a message.");
        return;
    }

    displayMessage(userInput, "user");
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
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Setting the API key in localStorage
document.getElementById("set-key").addEventListener("click", function () {
    const apiKey = document.getElementById("api-key").value;
    if (apiKey) {
        localStorage.setItem('openai_api_key', apiKey); // Store the API key
        alert("API Key saved!");
    } else {
        alert("Please enter a valid API key.");
    }
});

// Send message on pressing Enter
document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
