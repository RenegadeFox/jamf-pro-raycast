declare namespace Jamf {
  type DeviceType = "computer" | "mobileDevice";

  interface SearchResult {
    id: string;
    type: DeviceType;
    name: string;
    serialNumber: string;
    model?: string;
    viewedAt: number;
  }
}
