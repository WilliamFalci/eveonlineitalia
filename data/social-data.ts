// type 
type ISocial = {
  id: number;
  link: string;
  icon: string;
  title: string;
  arialabel: string;
}

const social_data: ISocial[] = [
  {
    id: 1,
    link: 'https://discord.gg/t7ypApFQ7v',
    icon: 'flaticon-discord',
    title: 'discord',
    arialabel: 'EVE Online Italia Discord Server'
  }
]

export default social_data;