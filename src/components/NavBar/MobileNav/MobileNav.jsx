import { useState, useEffect } from 'react';
import Hamburguer from './Hamburguer/Hamburguer';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import './mobileNav.scss';

const MobileNav = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(`/categories`);

  const handleClick = (e) => {
    e.stopPropagation();
    setActive(!active);
  };

  useEffect(() => {
    const closeMenu = () => {
      setActive(false);
    };

    document.body.addEventListener('click', closeMenu);

    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

  return (
    <>
      <Hamburguer active={active} handleClick={handleClick} />
      <div
        className={active ? 'products-container active' : 'products-container'}
      >
        <h2 onClick={() => navigate('/products')}>Productos</h2>
        <ul>
          {data ? (
            data.map((category) => {
              return (
                <li key={category.id} value={category.id}>
                  {category.attributes.title.toUpperCase()}
                </li>
              );
            })
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className=""></div>
      <div className={active ? 'background active' : 'background'}></div>
    </>
  );
};
export default MobileNav;
