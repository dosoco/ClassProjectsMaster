# Links, Pictures, and Broken Things

There are 5 tags that are wrong in some way in this page. They're written incorrectly, or only half there, or missing entirely, or just the wrong tag. Let's see if you can fix them!

### "Serving" Your Page

If you don't have the Live Server extension, now is a great time to install it. Once you do have it:

- Click the "Go Live" button in the lower right corner of your Code window. That should open up a browser window with the result of your page.
- Or, better yet, type Command-Shift-P to get your command palette and start typing "live". You should quickly get the command "Live Server - Open With Live Server".
- Or _better_ better yet, memorize the keyboard shortcut it lists next to it!
- Note that this feature is ONLY available if you've opened the whole directory with your editor, the easiest way to do which is `code .`.

Now every time you make changes in your app, VS Code will reload that browser page, showing you the changes.

### So Why Isn't Live Server Serving My Code?

**The top-most bug in this code is producing fully invalid HTML**, breaking the entire page. It's in the `title` tag, and if you don't see it, look at some examples of `title` tag usage online!

Fortunately, once you fix this one, none of the other bugs should give you that issue. They'll only break their own tag, not the whole page. Which is good, because fixing system-breaking bugs like this is awfully hard if nothing tells you where it is!
Note also that very rarely, including the very first bug in the `title` tag, Live Server will not restart itself. For some reason there are some changes it can't handle, including having html in the title tag. But hit "Reload" (Cmd-R) in your browser and you'll be back up and running.

### Good Luck

And happy bug hunting!
