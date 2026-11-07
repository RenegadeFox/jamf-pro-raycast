import { ActionPanel, Action, Icon, List, LocalStorage } from "@raycast/api";
import { useLocalStorage, usePromise } from "@raycast/utils";
import { useEffect, useState } from "react";

// hardware.serialNumber=="*PX1*"
// /api/v4/computers-inventory?section=GENERAL&page=0&page-size=100&filter=hardware.serialNumber=="*PX1*"'

export default function SearchInventoryCommand() {
  const [searchText, setSearchText] = useState("");
  const { value: recents = [], setValue: setRecents, isLoading } = useLocalStorage<Jamf.RecentDevice[]>("recents", []);

  const showRecents = searchText === "";

  return (
    <List isLoading={isLoading} onSearchTextChange={(newValue) => setSearchText(newValue)}>
      {showRecents && recents.length === 0 && (
        <List.EmptyView icon={Icon.MagnifyingGlass} title="Type to search inventory." />
      )}

      <List.Section title="Recents">
        {showRecents &&
          recents.map((device) => (
            <List.Item key={`${device.type}-${device.id}`} title={device.name} subtitle={device.serialNumber} />
          ))}
      </List.Section>
    </List>
  );
}
