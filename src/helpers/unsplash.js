const token = 'cg7vgx7KmJv5geMd_t8y2gdCD6EWFWmdGv6RpShkpd8';
import img from '../../images/image-not-found.jpg';

export const getImage = async count => {
  const result = await fetch(
    `https://api.unsplash.com/photos/random?count=${count}&client_id=${token}`,
  );
  const data = await result.json();
  return data.map(img => ({
    image: img.urls.regular,
    description: img.alt_description,
    isLocal: false,
  }));
};

export const getLocalImage = () => ({
  image: img,
  description:
    'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir 🧐',
  isLocal: true,
});
