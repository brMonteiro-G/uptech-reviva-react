import { useRecoilValue } from 'recoil';
import { cartTitlesState } from 'state/atoms/static/cartTitlesState';

export function ReviewTitle() {
  const titles = useRecoilValue(cartTitlesState);
  return (
    <>
      {titles.map((title, index) => {
        return (
          <div key={index}>
            <strong>{title}</strong>
          </div>
        );
      })}
      
    </>
  );
}
