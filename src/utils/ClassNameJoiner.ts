export class ClassNameJoiner {
  public join(...classNames: (string | false | null | undefined)[]): string {
    return classNames
      .filter((className) => typeof className === 'string')
      .join(' ');
  }
}
