import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x832ebE673f5D7Cae7D96d1D397DAd17868F83d68",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "El platito de PatitasDAO",
        description: "This NFT will give you access to PatitasDAO!",
        image: readFileSync("scripts/assets/patitasdaobowl.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()