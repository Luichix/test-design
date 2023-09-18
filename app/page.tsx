import Brands from '@/components/Brands';
import styles from './page.module.css';
import Stage from '@/components/Stage';
import classNames from 'classnames';
import Image from 'next/image';
import productDetails from '@/public/images/product_details.png';
import guaranteeStamp from '@/public/images/guarantee_stamp.png';
import profile from '@/public/images/profile.png';
import Product from '@/components/Product';
import { CheckMedium } from '@/components/svg/Check';
import Percentage from '@/components/svg/Percentage';
import Link from 'next/link';
import { RightArrowMedium } from '@/components/svg/RightArrow';
import {
  Amex,
  ApplePay,
  GooglePay,
  Mastercard,
  Paypal,
  ShopPay,
  Visa,
} from '@/components/svg/Payment';
import { LockDark } from '@/components/svg/Lock';
import Verified from '@/components/svg/Verified';
import { StartProfile } from '@/components/svg/Star';

const stages = [
  { id: 1, label: 'Cart Review', completed: true, active: false },
  { id: 2, label: 'Checkout', completed: true, active: false },
  { id: 3, label: 'Special Offer', completed: false, active: true },
  { id: 4, label: 'Confirmation', completed: false, active: false },
];

const product = {
  name: 'Clarifion Air Ionizer',
  imageURL:
    'https://s3-alpha-sig.figma.com/img/d7dc/d812/be356da38eef349d3173d8e6588e7d74?Expires=1696204800&Signature=JsAgU3tZulZupdLZF9VVyoJK3TiMHxJ-LNq7rU5P1~LbsZqJ5a8TiYFqYEmVEK9aq3Be1doZkJwowSmkGStMAqHXOFFnPtaxhnIS9FqAHzSj4e8w~uq9xClMHWvP124pDJULrf8Mfb9TFf4-eNmj9GhrHgvPUXCv7-BtF7DfTOjruxGWyQwkeAiD4KMgrmjvNgjfbzhmejsyiTB5Qhf9iLKOBBst3YZgvUQ27jOSfcaRzS0p8Ej9PU1j7i~eJr1yeILQSXgoa0lWl-PTqN8qqNWCchBgrtc5n-3QQU8v3zE3wlBgmZaBJfuSsPnNe~6fUP2v3dNohP8ikmer5qr0Ag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  rating: 5,
  alt: 'product clarifion air ionizer',
  stock: 12,
  price: 180,
  special: 84,
  description:
    'Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.',
};

export default function Home() {
  return (
    <main className={styles.container}>
      <Brands />
      <section className={styles.section}>
        <p className={classNames(styles.text, styles.title)}>
          Wait ! Your Order In Progress.
        </p>
        <p className={classNames(styles.text, styles.subtitle)}>
          Lorem ipsum dolor sit amet, consectetur &nbsp;
          <span className="hidden lg:inline xl:inline">adipiscing</span>
        </p>
        <div className={styles.stages}>
          {stages.map(({ id, label, completed, active }) => (
            <Stage
              key={id}
              id={id}
              label={label}
              completed={completed}
              active={active}
            />
          ))}
        </div>
        <div className="flex flex-col gap-6 lg:p-10 lg:gap-y-8 lg:gap-x-10 lg:grid lg:grid-cols-2 lg:grid-rows-auto">
          <p className={classNames(styles.text, styles.promotion)}>
            <span className={styles.special}>ONE TIME ONLY</span> special price
            for 6 extra Clarifion for only{' '}
            <span className={styles.special}>$14 each</span> ($84.00 total!)
          </p>
          <div className="lg:col-start-1 lg:row-start-1 flex flex-col lg:row-end-7 ">
            <figure className="w-full h-full self-center lg:w-full lg:h-auto ">
              <Image
                src={productDetails}
                alt="details products image"
                width={800}
                height={860}
                style={{
                  borderRadius: '10px',
                  zIndex: '-1',
                  position: 'relative',
                }}
                sizes="(max-width: 768px) 320px, (max-width: 1200px) 575px, 575px"
              />
            </figure>
            <div className={styles.recommend}>
              <div className={styles.profile}>
                <figure>
                  <Image
                    src={profile}
                    alt="customer review"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100px, (max-width: 1200px) 100px, 100px"
                  />
                </figure>
                <div className="flex flex-col justify-center gap-2 ">
                  <StartProfile />
                  <div className="flex flex-row items-center gap-2">
                    <span className={styles.name}>Ken T.</span>
                    <Verified />
                    <span className={styles.verified}>Verified Customer</span>
                  </div>
                </div>
              </div>
              <p>
                “As soon as the Clarifions arrived I put one in my bedroom. This
                was late in the afternoon. When I went to the bedroom in the
                evening it smelled clean. When I went to bed I felt I could
                breathe better. Wonderful.”
              </p>
            </div>
          </div>

          <Product
            name={product.name}
            imageURL={product.imageURL}
            rating={product.rating}
            stock={product.stock}
            price={product.price}
            special={product.special}
            description={product.description}
            alt={product.alt}
          />
          <div className={styles.features}>
            <div>
              <CheckMedium />
              <p>
                Negative Ion Technology may <b>help with allergens</b>
              </p>
            </div>
            <div>
              <CheckMedium />
              <p>
                Designed for <b>air rejuvenation</b>
              </p>
            </div>
            <div>
              <CheckMedium />
              <p>
                <b>Perfect for every room</b> in all types of places.
              </p>
            </div>
          </div>
          <div className={styles.percentage}>
            <div>
              <Percentage />
              <p>
                Save <span>53%</span> and get <span>6 extra Clarifision</span>{' '}
                for only <span>$14 Each</span>.
              </p>
            </div>
          </div>
          <div className={styles.shipping}>
            <button type="button">
              <span className="flex items-center gap-4">
                <b className="text-white uppercase text-sm xl:text-xl ">
                  Yes - Claim my discount
                </b>
                <RightArrowMedium />
              </span>
            </button>
            <div className={styles.payment}>
              <div>
                <span>Free shipping</span>
                <hr className={styles.lineSecurity} />
                <div className={styles.security}>
                  <LockDark />
                  <span className={styles.secure}>
                    Secure 256-bit SSL encryption
                  </span>
                </div>
              </div>
              <hr className={styles.linePayment} />
              <div className={styles.paymentMethod}>
                <Visa />
                <ShopPay />
                <Paypal />
                <Mastercard />
                <GooglePay />
                <ApplePay />
                <Amex />
              </div>
            </div>
            <Link href="/">No thanks, I don’t want this.</Link>
          </div>
          <div className="flex flex-row gap-4">
            <figure className="w-[48px] h-[48px] xl:w-[88px] xl:h-[88px] relative block">
              <Image
                src={guaranteeStamp}
                width={88}
                height={88}
                alt="guarantee stamp"
                sizes="(max-width: 768px) 48px, (max-width: 1200px) 88px, 88px"
                style={{
                  transform: 'scale(1.2)',
                  zIndex: '-10',
                  position: 'relative',
                }}
              />
            </figure>
            <p className={styles.guarantee}>
              If you are not completely thrilled with your Clarifion - We have a
              &nbsp;
              <b>30 day satisfaction guarantee</b>. Please refer to our return
              policy at the bottom of the page for more details. Happy Shopping!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
