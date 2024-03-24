import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

import HighlightedMenu from '/public/highlighted-menu.jpg';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HighlightedMenuSection = () => {
  return (
    <section className="my-5 mx-10 flex flex-row flex-1 items-center justify-center gap-10 flex-wrap">
      <article className="flex flex-1 flex-col gap-4 ">
        <p className="text-balance text-sm text-slate-500">
          {`Cozy atmosphere. Lorem ipsum has a truly cozy and inviting atmosphere
        that instantly makes you feel at home. From the moment you walk in,
        you're greeted by warm lighting, comfortable seating, and soft
        background music.`}
        </p>
        <p className="font-bold">Rully Saputra</p>
      </article>
      <article className="flex-1 h-96 relative">
        <Card className="absolute bottom-0 left-0 z-10 -m-4">
          <CardHeader>
            <CardTitle className="flex flex-row justify-between">
              <p className="text-md">Platter</p>
              <p className="text-md font-light">$10</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row gap-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Image
          src={HighlightedMenu}
          alt="highlighted menu"
          fill
          objectFit="cover"
          className="rounded-xl shadow-lg"
        />
      </article>
    </section>
  );
};

export default HighlightedMenuSection;
