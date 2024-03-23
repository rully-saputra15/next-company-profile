import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Title from './blocks/Title';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const customerReviews: Array<CustomerReview> = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Excellent food and service!',
    rating: 5,
    message:
      'I had an amazing experience at Lorem ipsum. The food was delicious, the service was excellent, and the ambiance was lovely. Highly recommended!',
  },
  {
    id: 2,
    name: 'Alice Smith',
    description: 'Great atmosphere',
    rating: 4,
    message:
      'Lorem ipsum is a great place to dine. The atmosphere is cozy and welcoming. The food was tasty, and the staff were friendly. Overall, a pleasant experience.',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    description: 'Good food, but slow service',
    rating: 3,
    message:
      'The food at Lorem ipsum was delicious, but the service was quite slow. It took a long time for our orders to arrive, and the staff seemed overwhelmed. However, once the food arrived, it was worth the wait.',
  },
  {
    id: 4,
    name: 'Michael Brown',
    description: 'Disappointing experience',
    rating: 2,
    message:
      "I was disappointed with my experience at Lorem ipsum. The food was mediocre, and the service was subpar. Additionally, the prices were quite high for the quality of food offered. I wouldn't recommend it.",
  },
  {
    id: 5,
    name: 'Sarah Wilson',
    description: 'Lovely ambiance, average food',
    rating: 3,
    message:
      "Lorem ipsum has a lovely ambiance, but I found the food to be average. It didn't live up to the hype for me. However, the staff were polite and attentive.",
  },
  {
    id: 6,
    name: 'David Martinez',
    description: 'Decent experience',
    rating: 3,
    message:
      'My experience at Lorem ipsum was decent. The food was okay, nothing extraordinary, but not bad either. The service was prompt, and the prices were reasonable.',
  },
  {
    id: 7,
    name: 'Jessica Taylor',
    description: 'Good food, cozy ambiance',
    rating: 4,
    message:
      "I enjoyed my visit to Lorem ipsum. The food was good, and the ambiance was cozy. It's a nice place to have a meal with friends or family.",
  },
  {
    id: 8,
    name: 'Robert Anderson',
    description: 'Average experience',
    rating: 3,
    message:
      'My experience at Lorem ipsum was average. The food was decent, but nothing exceptional. The service was okay, although a bit slow at times.',
  },
  {
    id: 9,
    name: 'Megan Clark',
    description: 'Great food, attentive service',
    rating: 5,
    message:
      'I loved dining at Lorem ipsum! The food was fantastic, and the service was attentive without being intrusive. I would definitely visit again.',
  },
  {
    id: 10,
    name: 'Christopher White',
    description: 'Delicious food',
    rating: 5,
    message:
      'Lorem ipsum serves delicious food! I thoroughly enjoyed every bite. The staff were friendly, and the atmosphere was pleasant.',
  },
  {
    id: 11,
    name: 'Amanda Lee',
    description: 'Decent food, slow service',
    rating: 3,
    message:
      'The food at Lorem ipsum was decent, but the service was quite slow. It took a while for our orders to arrive, and getting the bill was a bit of a hassle. However, the staff were polite.',
  },
  {
    id: 12,
    name: 'Daniel Harris',
    description: 'Great experience overall',
    rating: 4,
    message:
      'I had a great experience at Lorem ipsum. The food was delicious, and the service was attentive. The atmosphere was also nice and relaxing.',
  },
  {
    id: 13,
    name: 'Olivia Martinez',
    description: 'Fantastic food!',
    rating: 5,
    message:
      "I can't praise the food at Lorem ipsum enough! It was absolutely fantastic. Every dish we tried was bursting with flavor. The service was also top-notch.",
  },
  {
    id: 14,
    name: 'Matthew Wilson',
    description: 'Good food, average service',
    rating: 4,
    message:
      "Lorem ipsum offers good food, but the service was just average. It wasn't bad, but it didn't stand out either. Overall, a decent dining experience.",
  },
  {
    id: 15,
    name: 'Sophia Rodriguez',
    description: 'Cozy atmosphere',
    rating: 4,
    message:
      'Lorem ipsum has a cozy atmosphere perfect for a relaxed meal. The food was tasty, and the service was friendly. I enjoyed my visit.',
  },
  {
    id: 16,
    name: 'James Thompson',
    description: 'Disappointing',
    rating: 2,
    message:
      "I was disappointed with my experience at Lorem ipsum. The food was bland, and the service was slow. It didn't live up to my expectations.",
  },
  {
    id: 17,
    name: 'Emma Davis',
    description: 'Good food, friendly staff',
    rating: 4,
    message:
      'I had a pleasant experience at Lorem ipsum. The food was good, and the staff were friendly and accommodating. I would recommend it.',
  },
  {
    id: 18,
    name: 'Liam Thomas',
    description: 'Excellent service',
    rating: 5,
    message:
      'The service at Lorem ipsum was excellent! The staff were friendly, attentive, and went above and beyond to ensure we had a great dining experience.',
  },
  {
    id: 19,
    name: 'Isabella Wilson',
    description: 'Great food!',
    rating: 5,
    message:
      'I loved the food at Lorem ipsum! Everything we ordered was delicious, and the presentation was beautiful. The service was also prompt and courteous.',
  },
  {
    id: 20,
    name: 'Noah Garcia',
    description: 'Average experience',
    rating: 3,
    message:
      'My experience at Lorem ipsum was average. The food was decent, but nothing stood out. The service was okay, but there was nothing remarkable about it.',
  },
];

const CustomerReviewSection = () => {
  return (
    <section className="flex flex-col gap-3 mt-5 mb-10 flex-1 mx-10">
      <Title label="Comments" />
      <Carousel className="mx-10" opts={{ loop: true }}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {customerReviews.map((review) => {
            return (
              <CarouselItem
                key={review.id}
                className="sm:basis-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="h-96 lg:h-72 xl:h-60 2xl:h-60">
                    <CardHeader>
                      <CardTitle className="flex flex-row gap-3 items-center">
                        <Avatar>
                          <AvatarImage src="https://picsum.photos/200/300" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>{review.name}</p>
                      </CardTitle>

                      <CardDescription>{review.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{review.message}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default CustomerReviewSection;
