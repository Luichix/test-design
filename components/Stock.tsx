import Circle from './svg/Circle';

const Stock = ({ stock }: { stock: number }) => {
  return (
    <div className="flex items-center gap-4">
      <Circle />
      <span
        className=" text-xs font-light xl:text-base "
        style={{ color: '#37465A' }}
      >
        {stock} left in Stock
      </span>
    </div>
  );
};

export default Stock;
