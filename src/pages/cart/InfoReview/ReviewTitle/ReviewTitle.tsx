import {cartReviewTitle as titles} from 'pages/assets/cartReviewTitle';

export function ReviewTitle() {

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
