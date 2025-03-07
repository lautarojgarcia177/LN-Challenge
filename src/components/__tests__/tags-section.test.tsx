import { render, screen } from "@testing-library/react";
import TagsSection from "../tags-section";
import { useArticles } from "@/context/articles-context";
import sumarizeTags from "@/lib/sumarize-tags";

jest.mock("@/context/articles-context");
jest.mock("@/lib/sumarize-tags");

describe("TagsSection", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza los tags correctamente", () => {
    const mockArticles = [
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
    ];
    const mockSummarizedTags = [
      { slug: "tag1", text: "Tag 1", count: 2 },
      { slug: "tag2", text: "Tag 2", count: 1 },
      { slug: "tag3", text: "Tag 3", count: 1 },
    ];

    (useArticles as jest.Mock).mockReturnValueOnce({ articles: mockArticles });
    (sumarizeTags as jest.Mock).mockReturnValueOnce(mockSummarizedTags);

    render(<TagsSection />);

    mockSummarizedTags.forEach((tag) => {
      const linkElement = screen.getByText(tag.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", `/tema/${tag.slug}`);
    });
  });

  it("no renderiza tags cuando no hay articulos", () => {
    (useArticles as jest.Mock).mockReturnValueOnce({ articles: [] });
    (sumarizeTags as jest.Mock).mockReturnValueOnce([]);

    render(<TagsSection />);

    const links = screen.queryAllByRole("link");
    expect(links).toHaveLength(0);
  });

  it("renderiza el numero correcto de tags", () => {
    const mockArticles = [
      { taxonomy: { tags: [{ slug: "tag1", text: "Tag 1" }] } },
      { taxonomy: { tags: [{ slug: "tag2", text: "Tag 2" }] } },
    ];
    const mockSummarizedTags = [
      { slug: "tag1", text: "Tag 1", count: 1 },
      { slug: "tag2", text: "Tag 2", count: 1 },
    ];

    (useArticles as jest.Mock).mockReturnValueOnce({ articles: mockArticles });
    (sumarizeTags as jest.Mock).mockReturnValueOnce(mockSummarizedTags);

    render(<TagsSection />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(mockSummarizedTags.length);
  });
});
