# Riyah Restaurant Website

A modern, responsive website for Riyah Restaurant built with HTML, CSS, and vanilla JavaScript.

## Features

- Responsive design that works on desktop, tablet, and mobile devices
- Modern and clean user interface
- Smooth scrolling navigation
- Interactive menu with category filtering
- Image gallery with hover effects
- Contact form with validation
- Google Maps integration
- Mobile-friendly navigation menu

## Project Structure

```
riyah-restaurant/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Styles for the website
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Directory for all website images
│   └── README.md       # Image requirements and guidelines
└── README.md          # Project documentation
```

## Setup Instructions

1. Clone or download this repository
2. Add the required images to the `images` directory (see `images/README.md` for requirements)
3. Open `index.html` in a web browser

## Image Requirements

Before running the website, make sure to add all required images to the `images` directory. See `images/README.md` for detailed requirements and guidelines.

## Browser Compatibility

The website is compatible with:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Safari (latest)
- Microsoft Edge (latest)

## Customization

### Modifying the Menu
To modify the menu items, edit the `menuData` object in `js/script.js`. Each menu item requires:
- name
- description
- price
- image path

### Updating Gallery
To update the gallery images, modify the `galleryImages` array in `js/script.js`. Each gallery item requires:
- src (image path)
- alt (image description)

### Changing Colors
The website uses a consistent color scheme that can be modified in `css/style.css`. The main colors are:
- Primary: #e67e22 (Orange)
- Secondary: #2c3e50 (Dark Blue)
- Background: #f5f6fa (Light Gray)

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.
