const fs = require('fs/promises');

// const write = async () => {
//   try {
//     await fs.writeFile("./data.txt", "Hello, World!", "utf-8");
//     console.log("File written successfully!");
//   } catch (error) {
//     console.error("Error writing file:", error);
//   }
// };

// write();
const write = async () => {
    const data = "I am newest data";
    fs.writeFile("./data.txt", data, (err) => {
      if (err) console.log("error", err);
      else console.log("file updated successfully");
    });
  };
  
  write();
  