---
title: Command listing for lurk (IRC bot)
layout: default
---

# lurk (the IRC bot)'s commands

All commands are prefixed with a `.`.

*Do .help \<command> for more info*

## Calculations and conversions
These commands do not require any permissions.

| Command       | Description | Syntax |
| ------------- | ----------- | ------ |
| **c**, calc   | Calculates an expression. | .c `5 + 5` |
| **cur**       | Gets the exchange rate for a currency. | .cur `5` `USD` in `EUR` |
| **length**    | Converts between units of length. | .length `100mm` |
| **py**, py3   | Runs Python3 code. | .py \<code> |
| **py2**       | Runs Python2 code. | .py2 \<code> |
| **temp**      | Converts between units of temperature. | .temp `100K` |
| **weight**    | Converts between units of weight. | .weight `5oz` |

## Channel administration
These commands require you have at least halfops in the channel.

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

| Command       | Description | Syntax |
| ------------- | ----------- | ------ |
| **fortune**   | Tells you a fortune from the UNIX `fortune` command. | .fortune |
| **lurk!** | Replies to you. Do not prefix this command with a `.`. | lurk! |
| **r**, roulette | Play roulette: There is a 1 in 6 chance you will get hit. | .r |
| **rate**      | Puts a rating into chat. | .rate \<score> \<comment> |
| **slap**, shoot, whack, hit | Slaps a user. | .slap [user [object]] |
| **yay** | Yay! This command may be used with the `.` prefix, however it is optional. | Yay! |

## Miscellaneous commands
Useful commands that do not fit into any other categories.

| Command       | Description | Syntax |
| ------------- | ----------- | ------ |
| **!**         | A prefix for DuckDuckGo! bangs. Do .! to see a list of subcommands. | .!ddg ubuntu |
| **ping**      | Pings the bot. | .ping |
| **privs**, privileges | Shows your privileges. | .privs [hostmask] |
| **tell**, ask | Tells/asks a user something. | .tell \<user> \<message> |
| **whoami**    | Tells you who the bot thinks you are. | .whoami |

## Random numbers

| Command       | Description | Syntax |
| ------------- | ----------- | ------ |
| **d**, dice   | Rolls dice. | .d \<amount>d\<sides> |
| **choose**    | Chooses between a set of options. | .choice \<option 1>, [option 2, [option 3, [...]]] |
| **rand**      | Generates a random number, optionally between *min* and *max*. | .rand [[min] max] |

## Text manipulation

| Command       | Description | Syntax |
| ------------- | ----------- | ------ |
| **&aelig;**, ae | Adds *&aelig;* and *&oelig;* into text. | .ae \<text> |
| **b64**, base64 | Encodes text into base64. | .base64 \<text> |
| **b64d**, base64-d | Decodes base64-encoded text. | .base64-d \<base64> |
| **lower**     | Converts text to lowercase. | .lower \<text> |
| **rev**       | Reverses text. | .rev \<text> |
| **silly**     | Randomizes capitalization througout the text | .silly \<text> |
| **sillyae**   | A mix of *.silly* and *.&aelig;* | .sillyae \<text> |
| **upper**     | Converts text to uppercase. | .upper \<text> |

## Time
Some commands are not shown here, as they do not have many uses.

| Command       | Description | Syntax |
| ------------- | ----------- | ------ |
| **t**, time   | Gets the current time. | .t [tzdata timezone] |
| **gettz**     | Gets your current timezone. | .gettz |
| **settz**     | Sets your current timezone. If you don't know what timezone you are in, please visit https://sopel.chat/tz. | .settz \<tzdata timezone> |
| **resettz**   | Resets your current timezone to the default. | .resettz |
| **countdown** | Shows how long it is until midnight on the specified day. | .countdown \<YYYY> \<MM> \<DD> |

## Translating and spell checking
These commands use [Google Translate](https://translate.google.com).

| Command       | Description | Syntax |
| ------------- | ----------- | ------ |
| **spellcheck** | Checks the spelling of a word. | .spellcheck \<word> |
| **tr**, translate | Translates text to/from another language. | .tr [:\<from> [:\<to>]] \<text> |
| **mangle**    | Translates text to/from many languages, making it almost unreadable. | .mangle \<text> |
