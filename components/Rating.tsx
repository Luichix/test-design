import Star from './svg/Star';

const Rating = ({ stars, rating }: { stars: boolean[]; rating: number }) => {
  return (
    <div className="flex flex-row">
      {stars.map((filled, index) => (
        <Star key={index} filled={filled && index <= rating} />
      ))}
    </div>
  );
};

export default Rating;
