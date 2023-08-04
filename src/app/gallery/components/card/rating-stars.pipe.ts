import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingStars'
})
export class RatingStarsPipe implements PipeTransform {
  transform(rate: number): string {
    // Validate the rate input
    if (rate < 0 || rate > 5) {
      throw new Error('Rating must be between 0 and 5');
    }

    // Round the rate to the nearest half
    const roundedRate = Math.round(rate * 2) / 2;

    // Define Unicode characters for stars
    const filledStar = '★';
    const halfStar = '½';
    const emptyStar = '☆';

    // Determine the number of filled, half, and empty stars
    const filledStars = Math.floor(roundedRate);
    const hasHalfStar = roundedRate - filledStars >= 0.5;
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

    // Construct the rendered stars string
    let starsStr = filledStar.repeat(filledStars);
    if (hasHalfStar) {
      starsStr += halfStar;
    }
    starsStr += emptyStar.repeat(emptyStars);

    return starsStr;
  }
}
