export const convertBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      const file64 = fileReader.result as string;
      resolve(file64);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
