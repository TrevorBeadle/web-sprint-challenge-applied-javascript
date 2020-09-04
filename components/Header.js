// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // creating elements
    const header = document.createElement('div');
    const spanDate = document.createElement('span');
    const spanTemp = document.createElement('span');
    const headerH1 = document.createElement('h1');

    // adding classes to the elements
    header.classList.add('header');
    spanDate.classList.add('date');
    spanTemp.classList.add('temp');
    
    // adding text content to elements
    spanDate.textContent = 'MARCH 28, 2020';
    headerH1.textContent = 'Lambda Times';
    spanTemp.textContent = '98°';

    // appending elements to .header
    header.append(spanDate);
    header.append(headerH1);
    header.append(spanTemp);

    // selecting header-container and appending header to it
    const headerContainer = document.querySelector('.header-container');
    headerContainer.append(header);

    return headerContainer;
}

Header();