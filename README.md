<div align="center">
	<h1 align="center">TLG Start Page</h1>
	<img src=".github/startpage.gif" />

This is an interactive start page for browsers, inspired from my terminal setup.

[![Vercel Status](https://deploy-badge.vercel.app/vercel/tlg-start-page?logo=Vercel)](https://tlg-start-page.vercel.app)
[![Demo Version (latest semver)](https://img.shields.io/github/package-json/v/thelinuxguy-ssh/tlg-start-page?label=preview)](https://github.com/thelinuxguy-ssh/tlg-start-page)
</div>

## Demo

You can explore the working version [here](https://tlg-start-page.vercel.app). To get inspired by community members' configurations

> [!IMPORTANT]
> This is a demo version and will be updated regularly, which might break your configurations. It is not recommended for daily browsing.

## Features

- Logo with glow support
- Filter links by typing in the prompt
  - Quickly filter links by typing in the prompt. Hitting <kbd>Enter</kbd> will open all filtered links at once
  - If nothing filtered, the text in prompt will use the default search engine for searching your input
- Launch websites directly from the prompt. Just type the URL (ie. `github.com`)
- Search websites with custom commands. For example, type `s some weird bug` to search StackOverflow for `some weird bug`
- Wallpaper support through URL with blur and fade effects
- Terminal window opacity and translucency effects
- Customizable Fetch UI for fetching browser and system data, including custom image support
- Autosuggest and Autocomplete support just like `zsh` and `fish`
- Cycle through filtered links back and forth
- Multiple theme support (check all [available themes](./data/themes/))
- Built-in configuration editor to easily edit and save your configuration

### Built-In Commands

- Show usage with `help` command (shows basic usage and your configured search shortcuts)
- Show info with `fetch` command (time, date, system and browser data)
- Update your configuration with `config` command
  - `config help` - Displays config command usage
  - `config import <url>` - Imports a configuration from URL
  - `config theme` - Lists all [available themes](./data/themes/)
  - `config theme <theme-name>` - Switches between themes and sets your local configuration
  - `config edit` - Edit local configuration within editor
  - `config reset` - Reset your configuration to default

### Key Bindings

- Use <kbd>→</kbd> to auto-complete the suggestion
- Search without auto-complete with <kbd>CTRL</kbd> + <kbd>ENTER</kbd>
- Cycle through filtered links using <kbd>TAB</kbd> and <kbd>SHIFT</kbd> + <kbd>TAB</kbd>
- Clear the prompt quickly with <kbd>CTRL</kbd> + <kbd>C</kbd>
- Close windows with <kbd>ESC</kbd>

## License

The code is available under the [MIT license](LICENSE). Feel free to copy, modify, and distribute the code as you wish, but please keep the original license in the files. Attribution is appreciated and will definetely help improving this project.
