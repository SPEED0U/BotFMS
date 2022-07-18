# BotFMS
This bot is made to deal itself with the WebSocket basically supported by the Freeroam server.

### Configuration
The following configuration example is the file `settings.json` and you will have to fill **every** settings as your convenance.

```JSON
{
    "wsDomain": "map.example.com",
    "wsPort": 6997,
    "privkeyPath": "/etc/letsencrypt/live/yourdomain/privkey.pem",
    "pubkeyPath": "/etc/letsencrypt/live/yourdomain/fullchain.pem"
}
```

Bot configuration
- `wsDomain`, the domain where the websocket points to. (Must be same than in Freeroam server config.)
- `wsPort`, the port of the websocket. (Must be same than in Freeroam server config.)
- `privkeyPath`, the path to your certified domain private key.
- `pubkeyPath`, the path to your certified domain public key.

### How to install

To use the project correctly you will need some tools.
- [Node JS](https://nodejs.org/en/) (v16.X.X+).

Run the following commands into your terminal.
- `git clone https://github.com/SPEED0U/BotFMS`
- `npm install`

### How to run

Go to the folder where the bot files are located and run the following commands.
- `node index.js`

⚠️ - If your private and public keys are not located in a user home then you'll have to execute it under root or SU.

#
Realized with ❤️ by [Speedou](https://github.com/SPEED0U).

Please do not withdraw the license and keep the credits on this project.
