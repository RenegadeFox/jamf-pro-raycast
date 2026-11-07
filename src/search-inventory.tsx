import { ActionPanel, Action, Icon, List } from "@raycast/api";

const ITEMS = [
  {
    id: 1,
    icon: Icon.Bird,
    title: "Title " + 1,
    subtitle: "Subtitle",
    accessory: "Accessory",
  }
];

// hardware.serialNumber=="*PX1*"
// /api/v4/computers-inventory?section=GENERAL&page=0&page-size=100&filter=hardware.serialNumber=="*PX1*"'

export default function Command() {
  return (
    <List>
      {ITEMS.map((item) => (
        <List.Item
          key={item.id}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          accessories={[{ icon: Icon.Text, text: item.accessory }]}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard content={item.title} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
