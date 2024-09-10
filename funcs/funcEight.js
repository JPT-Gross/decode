export function funcEight(length, width) {
  const perimeter = 2 * (length + width);
  const area = length * width;

// returns the rectangle with the perimeter and area
return {
    rectangle: {
    perimeter: perimeter,
    area: area,
    },
};
}
