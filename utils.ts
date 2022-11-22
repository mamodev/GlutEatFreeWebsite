export function composeClasses(classes: Array<string | undefined>): string {
  return classes.filter((e) => typeof e !== "undefined").join(" ");
}
