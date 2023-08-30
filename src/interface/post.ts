export default interface IconTextInterface {
  icon: string;
  text: string;
}
export default interface FeaturedInterface {
  thumb: string;
  title: string;
  post_wgd: IconTextInterface[];
}
export interface LatestInterface {
  thumb: string;
  category: string;
  post_title: string;
  desc: string;
  post_wgd: IconTextInterface[];
  // date: string;
  // read_time: string;
}
export interface PopularInterface {
  thumb: string;
  post_title: string;
  date: string;
  category: string;
  read_time: string;
}
export interface categoryInterface {
  icon: string;
  category_name: string;
}
