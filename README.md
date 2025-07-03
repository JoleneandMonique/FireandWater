# Fire and Water

Access here: https://joleneandmonique.github.io/FireandWater/

An interactive web-based installation that displays rotating content about wildfires, climate change, and environmental themes. Created by Jolene Armstrong and Monique Tschofen (Canada).

## About the Installation

"Fire and Water" presents a collection of thoughts and observations about wildfire behavior, environmental impact, and climate change through an automated text display system. Content rotates every 15 seconds, creating a meditative yet urgent reading experience that reflects the nature of the subject matter.

The installation uses a typewriter-style aesthetic to evoke the feeling of urgent dispatches or field notes, emphasizing the immediacy and gravity of the environmental themes presented.

## Features

- **Automatic Content Rotation**: Content changes every 15 seconds
- **User Controls**: Previous, Pause/Play, and Next buttons for manual navigation
- **Progress Indicator**: Visual progress bar showing timing until next content change
- **Mixed Media Support**: Displays both text content and images with captions
- **Expandable Content Library**: Easy to add new content through the JavaScript array
- **Responsive Design**: Works on desktop and mobile devices
- **Typewriter Aesthetic**: Uses Special Elite font for authentic typewriter feel

## Technical Structure

The installation consists of:
- `flash-text.html` - Main display page
- `resources.html` - Additional resources and bibliography
- `css/flash-styles.css` - Styling and layout
- `js/flash-script.js` - Content management and interaction logic

## Content Management

### Adding New Content

Content is stored in the `contentLibrary` array in `js/flash-script.js`. You can add new items in two formats:

**Text Content:**
```javascript
{
    type: 'text',
    content: 'Your text content here...'
}
```

**Image Content:**
```javascript
{
    type: 'image',
    src: 'path/to/your/image.jpg',
    caption: 'Optional caption for the image'
}
```

### Editing Existing Content

1. Open `js/flash-script.js`
2. Locate the `contentLibrary` array
3. Edit the `content` field for text items or `src`/`caption` fields for images
4. Save the file - changes will be reflected immediately when the page is refreshed

## Customization

### Timing Settings

To change how long each piece of content is displayed:

1. Open `js/flash-script.js`
2. Find the line: `const displayDuration = 15000; // 15 seconds`
3. Change `15000` to your desired duration in milliseconds (e.g., `10000` for 10 seconds)

### Visual Styling

The installation's appearance can be customized in `css/flash-styles.css`:

- **Colors**: Modify the CSS variables at the top of the file
- **Typography**: Change the `--typewriter-font` variable or font sizes
- **Layout**: Adjust container sizes, padding, and spacing
- **Content Display**: Modify the `#flash-container` styles

### Key CSS Variables:
```css
:root {
    --primary-color: #333333;
    --background-color: #f5f5f5;
    --accent-color: #666666;
    --text-color: #222222;
    --typewriter-font: 'Special Elite', courier, monospace;
}
```

## Installation and Setup

### Local Setup

1. Download or clone the project files
2. Ensure all files maintain their directory structure:
   ```
   /
   ├── flash-text.html
   ├── resources.html
   ├── css/
   │   └── flash-styles.css
   ├── js/
   │   └── flash-script.js
   └── images/ (for any image content)
   ```
3. Open `flash-text.html` in a web browser
4. The installation will start automatically

### Web Deployment

The installation can be deployed to any web server or hosting service:

1. Upload all files maintaining the directory structure
2. Ensure the main file (`flash-text.html`) is accessible
3. No server-side processing is required - this is a client-side application

### GitHub Pages Deployment

1. Create a new repository on GitHub
2. Upload all project files
3. In repository settings, enable GitHub Pages
4. Select the main branch as the source
5. Your installation will be available at: `https://yourusername.github.io/repository-name/flash-text.html`

## Browser Compatibility

The installation works in all modern web browsers including:
- Chrome/Chromium
- Firefox
- Safari
- Edge

JavaScript must be enabled for full functionality.

## Content Themes

The current content library focuses on:
- Wildfire behavior and characteristics
- Climate change impacts
- Environmental technology concerns
- Fire safety and emergency response
- Urban fire dynamics

## Credits

**Artists**: Jolene Armstrong and Monique Tschofen (Canada)

**Technical Implementation**: Web-based interactive installation using HTML5, CSS3, and JavaScript

## License

This project is created as an art installation. Please contact the artists for usage permissions and attribution requirements.

## Resources

For additional information, sources, and bibliography, see the [Resources page](resources.html) included with the installation.


# FireandWater
# FireandWater
# FireandWater
# FireandWater
