export type RenderTarget = "popup" | "tab" | "inline";

export interface FileViewerProps {
  base64: string;
  fileName?: string;
  renderTarget?: RenderTarget;
  containerId?: string;
}
