import { HStack } from "@chakra-ui/react";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";
export interface RatingStarProps {
  value: number;
}

const RatingStar = (props: RatingStarProps) => {
  return (
    <HStack width="50%">
      {[...Array(5).keys()].map((i) => {
        if (i <= props.value) return <SolidStar className="text-orange-200" />;
        else return <OutlineStar className="text-slate-300" />;
      })}
    </HStack>
  );
};

export default RatingStar;
