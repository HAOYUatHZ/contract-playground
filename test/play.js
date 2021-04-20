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

  it("playing connect", async function () {
    await expect(await acc1.getBalance()).to.equal("9999985767784000000000");
    await playToken
      .connect(acc1)
      .depositETH(acc1addr, { value: "999985767784000000000" });
    await expect(await acc1.getBalance()).to.equal("8999999799800000000000");
    await playToken
      .connect(acc1)
      .withdrawETH(acc1addr, "999985767784000000000");
    await expect(await acc1.getBalance()).to.equal("9999985272232000000000");
  });

  it("playing call", async function () {
  	// TODO:
  });
});
