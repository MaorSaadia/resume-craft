export const formatFileName = (title: string, useHyphen: boolean = true) => {
  const delimiter = useHyphen ? "-" : "_";
  return title.trim().replace(/\s+/g, delimiter) + "pdf";
};
