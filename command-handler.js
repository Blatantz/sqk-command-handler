module.exports = (command, prefix, discordMentionID) => {
  if (command == undefined) {
    throw new ReferenceError("\"command\" is undefined");
    let response = {
      command: null,
      args: null,
      text: null,
      success: false
    }
    return response;
  }
  if (typeof command != "string") {
    throw new TypeError("\"command\" is not a string.");
    let response = {
      command: null,
      args: null,
      text: null,
      success: false
    }
    return response;
  }

  if (prefix === undefined && prefix !== null) {
    throw new ReferenceError("\"prefix\" is undefined");
    let response = {
      command: null,
      args: null,
      text: null,
      success: false
    }
    return response;
  }
  if (typeof prefix != "string" && (discordMentionID && prefix !== null)) {
    throw new TypeError("\"prefix\" is not a string and isn't disabled");
    let response = {
      command: null,
      args: null,
      text: null,
      success: false
    }
    return response;
  }

  if (discordMentionID) {
    if (typeof discordMentionID == "number") {
      discordMentionID = discordMentionID.toString();
    }
  }

  if (typeof prefix == "string") {
    // Checks if message starts with the prefix.
    let prfch = command.split("").slice(0, prefix.length).join("");
    if (prfch == prefix) {
      // This is so prefixes with spaces don"t break everything.
      let prfspc = prfch.split(" ").length - 1;
      // Fetches the command and prefix.
      let first = command.split(" ").slice(0, 1 + prfspc).join(" ");
      // Sets the command. Use if (command == "command") to test for commands.
      let cmd = command.split("").slice(prfch.length, first.length).join("");
      // Arguments as a array.
      let subcommand = command.split(" ").slice(1 + prfspc);
      // Quick way to get args as string
      let saytext = subcommand.join(" ");
      let response = {
        command: cmd,
        args: subcommand,
        text: saytext,
        success: true
      }
      return response;
    } else if (discordMentionID) {
      let prfstrm = "<@" + discordMentionID + "> ";
      let prfch = command.split("").slice(0, prfstrm.length).join("");
      if (prfch == prfstrm) {
        // This is so prefixes with spaces don"t break everything.
        let prfspc = prfch.split(" ").length - 1;
        // Fetches the command and prefix.
        let first = command.split(" ").slice(0, 1 + prfspc).join(" ");
        // Sets the command. Use if (command == "command") to test for commands.
        let cmd = command.split("").slice(prfch.length, first.length).join("");
        // Arguments as a array.
        let subcommand = command.split(" ").slice(1 + prfspc);
        // Quick way to get args as string
        let saytext = subcommand.join(" ");
        // console.log(prfch + ":" + first + ":" + command + ":" + subcommand.join(" "));
        let response = {
          command: cmd,
          args: subcommand,
          text: saytext,
          success: true
        }
        return response;
      }
      prfstrm = "<@!" + discordMentionID + "> ";
      prfch = command.split("").slice(0, prfstrm.length).join("");
      if (prfch == prfstrm) {
        // This is so prefixes with spaces don"t break everything.
        let prfspc = prfch.split(" ").length - 1;
        // Fetches the command and prefix.
        let first = command.split(" ").slice(0, 1 + prfspc).join(" ");
        // Sets the command. Use if (command == "command") to test for commands.
        let cmd = command.split("").slice(prfch.length, first.length).join("");
        // Arguments as a array.
        let subcommand = command.split(" ").slice(1 + prfspc);
        // Quick way to get args as string
        let saytext = subcommand.join(" ");
        // Return
        let response = {
          command: cmd,
          args: subcommand,
          text: saytext,
          success: true
        }
        return response;
      }
    } else {
      let response = {
        command: null,
        args: null,
        text: null,
        success: false
      }
      return response;
    }
  } else if (discordMentionID) {
    let prfstrm = "<@" + discordMentionID + "> ";
    let prfch = command.split("").slice(0, prfstrm.length).join("");
    if (prfch == prfstrm) {
      // This is so prefixes with spaces don"t break everything.
      let prfspc = prfch.split(" ").length - 1;
      // Fetches the command and prefix.
      let first = command.split(" ").slice(0, 1 + prfspc).join(" ");
      // Sets the command. Use if (command == "command") to test for commands.
      let cmd = command.split("").slice(prfch.length, first.length).join("");
      // Arguments as a array.
      let subcommand = command.split(" ").slice(1 + prfspc);
      // Quick way to get args as string
      let saytext = subcommand.join(" ");
      // console.log(prfch + ":" + first + ":" + command + ":" + subcommand.join(" "));
      let response = {
        command: cmd,
        args: subcommand,
        text: saytext,
        success: true
      }
      return response;
    }
    prfstrm = "<@!" + discordMentionID + "> ";
    prfch = command.split("").slice(0, prfstrm.length).join("");
    if (prfch == prfstrm) {
      // This is so prefixes with spaces don"t break everything.
      let prfspc = prfch.split(" ").length - 1;
      // Fetches the command and prefix.
      let first = command.split(" ").slice(0, 1 + prfspc).join(" ");
      // Sets the command. Use if (command == "command") to test for commands.
      let cmd = command.split("").slice(prfch.length, first.length).join("");
      // Arguments as a array.
      let subcommand = command.split(" ").slice(1 + prfspc);
      // Quick way to get args as string
      let saytext = subcommand.join(" ");
      // Return
      let response = {
        command: cmd,
        args: subcommand,
        text: saytext,
        success: true
      }
      return response;
    }
  }
  let response = {
    command: null,
    args: null,
    text: null,
    success: false
  }
  return response;
}
