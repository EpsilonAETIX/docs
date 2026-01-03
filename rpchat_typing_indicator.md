# Chat Typing Indicator - StateBag Integration Guide

This guide explains how to add a `chat:typing` StateBag to your `chat` script. Other scripts can read this state to know when a player is typing.

---

## Step 1: Initialize the State

**Where:** At the top of `cl_chat.lua`, right after your variable declarations.

**Find this section:**
```lua
local chatInputActive = false
local chatInputActivating = false
local chatLoaded = false
```

**Add this line right after:**
```lua
LocalPlayer.state:set('chat:typing', false, true)
```

**Result:**
```lua
local chatInputActive = false
LocalPlayer.state:set('chat:typing', false, true)  -- ADD THIS LINE
local chatInputActivating = false
local chatLoaded = false
```

---

## Step 2: Set State to TRUE When Chat Opens

**Where:** Inside your main thread, where `chatInputActive = true` is set.

**Find this code:**
```lua
if IsControlPressed(0, input) then
    chatInputActive = true
    chatInputActivating = true
```

**Add the state update right after `chatInputActive = true`:**
```lua
if IsControlPressed(0, input) then
    chatInputActive = true
    LocalPlayer.state:set('chat:typing', true, true)  -- ADD THIS LINE
    chatInputActivating = true
```

---

## Step 3: Set State to FALSE When Chat Closes (Submit/Cancel)

**Where:** Inside your `chatResult` NUI callback.

**Find this code:**
```lua
chatInputActive = false
chatScrollMode = false
SetNuiFocus(false, false)
```

**Add the state update right after `chatInputActive = false`:**
```lua
chatInputActive = false
LocalPlayer.state:set('chat:typing', false, true)  -- ADD THIS LINE
chatScrollMode = false
SetNuiFocus(false, false)
```

---

## Step 4: Set State to FALSE When ESC is Pressed

**Where:** Inside your ESC key handler.

**Find this code:**
```lua
if IsControlJustPressed(0, 200) then -- ESC
    chatInputActive = false
    chatScrollMode = false
    SetNuiFocus(false, false)
```

**Add the state update right after `chatInputActive = false`:**
```lua
if IsControlJustPressed(0, 200) then -- ESC
    chatInputActive = false
    LocalPlayer.state:set('chat:typing', false, true)  -- ADD THIS LINE
    chatScrollMode = false
    SetNuiFocus(false, false)
```

---

## How to Read the State (For Other Scripts)

### Client-Side

```lua
-- Check if local player is typing
local isTyping = LocalPlayer.state['chat:typing']

-- Check if another player is typing (by player ID)
local isTargetTyping = Player(playerId).state['chat:typing']
```

### Server-Side

```lua
-- Check if a specific player is typing (by source)
local isTyping = Player(source).state['chat:typing']
```
