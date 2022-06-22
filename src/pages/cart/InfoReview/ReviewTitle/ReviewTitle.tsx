import { cartTitlesState } from 'pages/state/atoms/static/cartTitlesState';
import { useRecoilValue } from 'recoil';

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
      ;
    </>
  );
}
