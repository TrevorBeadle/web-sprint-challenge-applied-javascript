const { default: Axios } = require("axios");
import axios from 'axios';
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(response => {
        response.data.topics.forEach(item => {
            // creating tab elements and adding tab class to it
            const tab = document.createElement('div');
            tab.classList.add('tab');

            // selecting topics and adding text content to it
            const topics = document.querySelector('.topics');
            tab.textContent = `${item}`;
            
            // appending each tab to topics
            topics.append(tab);
            
            return topics;
        })
     })
     .catch(err => {
         console.log(`Error: ${err}`);
     })
