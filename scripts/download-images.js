const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
    filename: 'hero.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
    filename: 'vehicle1.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
    filename: 'vehicle2.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
    filename: 'vehicle3.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
    filename: 'vehicle4.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
    filename: 'vehicle5.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
    filename: 'vehicle6.jpg',
  },
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, '..', 'public', 'images', filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
      console.log(`Downloaded ${image.filename}`);
    } catch (error) {
      console.error(`Error downloading ${image.filename}:`, error);
    }
  }
};

downloadAllImages(); 