const { expect } = require("chai");

describe("play", () => {
  before(async () => {
    [acc1] = await ethers.getSigners();
    acc1addr = acc1.address;

    const playTokenFactory = await ethers.getContractFactory("PlayToken");
    playToken = await playTokenFactory.deploy(1000);

    await playToken.deployed();
    // await playToken.initialize();
  });

  it("playing", async function () {
    await expect(await acc1.getBalance()).to.equal("9999985767784000000000");
    // await playToken.connect(acc1).approve(fluidex.address, 1000);
  });
});
