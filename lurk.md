---
title: Command listing for lurk (IRC bot)
layout: default
---

# lurk (the IRC bot)'s commands

All commands are prefixed with a `.`.

*Do .help \<command> for more info*

## Calculations and conversions

These commands do not require any permissions.

| Command       | Description | Syntax | Works on Discord and Matrix |
| ------------- | ----------- | ------ | --------------------------- |
| **c**, calc   | Calculates an expression. | .c `5 + 5` | Yes |
| **cur**       | Gets the exchange rate for a currency. | .cur `5` `USD` in `EUR` | Yes |
| **length**    | Converts between units of length. | .length `100mm` | Yes |
| **py**, py3   | Runs Python3 code. | .py \<code> | Yes |
| **py2**       | Runs Python2 code. | .py2 \<code> | Yes |
| **temp**      | Converts between units of temperature. | .temp `100K` | Yes |
| **weight**    | Converts between units of weight. | .weight `5oz` | Yes |

## Channel administration

These commands require you have at least halfops in the channel. These commands
only work on IRC.

| Command       | Description | Syntax |
| ------------- | ----------- | ------ |
| **ban**       | Bans a user from the channel. | .ban \<user> |
| **kick**      | Kick a user from the channel. | .kick \<user> [reason] |
| **mute**, quiet | Mutes a user on the channel. | .mute \<user> |
| **tmask**     | Set the topic mask for the channel, for use with *.topic*. | .tmask \<topic mask, where '{}' is the location to put the topic> |
| **topic**     | Changes the topic of the channel. | .topic \<topic> |
| **showmask**     | Shows the current topic mask. | .showmask |
| **unban**     | Unbans a user from the channel. | .unban \<user> |
| **unmute**, unquiet | Unmutes a user on the channel. | .unmute \<user> |

## Fun and games

These commands are fun to use and abuse&#x2122;!

| Command       | Description | Syntax | Works on Discord and Matrix |
| ------------- | ----------- | ------ | --------------------------- |
| **fortune**   | Tells you a fortune from the UNIX `fortune` command. | .fortune | Yes |
| **lurk!** | Replies to you. Do not prefix this command with a `.`. | lurk! | Yes |
| **r**, roulette | Play roulette: There is a 1 in 6 chance you will get hit. | .r | Yes |
| **rate**      | Puts a rating into chat. | .rate \<score> \<comment> | Yes |
| **slap**, shoot, whack, hit | Slaps a user. | .slap [user [object]] | Yes |
| **yay** | Yay! This command may be used with the `.` prefix, however it is optional. | Yay! | Yes |
| **qotd** | Displays a quote of the day. *Quotes of the day can be sarcastic and/or offensive, read at your own risk.* | .qotd | Yes |
| **cal**, calendar | Displays a calendar for the current month. | .cal | Yes |
| **whip** | Whip | .whip <victim> | Yes |

## Miscellaneous commands

Useful commands that do not fit into any other categories.

| Command       | Description | Syntax | Works on Discord and Matrix |
| ------------- | ----------- | ------ | --------------------------- |
| **!**         | A prefix for DuckDuckGo! bangs. Do .! to see a list of subcommands. | .!ddg ubuntu | No |
| **ping**      | Pings the bot. | .ping | Yes |
| **privs**, privileges | Shows your privileges. | .privs [hostmask] | No |
| **tell**, ask | Tells/asks a user something. | .tell \<user> \<message> | No |
| **whoami**    | Tells you who the bot thinks you are. | .whoami | Yes but useless |

## Random numbers

| Command       | Description | Syntax | Works on Discord and Matrix |
| ------------- | ----------- | ------ | --------------------------- |
| **d**, dice   | Rolls dice. | .d \<amount>d\<sides> | Yes |
| **choose**    | Chooses between a set of options. | .choice \<option 1>, [option 2, [option 3, [...]]] | Yes |
| **rand**      | Generates a random number, optionally between *min* and *max*. | .rand [[min] max] | Yes |

## Text manipulation

| Command       | Description | Syntax | Works on Discord and Matrix |
| ------------- | ----------- | ------ | --------------------------- |
| **&aelig;**, ae | Adds *&aelig;* and *&oelig;* into text. | .ae \<text> | Yes |
| **b64**, base64 | Encodes text into base64. | .base64 \<text> | Yes |
| **b64d**, base64-d | Decodes base64-encoded text. | .base64-d \<base64> | Yes |
| **lower**     | Converts text to lowercase. | .lower \<text> | Yes |
| **rev**       | Reverses text. | .rev \<text> | Yes |
| **silly**     | Randomises capitalization throughout the text | .silly \<text> | Yes |
| **sillyae**   | A mix of *.silly* and *.&aelig;* | .sillyae \<text> | Yes |
| **upper**     | Converts text to uppercase. | .upper \<text> | Yes |

## Time

Some commands are not shown here, as they do not have many uses.

| Command       | Description | Syntax | Works on Discord and Matrix |
| ------------- | ----------- | ------ | --------------------------- |
| **t**, time   | Gets the current time. | .t [tzdata timezone] | Yes |
| **gettz**     | Gets your current timezone. | .gettz | Yes |
| **settz**     | Sets your current timezone. If you don't know what timezone you are in, please visit https://sopel.chat/tz. | .settz \<tzdata timezone> | Yes |
| **resettz**   | Resets your current timezone to the default. | .resettz | Yes |
| **countdown** | Shows how long it is until midnight on the specified day. | .countdown \<YYYY> \<MM> \<DD> | Not well |

## Translating and spell checking

The .tr and .mangle commands use
[Google Translate](https://translate.google.com).

| Command       | Description | Syntax | Works on Discord and Matrix |
| ------------- | ----------- | ------ | --------------------------- |
| **spellcheck** | Checks the spelling of a word. | .spellcheck \<word> | Yes |
| **tr**, translate | Translates text to/from another language. | .tr [:\<from> [:\<to>]] \<text> | Yes |
| **mangle**    | Translates text to/from many languages, making it almost unreadable. | .mangle \<text> | No |
