import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const OurServiceSection = () => {
  return (
    <section className="flex flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row items-stretch gap-10 my-10 mx-52 xs:mx-10 sm:mx-10 flex-wrap">
      {new Array(3).fill(null).map((_, index) => (
        <Card key={index} className="flex-1">
          <CardHeader className="flex flex-row gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Lorem Ipsum</p>
          </CardHeader>
          <CardContent className="space-y-2">
            <Badge>Lorem</Badge>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              a est id enim facilisis tristique. Nam ut elit sed velit volutpat
              finibus in tempor eros. Nunc ullamcorper placerat justo, id
              pellentesque nisi vehicula eleifend. Morbi bibendum non mauris eu
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default OurServiceSection;
