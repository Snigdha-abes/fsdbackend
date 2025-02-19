const fs = require('fs/promises');

const read = async () => {
  try {
    const data = await fs.readFile("./data.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
read();
