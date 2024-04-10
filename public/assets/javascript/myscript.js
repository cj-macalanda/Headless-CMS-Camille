document.addEventListener("DOMContentLoaded", function() {
    
    // Fetch JSON data NAME
    fetch('../data/content.json')
        .then(response => response.json())
        .then(data => {

            // Get the name value from JSON
            const userProfile = data.userProfile;
  
            // Select the <p> element then insert the "name" value beside it
            const userName = document.querySelector('div .header-icons li p');
            if (userName) {
                userName.textContent = userProfile;
            }
        })
        .catch(error => console.error('error', error));
  });

// ======================OVERVIEW============================================


document.addEventListener("DOMContentLoaded", function() {

    // Fetch JSON data
    fetch('../data/content.json')
        .then(response => response.json())
        .then(data => {
            // Define an array of card titles
            const cardTitles = ['Unresolved', 'Overdue', 'Open', 'Hold'];
            
            // Iterate over the card titles
            cardTitles.forEach((title, index) => {
                // Get the corresponding value from JSON data
                const value = data[title.toLowerCase()]; // JSON keys are lowercase
                
                // Select the corresponding card text element and set its text content
                const cardTextElement = document.getElementById(`overview-text${index + 1}`);
                if (cardTextElement) {
                    cardTextElement.textContent = value;
                }
                
            }        
        );
        })
        .catch(error => console.error('error', error));
  });


// =====================UNRESOLVED TICKETS============================================


document.addEventListener("DOMContentLoaded", function() {

    // Fetch JSON data
    fetch('../data/content.json')
        .then(response => response.json())
        .then(data => {
            // Define an array of card titles
            const cardTitles2 = ['WaitingFeatReq', 'AwaitingCusRes', 'AwaitingDevFix', 'Pending'];
            
            // Iterate over the card titles
            cardTitles2.forEach((title, index) => {
                // Get the corresponding value from JSON data
                const value = data[title]; // JSON keys are lowercase
                
                // Select the corresponding card text element and set its text content
                const cardTextElement = document.getElementById(`unresData${index + 1}`);
                if (cardTextElement) {
                    cardTextElement.textContent = value;
                }
                
            }        
        );
        })
        .catch(error => console.error('error', error));
  });

  