export const getAuthorLastName = (name: string) => {
  return name.trim().split(/\s+/).at(-1) ?? name;
};
