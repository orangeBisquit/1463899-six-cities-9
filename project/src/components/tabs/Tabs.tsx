import React, {memo} from 'react';
import {CITIES} from '../../utils/const';
import {capitalizeFirstLetter} from '../../utils/utils';
import {useAppDispatch} from '../../hooks';
import {setCity} from '../../store/action';

type TabsProps = {
  city: string,
}

function Tabs({city}: TabsProps) {

  const dispatch = useAppDispatch();

  const handleClick = (cityName: string) => {
    dispatch(setCity(cityName));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((cityName) => {
            const activeClass = cityName === city ? 'tabs__item--active' : '';

            return (
              <li className="locations__item" key={cityName}>
                <a
                  className={`locations__item-link tabs__item ${activeClass}`}
                  href="#"

                  onClick={() => handleClick(cityName)}
                >
                  <span>{capitalizeFirstLetter(cityName)}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default memo(Tabs, (prev, next) => prev.city === next.city);
