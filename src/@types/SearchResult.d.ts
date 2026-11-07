declare namespace Jamf {
  type DeviceType = "computer" | "mobileDevice";

  interface RecentDevice {
    id: string;
    type: DeviceType;
    name: string;
    serialNumber: string;
    model?: string;
    viewedAt: number;
  }
}
