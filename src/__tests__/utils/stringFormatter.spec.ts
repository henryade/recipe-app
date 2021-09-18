import { 
  Capitalize,
  SanitizeWord,
  SanitizeString
} from "../../utils/stringFormatter";

describe("String Formatter Test", () => {
  it("capitalizes text",() => {
    const text = "string";
    const answer = "String";
    const CapitalizedText = Capitalize(text);

    expect(CapitalizedText).not.toEqual(text);
    expect(CapitalizedText).toEqual(answer);
  });

  it("sanitazes words by removing allowed character duplicates and unallowed characters",() => {
    const text = "//////str---ing    //////";
    const answer = "str-ing";
    const SanitizedText = SanitizeWord(text);

    expect(SanitizedText).not.toEqual(answer);
  });

  it("removes unallowed characters",() => {
    const text = "[][][]...______==========+++++strin/g....";
    const answer = "strin/g";
    const SanitizedText = SanitizeString(text);

    expect(SanitizedText).not.toEqual(answer);
  });
});