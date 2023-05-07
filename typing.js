let channelId = window.location.href.split('/').pop(); // Pobieranie identyfikatora aktualnego kanału z adresu URL

let typing = setInterval(() => {
  fetch(`https://discord.com/api/v9/channels/${channelId}/typing`, {
    "headers": {
      "authorization": "<auth token here>",
    },
    "method": "POST",
    "credentials": "include"
  });
}, 8000);