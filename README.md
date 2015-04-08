# ember-cli-delay-app-boot

This addon adds a delay (250ms by default) to initial application boot for certain builds; e.g. `--environment=development` by default.

This is useful in certain cases, such as giving Chrome enough time to load your [Source Map](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) files before your app boots and any debuggers are hit. ([chromium#424191](https://code.google.com/p/chromium/issues/detail?id=424191))

This manifests as your `debugger` statement getting stuck with:
```js
// Please wait a bit.
// Compiled script is not shown while source map is being loaded!
```

## Installation

* `ember install:addon ember-cli-delay-app-boot`

## Configuration (optional)

By default, a delay of 250ms is used only when `--environment=development`. You can change these options in your app's `Brocfile.js`:

```js
var app = new EmberApp({
  'delay-app-boot': {
    // Delay in milliseconds
    delay: 250,
    // Array of environments that should have the boot delay
    environments: ['development']
  }
});
```

## Deploying to Production
When you deploy to production using the `--environment=production` flag, this addon is inert and *does not* artificially slow down your app's boot time.

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
