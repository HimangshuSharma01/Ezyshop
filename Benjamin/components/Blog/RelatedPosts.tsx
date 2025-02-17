"use client";
import { Folder, MessagesSquare, User } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const blogData = [
  {
    id: "1",
    title: "10 Ways to Save on Groceries This Month",
    url: "/blog-1.png",
    author: "Admin",
    category: "Shopping Tips",
    comments: "15",
    content:
      "Check out these insider tips to help you cut down on your monthly food budget.",
  },
  {
    id: "2",
    title: "How to Compare Prices and Find Deals Across Multiple Stores",
    url: "/blog-2.png",
    author: "Admin",
    category: "Online Shopping",
    comments: "18",
    content:
      "Learn how to use Ezyshop's comparison tool to get the best deals across stores.",
  },
  {
    id: "3",
    title: "Best Local Stores for Organic Products in Your Area",
    url: "/blog-3.png",
    author: "Admin",
    category: "Local Shopping",
    comments: "15",
    content: "Support local stores and discover organic groceries near you.",
  },
];

const RelatedPosts = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-10 text-4xl font-bold text-customBlue font-handlee">
        Related Posts
      </div>
      <div className="w-full mt-10 text-white mb-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="">
            {blogData.map((card) => (
              <CarouselItem className="basis-1/2 p-4">
                <Link href={`/Blog/${card.id}`}>
                  <Card
                    key={card.id}
                    className="w-[320px] h-[160px]  flex items-center justify-center hover:scale-105 transition duration-800 bg-gray-100"
                  >
                    <CardHeader className="p-1 w-full ">
                      <div className="flex items-center justify-center p-0">
                        <img
                          alt="card image"
                          className="h-24 w-24 rounded-lg"
                          src={card.url}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="text-justify p-2 flex flex-col items-center justify-center text-md">
                      <CardTitle className="flex text-center items-center text-xl pt-4 text-customBlue mt-2 justify-center font-handlee">
                        {card.title}
                      </CardTitle>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex items-center justify-center gap-2">
                          <User className="h-4 w-4 text-customTeal" />
                          <div className="text-sm text-gray-500">
                            {" "}
                            {card.author}
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Folder className="h-4 w-4 text-customTeal" />
                          <div className="text-sm text-gray-500">
                            {card.category}
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <MessagesSquare className="h-4 w-4 text-customTeal" />
                          <div className="text-sm text-gray-500">
                            {card.comments}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default RelatedPosts;
