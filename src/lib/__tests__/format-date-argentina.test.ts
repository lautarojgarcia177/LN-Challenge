import formatDateArgentina from "../format-date-argentina";

describe("formatDateArgentina", () => {
  it("aplica formato a la fecha correctamente en Español local de Argentina", () => {
    const date = new Date(2023, 9, 15);
    const formattedDate = formatDateArgentina(date);
    expect(formattedDate).toBe("15 de octubre de 2023");
  });

  it("aplica formato correctamente cuando la fecha tiene un solo digito de dia y de mes", () => {
    const date = new Date(2023, 8, 5);
    const formattedDate = formatDateArgentina(date);
    expect(formattedDate).toBe("5 de septiembre de 2023");
  });
  
  it("coincide con la snapshot", () => {
    const date = new Date(2023, 9, 15);
    const formattedDate = formatDateArgentina(date);
    expect(formattedDate).toMatchSnapshot();
  });
});
