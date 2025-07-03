/**
 * Flashing Text Display - Main JavaScript
 * Handles content rotation and user controls
 */

document.addEventListener('DOMContentLoaded', function() {
    // Content library - easily expandable
    // Each item can be either text or an image with optional caption
    const contentLibrary = [
        {
            type: 'text',
            content: 'Wildfires burn hotter. A 2500 square foot house can be entirely consumed to ash in 5 min. To ash. Fire fighters can not contain this. This is not a typical house fire.'
        },
       
        {
            type: 'text',
            content: 'Houses that contain a lot of synthetic material will burn faster (think carpets, synthetic drapes, sofas, things made from wood composite with lots of glues, vinyl siding, laminate flooring.) "Legacy" (antique) furnishings, hardwoods burn more slowly.'
        },
        {
            type: 'text',
            content: 'Wildfire in urban centres can not be fought by conventional methods. The water in hydrants and hoses literally turns to steam. I keep seeing posts in social media platforms that the hydrants were dry, that this must be because the lines were cut off. I am going to suggest that there was water in those hydrant lines, but like it did in Fort Mac, the water was vaporized by the heat of the fires.'
        },
        {
            type: 'text',
            content: 'Flames are taller. Hundreds of feet in some cases. This means that fire fighters cannot get hoses on top of the flames to douse them; the water turns to steam, for one, and the spray becomes too fine even if it has not vapourized. Nor can water bombers fly over and douse them effectively (they can’t get in close enough, fly low enough to be effective-- steam, fine spray)'
        },
        {
            type: 'text',
            content: 'Vehicles with gas tanks are bombs. In Fort Mac, first responders discovered on the fly that using heavy equipment to move vehicles out the fire’s path (literally bulldozing cars out of potential reach), or push them into the basements of houses (thereby collapsing the house too and removing easy fuel source), meant that they were able to lower the height of the fire, allowing firefighters a better chance of attacking the fire, and create fire breaks and prevent some vehicle explosions. (there is a harrowing account of this strategy as described by the first responders in John Vaillant Fire Weather.'
        },
        {
            type: 'text',
            content: 'The heat inside of a house surrounded by flames will boil water, explode windows, and the freakish high heat alone can cause combustion where there is not yet already a fire. Spontaneous combustion is real.'
        },
         {
            type: 'text',
            content: 'Sparks, ashes can travel long distances and start new fires. In Fort Mac the fire breached the Athabasca River a one of its widest points-- 1 km-- easy peasy. Again, in social media, I am seeing people puzzled about how/why so many new fires have started, that it must be arson. But I am looking at the size of the flames, and I am looking at the high winds, and just as happened in Fort Mac, in Lytton, in Jasper I hazard to suggest that 80 mph winds can easily carry live ash more than a km.'
        },
         {
            type: 'text',
            content: 'Everything is combustible. But not everything is meant to be combustible. Toxic fumes are one problem, but a lack of oxygen is another. If you are in the middle of a conflagration, available oxygen will be very low-- fire is fueled by any an all available oxygen. These are environments in which people will not last long, even if they are not being burned.'
        },
         {
            type: 'text',
            content: 'Intense wildfires create their own weather. The heat lowers air humidity (and in California it is already low, as it is in Alberta most of the time too), and creates its own lightning-- that will start more fires, as well as tornado like activity, and winds of its own. So even if the wind is relatively low when the fire starts, the fire will cause the wind to pick up significantly. Los Angeles is experiencing unprecedented high winds in addition to what the fire itself will create.'
        },
        {
            type: 'text',
            content: 'Fire rips quickly up hill.'
        },
        {
            type: 'text',
            content: '"... ChatGPT may presently use around 39.98 Million kWh per day — enough to charge eight million phones." - Wright, Ian. “ChatGPT Energy Consumption Visualized - BEUK.” Business Energy UK (blog), February 17, 2025. https://www.businessenergyuk.com/knowledge-hub/chatgpt-energy-consumption-visualized/.com .'
        },
        {
            type: 'text',
            content: 'Each year, the 117 lowest-consumption countries each consume less electricity than ChatGPT. - Wright, Ian. “ChatGPT Energy Consumption Visualized - BEUK.” Business Energy UK (blog), February 17, 2025. https://www.businessenergyuk.com/knowledge-hub/chatgpt-energy-consumption-visualized/.com.'
        },
         
         {
            type: 'image',
            src: 'images/placeholder-1.jpg',
            caption: 'This is an example of an image with a caption. Images will be displayed with their captions for 15 seconds.'
        },
    ];

    // DOM Elements
    const contentDisplay = document.getElementById('content-display');
    const progressBar = document.getElementById('progress-bar');
    const currentIndexElement = document.getElementById('current-index');
    const totalCountElement = document.getElementById('total-count');
    const prevBtn = document.getElementById('prev-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const nextBtn = document.getElementById('next-btn');

    // Variables
    let currentIndex = 0;
    let intervalId = null;
    let isPaused = false;
    let progressInterval = null;
    const displayDuration = 15000; // 15 seconds
    const progressUpdateInterval = 100; // Update progress bar every 100ms
    let progressValue = 0;

    // Initialize
    function init() {
        // Display total count
        totalCountElement.textContent = contentLibrary.length;
        
        // Start the content rotation
        displayContent(currentIndex);
        startTimer();
        
        // Set up event listeners
        prevBtn.addEventListener('click', showPrevious);
        pauseBtn.addEventListener('click', togglePause);
        nextBtn.addEventListener('click', showNext);
    }

    // Display content at the given index
    function displayContent(index) {
        // Update current index display
        currentIndexElement.textContent = index + 1;
        
        // Get the content item
        const item = contentLibrary[index];
        
        // Create the content HTML based on type
        let contentHTML = '';
        
        if (item.type === 'text') {
            contentHTML = `<p>${item.content}</p>`;
        } else if (item.type === 'image') {
            contentHTML = `
                <img src="${item.src}" alt="${item.caption || 'Image'}">
                ${item.caption ? `<p>${item.caption}</p>` : ''}
            `;
        }
        
        // Apply a fade-out effect
        contentDisplay.classList.remove('active');
        
        // After a short delay, update the content and fade back in
        setTimeout(() => {
            contentDisplay.innerHTML = contentHTML;
            contentDisplay.classList.add('active');
        }, 500);
    }

    // Start the timer for content rotation
    function startTimer() {
        // Clear any existing intervals
        clearInterval(intervalId);
        clearInterval(progressInterval);
        
        // Reset progress
        progressValue = 0;
        progressBar.style.width = '0%';
        
        // Start progress bar update interval
        progressInterval = setInterval(updateProgressBar, progressUpdateInterval);
        
        // Start content rotation interval
        intervalId = setInterval(() => {
            if (!isPaused) {
                showNext();
            }
        }, displayDuration);
    }

    // Update the progress bar
    function updateProgressBar() {
        if (!isPaused) {
            progressValue += (progressUpdateInterval / displayDuration) * 100;
            progressBar.style.width = `${Math.min(progressValue, 100)}%`;
        }
    }

    // Show the next content item
    function showNext() {
        currentIndex = (currentIndex + 1) % contentLibrary.length;
        displayContent(currentIndex);
        startTimer();
    }

    // Show the previous content item
    function showPrevious() {
        currentIndex = (currentIndex - 1 + contentLibrary.length) % contentLibrary.length;
        displayContent(currentIndex);
        startTimer();
    }

    // Toggle pause/play
    function togglePause() {
        isPaused = !isPaused;
        pauseBtn.textContent = isPaused ? 'Play' : 'Pause';
        
        if (!isPaused) {
            // If we're resuming, we need to adjust the progress value
            // to account for the time that has passed
            progressValue = 0;
            progressBar.style.width = '0%';
        }
    }

    // Initialize the application
    init();
});
