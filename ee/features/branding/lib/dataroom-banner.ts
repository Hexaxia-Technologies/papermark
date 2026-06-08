export type DataroomBannerKind = "none" | "image" | "video" | "youtube";

export function classifyDataroomBanner(src: string | null | undefined): {
  kind: DataroomBannerKind;
  src?: string;
  youtubeId?: string;
} {
  return { kind: "none" };
}
