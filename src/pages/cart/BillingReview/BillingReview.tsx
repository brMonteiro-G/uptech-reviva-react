import { cartState } from 'pages/state/atoms/dynamic/cartState';
import { useRecoilValue } from 'recoil';
import { ReviewPayment, ReviewPaymentConfig } from './BillingReviewStyle';

export function BillingReview() {
  const getCart = useRecoilValue(cartState);
  const cart = [...getCart];
  const total = cart.reduce(
    (acc, currentValue) => (acc += currentValue.price),
    0
  );

  return (
    <ReviewPayment>
      <ReviewPaymentConfig>
        {cart.map((productsInCart) => {
          return (
            <>
              <p key={productsInCart.id}>
                2x
                {(productsInCart.price + productsInCart.price * 0.1).toFixed(2)}{' '}
                = R$ {productsInCart.price.toFixed(2)}
              </p>
            </>
          );
        })}
        <p>Total: R${total.toFixed(2)}</p>
        <button>Ir para pagamento</button>
      </ReviewPaymentConfig>
    </ReviewPayment>
  );
}
