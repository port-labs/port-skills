---
name: setup-region
description: Configure the Port MCP server region (EU or US). Run this after installing the Port plugin to point the agent at the right data center.
---

# Port region setup

Help the user configure the correct Port MCP server region.

## Steps

1. Ask the user which region their Port account is on:
   - **EU**: their Port app URL is `app.getport.io`
   - **US**: their Port app URL is `app.us.getport.io`

   If they are unsure, ask them to open Port in their browser and check the address bar.

2. Read the current `mcp.json` at `~/.cursor/plugins/local/port-mcp/mcp.json`.

3. Update the `url` field based on their answer:
   - EU: `https://mcp.port.io/v1`
   - US: `https://mcp.us.port.io/v1`

4. Write the updated file back.

5. Confirm to the user which URL is now set and remind them to reconnect the Port MCP server in **Cursor Settings → MCP** for the change to take effect.
