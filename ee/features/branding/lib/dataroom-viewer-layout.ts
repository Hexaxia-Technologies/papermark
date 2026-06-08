export type DataroomCardLayout = "LIST" | "COMPACT" | "GRID";

export function asDataroomCardLayout(value: unknown): DataroomCardLayout {
  if (value === "COMPACT" || value === "GRID") return value;
  return "LIST";
}
