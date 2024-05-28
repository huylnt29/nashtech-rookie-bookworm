import { HStack } from "@chakra-ui/react";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";

export interface RatingStarProps {
  value: number;
}

const RatingStar = (props: RatingStarProps) => {
  return (
    <HStack>
      {[...Array(5).keys()].map((i) => {
        if (i < props.value)
          return <SolidStar key={i} className="text-orange-200 w-8 h-8" />;
        else return <OutlineStar key={i} className="text-slate-300 w-8 h-8" />;
      })}
    </HStack>
  );
};

export default RatingStar;
