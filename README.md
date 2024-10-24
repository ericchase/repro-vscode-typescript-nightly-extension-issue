# repro-vscode-typescript-nightly-extension-issue

1. install any version of `ms-vscode.vscode-typescript-next` equal to or later than `v5.7.20240911`
2. trigger `Restart Extensions`
3. open `main.ts` and trigger the `Add all missing imports` source action

you should see the following imports appear

```ts
import { StdinTextReader } from './src/lib/ericchase/Platform/Node/Process.js';
import type { Defer } from './src/lib/ericchase/Utility/Defer.js';
```

# notes

- the `Add all missing imports` source action works just fine when `ms-vscode.vscode-typescript-next` is **not** installed
- after installing `ms-vscode.vscode-typescript-next`, you must at minimum trigger the `Restart Extensions` command
  - restarting the TS Server alone is not enough from my tests
