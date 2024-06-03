import { HStack } from "@chakra-ui/react";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";

export interface RatingStarProps {
  value: number;
  onChange: (value: number) => void;
}

const RatingStar = (props: RatingStarProps) => {
  return (
    <HStack>
      {[...Array(5).keys()].map((i) => {
        if (i + 1 <= props.value)
          return (
            <SolidStar
              key={i + 1}
              className="text-orange-200 w-8 h-8"
              onClick={() => props.onChange(i + 1)}
            />
          );
        else
          return (
            <OutlineStar
              key={i + 1}
              className="text-slate-300 w-8 h-8"
              onClick={() => props.onChange(i + 1)}
            />
          );
      })}
    </HStack>
  );
};

export default RatingStar;
