# Redacted Quest Revival
This is a refactor/revival of my old project [Redacted Quest](https://github.com/alexz89142/archive_redactedQuest)

The objective is to remake it except with the proper technologies and conventions to make it run reliably and allow progress to continue easily, fixing the issues of the original development

So far, it's just a skeleton project, but these are the intended features:

- Multiplayer (P2P if possible)
- Account Creation (using a proper database)
- Ability to buy and manager cards
- Properly implmented reactivity (using something like Svelte or React)

I'm still going to forego an actual game engine to keep in spirit with the original project, and perhaps it'll become in itself a sort of engine. An open source tool for people to create their own card game by easily adding their own assets and values

Ideally it should run as a docker container with a built-in SQL server that can be easily deployed, if people want to create/host their own card game