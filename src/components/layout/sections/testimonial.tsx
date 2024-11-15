"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Emily Johnson",
    userName: "Travel Blogger",
    comment:
      "TripMate made my travel planning so much easier! The recommendations were spot on and saved me a lot of time.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Michael Smith",
    userName: "Frequent Traveler",
    comment:
      "I love how TripMate suggests hidden gems that I would have never found on my own. Highly recommend!",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Williams",
    userName: "Adventure Seeker",
    comment:
      "The TripMate app is a game changer! It helped me plan my entire trip effortlessly and everything went smoothly.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "David Brown",
    userName: "Business Traveler",
    comment:
      "TripMate is a must-have for any traveler. It provides excellent recommendations and makes planning a breeze.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Emma Davis",
    userName: "Solo Traveler",
    comment:
      "I was skeptical at first, but TripMate exceeded my expectations. It made my solo trip planning so much easier and enjoyable.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Olivia Martinez",
    userName: "Family Traveler",
    comment:
      "Planning a family trip has never been this easy. TripMate provided great suggestions that catered to everyone's interests.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our Beta Testers Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};