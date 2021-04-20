const { expect } = require("chai");

describe("play", () => {

  before(async () => {

    const playTokenFactory = await ethers.getContractFactory("PlayToken");
    playToken = await playTokenFactory.deploy(1000);

    await playToken.deployed();
    // await playToken.initialize();
  });

  it("playing", async function () {
  });
});