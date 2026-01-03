# Typing Indicator Setup

The typing indicator feature requires a small addition to the FiveM chat resource.

## Installation

### 1. Locate the Chat Resource File

The chat resource can be located in two different places:

- **Inside Artifacts:** `artifacts/citizen/system_resources/chat/cl_chat.lua`
- **Inside Resources:** `resources/[system]/chat/cl_chat.lua`

### 2. Add the Statebag

In the `cl_chat.lua` file, find the lines `chatInputActive = true` and `chatInputActive = false`.

Add the following **below** each `chatInputActive = true` line:
```lua
LocalPlayer.state:set('chat:typing', true, true)
```

Add the following **below** each `chatInputActive = false` line:
```lua
LocalPlayer.state:set('chat:typing', false, true)
```

### 3. Example

**Before:**
```lua
chatInputActive = true
chatInputActivating = true
```

**After:**
```lua
chatInputActive = true
LocalPlayer.state:set('chat:typing', true, true)
chatInputActivating = true
```

## All done. If have any issued @ me on Discord server. Have a good day.
