//imgのpathを生成する関数
const generateImgPath = (fileName: string): string => {
  return `${import.meta.env.BASE_URL}img/${fileName}`;
};

export default generateImgPath;
