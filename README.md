# repro-vscode-typescript-nightly-extension-issue

1. install any version of `ms-vscode.vscode-typescript-next` equal to or later than `v5.7.20240911`
2. restart VSCode
3. open `main.ts` and trigger the `Add all missing imports` source action

you should see the following imports appear

```ts
import { StdinTextReader } from './src/lib/ericchase/Platform/Node/Process.js';
import type { Defer } from './src/lib/ericchase/Utility/Defer.js';
```

# notes

- the `Add all missing imports` source action works just fine when `ms-vscode.vscode-typescript-next` is **not** installed
- after installing `ms-vscode.vscode-typescript-next`, you must **Reload** the VSCode window at minimum
  - restarting the TS Server is not enough from my tests
  - i suggest closing and opening VSCode again