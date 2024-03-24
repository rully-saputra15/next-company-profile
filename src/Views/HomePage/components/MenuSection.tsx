import { Food } from '@/types/menu';
import MenuItem from './blocks/MenuItem';
import Title from './blocks/Title';

const menu: Record<string, Array<Food>> = {
  pizza: [
    { name: 'Margareta', price: 10 },
    { name: 'Double fungi', price: 10, isRecommended: true },
    { name: 'Italian pesto', price: 10 },
    { name: 'Vegan', price: 10 },
  ],
  burger: [
    { name: 'Double Patty', price: 10, isRecommended: true },
    { name: 'Veggie', price: 10 },
    { name: 'Chicken', price: 10, isRecommended: true },
    { name: 'Fish', price: 10 },
  ],
};

const MenuSection = () => {
  return (
    <section className="flex flex-col mt-10 flex-1">
      <Title label="Menu" />
      <div className="flex flex-row gap-10 items-stretch flex-wrap">
        {Object.keys(menu).map((key) =>
          menu[key].map((item) => {
            const randomEl = Math.ceil(Math.random() * 2);
            return (
              <MenuItem
                key={item.name}
                name={item.name}
                price={item.price}
                isRecommended={item.isRecommended}
                imageElIdx={randomEl}
              />
            );
          }),
        )}
      </div>
    </section>
  );
};

export default MenuSection;
