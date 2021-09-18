import generateId from "../../utils/generateId";

describe("Generate Id Test", () => {
  it("generates random Id",() => {
    const a = generateId();
    const b = generateId();

    expect(a).not.toEqual(b);
  });
});