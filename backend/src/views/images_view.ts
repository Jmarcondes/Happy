import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      //url from web application
      //url: `http://localhost:3333/uploads/${image.path}`,
      //url from mobile application
      url: `http://10.0.0.108:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]){
    return images.map(image => this.render(image))
  }
};