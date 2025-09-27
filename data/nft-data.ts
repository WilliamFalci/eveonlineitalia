
// type 
export interface INftType {
  id: number;
  img: string;
  title: string;
  creator: string;
  creator_name: string;
  eth: number;
  trending?: boolean;
}

const nft_data:INftType[] = [
  {
    id:1,
    img:'/images/nft/nft_img01.jpg',
    title:'wolf gaming art',
    creator:'/images/nft/nft_avatar.png',
    creator_name:'Alax Max',
    eth:1.002
  },
  {
    id:2,
    img:'/images/nft/nft_img02.jpg',
    title:'FOREST PRINCESS',
    creator:'/images/nft/nft_avatar.png',
    creator_name:'Alax Max',
    eth:1.053
  },
  {
    id:3,
    img:'/images/nft/nft_img03.jpg',
    title:'GIRL FIREFLY ART',
    creator:'/images/nft/nft_avatar.png',
    creator_name:'Alax Max',
    eth:1.024
  },
  // trending
  {
    id:4,
    img:'/images/nft/nft_img04.jpg',
    title:'Crypto Max',
    creator:'/images/nft/nft_avatar01.png',
    creator_name:'Jon Max',
    eth:1.002,
    trending:true,
  },
  {
    id:5,
    img:'/images/nft/nft_img05.jpg',
    title:'Golden Crypto',
    creator:'/images/nft/nft_avatar02.png',
    creator_name:'Jon Max',
    eth:1.004,
    trending:true,
  },
  {
    id:6,
    img:'/images/nft/nft_img06.jpg',
    title:'Black Crypto',
    creator:'/images/nft/nft_avatar03.png',
    creator_name:'Jon Max',
    eth:1.005,
    trending:true,
  },
  {
    id:7,
    img:'/images/nft/nft_img07.jpg',
    title:'Luck Crypto',
    creator:'/images/nft/nft_avatar01.png',
    creator_name:'Jon Max',
    eth:1.006,
    trending:true,
  },
]

export default nft_data;