import { describe, expect, it } from "vitest";

import { parseMarkdownLink } from "../utils/markdownLink";

describe("parseMarkdownLink", () => {
  it("parses a standard markdown link", () => {
    const result = parseMarkdownLink("[Excalidraw](https://excalidraw.com)");
    expect(result).toEqual({
      label: "Excalidraw",
      url: "https://excalidraw.com",
    });
  });

  it("parses a link with extra whitespace around the whole string", () => {
    const result = parseMarkdownLink(" [Open docs](https://docs.example.com) ");
    expect(result).toEqual({
      label: "Open docs",
      url: "https://docs.example.com",
    });
  });

  it("uses the raw URL as label when label is empty", () => {
    const result = parseMarkdownLink("[](https://example.com)");
    expect(result).toEqual({
      label: "https://example.com",
      url: "https://example.com",
    });
  });

  it("parses a link with a relative URL", () => {
    const result = parseMarkdownLink("[Home](/home)");
    expect(result).toEqual({
      label: "Home",
      url: "/home",
    });
  });

  it("returns null for partial inline link", () => {
    expect(
      parseMarkdownLink("See [here](https://example.com) for details"),
    ).toBeNull();
  });

  it("returns null for plain text without link syntax", () => {
    expect(parseMarkdownLink("Hello world")).toBeNull();
  });

  it("returns null for an empty string", () => {
    expect(parseMarkdownLink("")).toBeNull();
  });

  it("returns null for a bare URL with no label", () => {
    expect(parseMarkdownLink("https://example.com")).toBeNull();
  });

  it("returns null when the URL part is empty", () => {
    expect(parseMarkdownLink("[label]()")).toBeNull();
  });

  it("returns null for two markdown links in one string", () => {
    expect(
      parseMarkdownLink("[A](https://a.com)[B](https://b.com)"),
    ).toBeNull();
  });

  it("returns null for a javascript: URL", () => {
    expect(parseMarkdownLink("[click me](javascript:alert(1))")).toBeNull();
  });

  it("returns null for a data: URL", () => {
    expect(parseMarkdownLink("[img](data:text/html, XSS)")).toBeNull();
  });
});
