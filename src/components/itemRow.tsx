import { useBasket } from '../context/consumer'

export const ItemRow = ({ item }: { item: Item }) => {
  const { addItem, removeItem } = useBasket();

  return(
     <div className='flex flex-row justify-between items-center mt-4'>  
        <div className='w-1/6 font-bold'>{item.name}</div>
        <div className='w-1/4'>{item.description}</div>
        <div className='w-1/8'>£{item.price}</div>
        <button onClick={() => addItem(item)} className='text-xs p-2 rounded border border-gray-300 bg-gray-200 hover:bg-gray-300 hover:bg-gray-400'>Add to Basket</button>
        <button onClick={() => removeItem(item, false)} className='text-xs p-2 rounded border border-red-600 bg-red-500 hover:bg-red-600 hover:bg-red-700 text-white'>Remove from Basket</button>
      </div>
  )
}