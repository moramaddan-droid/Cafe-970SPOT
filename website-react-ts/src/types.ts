export type CategoryId = 'all' | 'hot-coffee' | 'iced-coffee' | 'matcha' | 'bakery' | 'refreshers';

export interface MenuItem {
  id: string;
  category: CategoryId;
  categoryName: string;
  name: string;
  nameEn: string;
  desc: string;
  badge?: string;
  image: string;
}
