declare module "mermaid" {
  interface MermaidConfig {
    startOnLoad?: boolean;
    theme?: "default" | "dark" | "forest" | "neutral";
    securityLevel?: "strict" | "loose" | "antiscript" | "sandbox";
    fontFamily?: string;
    flowchart?: {
      curve?: string;
      padding?: number;
      [key: string]: any;
    };
    [key: string]: any;
  }

  interface RenderResult {
    svg: string;
    bindFunctions?: (element: Element) => void;
  }

  export function initialize(config: MermaidConfig): void;
  export function render(
    id: string,
    text: string,
    cb?: (svgCode: string, bindFunctions: (element: Element) => void) => void
  ): Promise<RenderResult>;
  export function parse(text: string): Promise<boolean>;
  export function contentLoaded(): void;

  const mermaid: {
    initialize: typeof initialize;
    render: typeof render;
    parse: typeof parse;
    contentLoaded: typeof contentLoaded;
  };

  export default mermaid;
}
