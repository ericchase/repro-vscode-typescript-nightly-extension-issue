# repro-vscode-typescript-nightly-extension-issue

1. install any version of `ms-vscode.vscode-typescript-next` equal to or later than `v5.7.20240911`
2. open `main.ts` and trigger the `Add all missing imports` source action

you should see the following imports appear

```ts
import { StdinTextReader } from './src/lib/ericchase/Platform/Node/Process.js';
import type { Defer } from './src/lib/ericchase/Utility/Defer.js';
```