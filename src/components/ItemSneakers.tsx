import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavoritItemById } from '../redux/slices/favoritSlice';
import { Sneakers } from '../redux/slices/sneakersSlice';
import { useAppDispatch } from '../redux/store';
import Button from '../ui/Button';

type ItemSneakersProps = {
  id: string;
  imageUrl: string;
  price: number;
  rating: number;
  title: string;
  count?: number;
  addItemToCart: (item: Sneakers) => void;
  addItemToFavorits: (item: Sneakers) => void;
};

const ItemSneakers: React.FC<ItemSneakersProps> = ({
  id,
  imageUrl,
  price,
  rating,
  title,
  addItemToCart,
  addItemToFavorits,
}) => {
  const itemFavorit = useSelector(selectFavoritItemById(id));

  const [visibleAddToCart, setVisibleAddToCart] = useState(false);

  const createItemObj = () => {
    const item = {
      id,
      imageUrl,
      price,
      rating,
      title,
    };
    return item;
  };

  const addToCart = () => {
    setVisibleAddToCart(true);
    addItemToCart(createItemObj());
  };

  const addToFavorits = () => {
    addItemToFavorits(createItemObj());
  };

  return (
    <div className="flex  flex-col  border rounded-3xl px-5 py-5 hover:shadow-lg transition-all hover:-translate-y-2">
      <div className="relative">
        <Button
          onClick={addToFavorits}
          className={itemFavorit ? 'bg-pink-200 absolute' : 'absolute'}
          small>
          {itemFavorit ? (
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.5849 3.22311C14.3615 2.7098 14.0394 2.24464 13.6365 1.85368C13.2333 1.46155 12.758 1.14993 12.2363 0.935761C11.6954 0.712803 11.1152 0.59868 10.5295 0.600018C9.70772 0.600018 8.90596 0.823295 8.20921 1.24504C8.04253 1.34593 7.88418 1.45674 7.73416 1.57748C7.58414 1.45674 7.42579 1.34593 7.2591 1.24504C6.56236 0.823295 5.7606 0.600018 4.93884 0.600018C4.3471 0.600018 3.7737 0.712483 3.23198 0.935761C2.70858 1.15077 2.23686 1.46005 1.83181 1.85368C1.42843 2.2442 1.10619 2.70947 0.883373 3.22311C0.65168 3.75732 0.533333 4.32461 0.533333 4.90844C0.533333 5.45919 0.646679 6.0331 0.871705 6.61693C1.06006 7.10483 1.33009 7.61092 1.67513 8.12198C2.22186 8.93074 2.97361 9.77423 3.90705 10.6293C5.4539 12.0467 6.98574 13.0258 7.05075 13.0655L7.44579 13.3169C7.62081 13.4277 7.84584 13.4277 8.02086 13.3169L8.4159 13.0655C8.48091 13.0242 10.0111 12.0467 11.5596 10.6293C12.493 9.77423 13.2448 8.93074 13.7915 8.12198C14.1366 7.61092 14.4083 7.10483 14.5949 6.61693C14.82 6.0331 14.9333 5.45919 14.9333 4.90844C14.935 4.32461 14.8166 3.75732 14.5849 3.22311Z"
                fill="#FF8585"
              />
            </svg>
          ) : (
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.149 2.35598L13.1484 2.35544C12.8095 2.02581 12.4097 1.76359 11.9705 1.58328L11.9696 1.58291C11.5139 1.39507 11.0249 1.29886 10.5311 1.29999L10.5295 1.29999C9.83464 1.29999 9.15837 1.48873 8.57168 1.84385L8.57166 1.84386C8.4313 1.92882 8.29851 2.02179 8.17303 2.12277L7.73415 2.47599L7.29527 2.12277C7.16979 2.02179 7.037 1.92882 6.89663 1.84386L6.89661 1.84385C6.30993 1.48873 5.63366 1.29999 4.93883 1.29999C4.43728 1.29999 3.95462 1.39501 3.49871 1.58292L3.49796 1.58323C3.05699 1.76437 2.6606 2.02431 2.31966 2.35565L2.3187 2.35658L2.3187 2.35657C1.98111 2.6834 1.71174 3.07247 1.52557 3.50161L13.149 2.35598ZM13.149 2.35598C13.4865 2.68348 13.756 3.07283 13.9429 3.50209C14.1365 3.94861 14.2347 4.42031 14.2333 4.90641V4.90841C14.2333 5.36255 14.1399 5.85119 13.9418 6.36514L13.9412 6.36674M13.149 2.35598L13.9412 6.36674M4.37988 10.1131L4.37995 10.1132C5.12906 10.7996 5.87729 11.3822 6.44748 11.7988C6.73204 12.0066 6.97087 12.1721 7.14149 12.2873C7.22678 12.345 7.29482 12.3899 7.34278 12.4212C7.39359 12.4543 7.41705 12.469 7.41553 12.468L7.42662 12.4748L7.42655 12.4749L7.73332 12.6701L8.04008 12.4749L8.04022 12.4748C8.09141 12.4423 9.58223 11.4902 11.0868 10.1131H4.37988ZM4.37988 10.1131C3.47528 9.28445 2.76336 8.48184 2.25505 7.72992M4.37988 10.1131L2.25505 7.72992M13.9412 6.36674C13.7771 6.7954 13.5328 7.25421 13.2114 7.73026M13.9412 6.36674L13.2114 7.73026M2.25505 7.72992C1.93467 7.25534 1.69124 6.79603 1.52486 6.36515L2.25505 7.72992ZM13.2114 7.73026C12.7031 8.48203 11.9913 9.28446 11.087 10.1129L13.2114 7.73026ZM1.23333 4.90841C1.23333 4.4208 1.33184 3.9483 1.52554 3.50166L1.52472 6.36479C1.32672 5.85096 1.23333 5.36244 1.23333 4.90841Z"
                stroke="#D3D3D3"
                strokeWidth="1.4"
              />
            </svg>
          )}
        </Button>
        <img width={168} height={120} src={imageUrl} alt="Sneakers" />
      </div>
      <div className="text-center mt-3 grow">{title}</div>

      <div className="flex items-center justify-between">
        <div>
          <p className="mb-1 mt-3 leading-3 font-medium uppercase text-grayContent">Ціна:</p>
          <p>{price} грн</p>
        </div>
        <div>
          <Button
            disabled={false}
            className={visibleAddToCart ? 'bg-green-400 disabled:opacity-100' : ''}
            onClick={addToCart}
            small>
            {visibleAddToCart ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                stroke-width="4.5"
                stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            ) : (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                  fill="#D3D3D3"
                />
              </svg>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemSneakers;
