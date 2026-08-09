export class RandomIntegerGenerator {
  public generate({ minimum = 0, maximum = 1 }): number {
    if (maximum < minimum)
      throw new Error('maximum has to be greater than minimum');

    const maxDifference = maximum - minimum;
    const randomDifference = Math.round(maxDifference * Math.random());
    return minimum + randomDifference;
  }
}
