import { Article } from "@/types";
import sumarizeTags from "../sumarize-tags";

describe("sumarizeTags", () => {
  it("retorna un array vacio cuando no hay articulos", () => {
    const result = sumarizeTags([]);
    expect(result).toEqual([]);
  });

  it("summarizes tags correctly", () => {
    const articles = [
      {
        taxonomy: {
          tags: [
            { slug: "tag1", text: "Tag 1" },
            { slug: "tag2", text: "Tag 2" },
          ],
        },
      },
      {
        taxonomy: {
          tags: [
            { slug: "tag1", text: "Tag 1" },
            { slug: "tag3", text: "Tag 3" },
          ],
        },
      },
    ] as Article[];
    const result = sumarizeTags(articles);
    expect(result).toEqual([
      { slug: "tag1", text: "Tag 1", count: 2 },
      { slug: "tag2", text: "Tag 2", count: 1 },
      { slug: "tag3", text: "Tag 3", count: 1 },
    ]);
  });

  it("limita el numero de etiquetas retornadas en base al parametro 'amount'", () => {
    const articles = [
      {
        taxonomy: {
          tags: [
            { slug: "tag1", text: "Tag 1" },
            { slug: "tag2", text: "Tag 2" },
          ],
        },
      },
      {
        taxonomy: {
          tags: [
            { slug: "tag1", text: "Tag 1" },
            { slug: "tag3", text: "Tag 3" },
          ],
        },
      },
      { taxonomy: { tags: [{ slug: "tag4", text: "Tag 4" }] } },
    ] as Article[];
    const result = sumarizeTags(articles, 2);
    expect(result).toEqual([
      { slug: "tag1", text: "Tag 1", count: 2 },
      { slug: "tag2", text: "Tag 2", count: 1 },
    ]);
  });

  it("Maneja los articulos sin tags correctamente", () => {
    const articles = [
      { taxonomy: { tags: [] } },
      { taxonomy: { tags: [{ slug: "tag1", text: "Tag 1" }] } },
    ] as Article[];
    const result = sumarizeTags(articles);
    expect(result).toEqual([{ slug: "tag1", text: "Tag 1", count: 1 }]);
  });

  it("Maneja los articulos con taxonomy undefined correctamente", () => {
    const articles = [
      { taxonomy: undefined },
      { taxonomy: { tags: [{ slug: "tag1", text: "Tag 1" }] } },
    ] as Article[];
    const result = sumarizeTags(articles);
    expect(result).toEqual([{ slug: "tag1", text: "Tag 1", count: 1 }]);
  });

  it("coincide con la snapshot", () => {
    const articles = [
      {
        taxonomy: {
          tags: [
            { slug: "tag1", text: "Tag 1" },
            { slug: "tag2", text: "Tag 2" },
          ],
        },
      },
      {
        taxonomy: {
          tags: [
            { slug: "tag1", text: "Tag 1" },
            { slug: "tag3", text: "Tag 3" },
          ],
        },
      },
    ] as Article[];
    const result = sumarizeTags(articles);
    expect(result).toMatchSnapshot();
  });
});
