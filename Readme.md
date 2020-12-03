## Deno MVC simple

![GitHub release](https://img.shields.io/github/release/Krytius/mvc-deno.svg)
![(Deno)](https://img.shields.io/badge/deno-1.5.4-green.svg)

### Example

```ts
import {opine} from "https://deno.land/x/opine@0.26.0/mod.ts";
import {Mvc} from "https://deno.land/x/mvc@v0.0.7/mod.ts";
let app = opine();
let mvc = new Mvc(app, Deno.cwd());
await mvc.start(3000);
```
