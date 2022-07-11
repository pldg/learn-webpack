# Debug Webpack

You can debug webpack configuration using [nodejs debug tool](https://nodejs.org/en/docs/guides/debugging-getting-started/):

- Open terminal and run `node --inspect-brk node_modules/webpack/bin/webpack.js`.
- `--inspect-brk` will pause your app execution at line 1.
- You'll see a message like *Debugger listening on ws://127.0.0.1:9229/0f2c936f-b1cd-4ac9-aab3-f63b0f33d55e*.
- Now you have to attach the debugger.

Attach debugger in Chrome:

- Open Chrome browser.
- Type *about:inspect* in url bar and enter.
- Click on *Open dedicated DevTools for Node*.
- You may need to wait a bit before the debugger is attached.
- Now in the terminal you'll see a new message *Debugger attached*.
- App is paused at first line, click *Resume script execution* to run it and see the logs.

Attach debugger in VSCode:

- Open debug tab in VSCode.
- Click on open *lunch.json*.
- Click on *"Add Configuration"* button in the bottom left corner.
- Choose *"nodejs:attach"* configuration.
- You can also use debug menu or command palette to add the same settings as above.
- From debug tab select your configuration (*Attach*) and click the green play button.
- You may need to wait a bit before the debugger is attached.
- In the terminal you'll see a new message *Debugger attached*.
- App is paused at first line, click *Continue* to run it and see the logs.
