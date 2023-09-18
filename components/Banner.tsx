'use client';
import classNames from 'classnames';
import styles from './Banner.module.css';
import Delivery from './svg/Delivery';
import Heart from './svg/Heart';
import LeftArrow from './svg/LeftArrow';
import Money from './svg/Money';
import RightArrow from './svg/RightArrow';
import Warranty from './svg/Warranty';
import { useEffect, useState } from 'react';

const Banner = ({ slides }: { slides: Record<string, string>[] }) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const DIRECTION = {
    left: 'left',
    right: 'right',
    none: 'none',
  };

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(DIRECTION.none);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    // Function to update the window size
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add an event listener to listen for window size changes
    window.addEventListener('resize', handleResize);

    // Delete the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Update itemsToShow when window width changes
  useEffect(() => {
    setItemsToShow(calculateItemsToShow(windowSize.width));
  }, [windowSize.width]);

  // Function to handle change of animation direction
  useEffect(() => {
    if (animationDirection !== DIRECTION.none) {
      // After 600 milliseconds, change the animation direction to 'none'
      const timeout = setTimeout(() => {
        setAnimationDirection(DIRECTION.none);
      }, 600);

      // Clear the timeout if the component is unmounted before it occurs
      return () => clearTimeout(timeout);
    }
  }, [animationDirection, DIRECTION.none]);

  // Function to calculate the number of elements to display based on the width of the screen
  function calculateItemsToShow(width: number) {
    if (width >= 1500) {
      return 4;
    } else if (width >= 1200) {
      return 3;
    } else if (width >= 768) {
      return 2;
    } else {
      return 1;
    }
  }

  const handleNextSlide = () => {
    const nextIndex = (currentSlideIndex + itemsToShow) % slides.length;
    setCurrentSlideIndex(nextIndex);
    setAnimationDirection(DIRECTION.right);
  };

  const handlePreviousSlide = () => {
    const newIndex =
      (currentSlideIndex - itemsToShow + slides.length) % slides.length;
    setCurrentSlideIndex(newIndex);
    setAnimationDirection(DIRECTION.left);
  };

  // Calculate the range of indices that should be displayed on the current slide
  const startIndex = currentSlideIndex;
  const endIndex = (startIndex + itemsToShow) % slides.length;
  const visibleSlides = [];

  if (endIndex > startIndex) {
    // Normal case, we do not need additional elements
    visibleSlides.push(...slides.slice(startIndex, endIndex));
  } else {
    // Special case, we need beginning and ending elements
    visibleSlides.push(...slides.slice(startIndex));
    visibleSlides.push(...slides.slice(0, endIndex));
  }

  return (
    <div className={styles.banner}>
      <button onClick={handlePreviousSlide} className="xl:hidden">
        <LeftArrow />
      </button>
      <ul>
        {visibleSlides.map(({ label, icon }, index) => (
          <li
            key={index}
            className={classNames(styles.content, {
              [styles.slideInRight]: animationDirection === 'right',
              [styles.slideInLeft]: animationDirection === 'left',
            })}
          >
            {icon === 'warranty' && <Warranty />}
            {icon === 'delivery' && <Delivery />}
            {icon === 'customer' && <Heart />}
            {icon === 'money' && <Money />}
            <p className={styles.label}>{label}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleNextSlide} className="xl:hidden">
        <RightArrow className={styles.icon} />
      </button>
    </div>
  );
};

export default Banner;
