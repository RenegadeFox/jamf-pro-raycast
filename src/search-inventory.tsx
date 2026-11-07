import { ActionPanel, Action, Icon, List, LocalStorage } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import { useEffect, useState } from "react";

// hardware.serialNumber=="*PX1*"
// /api/v4/computers-inventory?section=GENERAL&page=0&page-size=100&filter=hardware.serialNumber=="*PX1*"'

export default function SearchInventoryCommand() {
  const [state, setState] = useState({
    searchText: "",
    searchResults: [],
    recentlyViewed: [],
  });

  function setRecents(recents: Jamf.SearchResult[]) {}

  const { data: recents, isLoading } = usePromise(async () => {
    const raw = await LocalStorage.getItem<string>("recents");
    return raw ? JSON.parse(raw) : [];
  });

  return (
    <List onSearchTextChange={(newValue) => setState((previous) => ({ ...previous, searchText: newValue }))}>
      {state.searchText === "" && state.recentlyViewed.length === 0 ? (
        <List.EmptyView icon={Icon.MagnifyingGlass} title="No recently viewed. Type something to search inventory." />
      ) : (
        state.searchResults.map((item) => <List.Item key={item} title={item} />)
      )}
    </List>
  );
}
