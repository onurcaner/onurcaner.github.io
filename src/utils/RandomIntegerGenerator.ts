export class RandomIntegerGenerator {
  public generate({ minimum = 0, maximum = 1 }): number {
    if (maximum < minimum)
      throw new Error('maximum has to be greater than minimum');

    const difference = maximum - minimum;
    const number = minimum + Math.round(difference * Math.random());
    return number;
  }
}
