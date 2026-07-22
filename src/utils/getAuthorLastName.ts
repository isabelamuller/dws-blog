export const getLastName = (name: string) => {
  return name.trim().split(/\s+/).at(-1) ?? name;
};
