import { HStack } from "@chakra-ui/react";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";

export interface RatingStarProps {
  value: number;
  size: number;
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
              className={`text-orange-200 w-${props.size} h-${props.size}`}
              onClick={() => props.onChange(i + 1)}
            />
          );
        else
          return (
            <OutlineStar
              key={i + 1}
              className={`text-slate-300 w-${props.size} h-${props.size}`}
              onClick={() => props.onChange(i + 1)}
            />
          );
      })}
    </HStack>
  );
};

export default RatingStar;
