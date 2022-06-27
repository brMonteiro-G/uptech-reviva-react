import { useAddButton } from 'state/hooks/useAddButton';
import { useUpdateStorage } from 'state/hooks/useUpdateStorage';
import { updateValues } from 'utils/updateValue';
import { ProductsInCartProps } from '../ReviewItem';

interface ButtonProps extends ProductsInCartProps {
  operation: string;
}

export function Addbutton({ item, operation }: ButtonProps) {
  const updateCart = useAddButton();
  const addButtonFunction = useAddButton();
  const updateStorage = useUpdateStorage();
  return (
    <button
      id='plus'
      onClick={() => {
        addButtonFunction(item, operation);

        // eslint-disable-next-line no-debugger
        // updateStorage(item);
        // const teste = use.find((element) => element.name === item.name);
        // console.log('Estoque atualizado?');
        // console.log(teste);
        //const result = updateValues(item, 'increase');
      }}
    >
      {operation === 'plus' ? '+' : '-'}
    </button>
  );
}
