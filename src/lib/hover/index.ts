import * as vscode from "vscode";
import { providers } from "./providers";

export default function (context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerHoverProvider({ scheme: "file", language: "javascript" }, providers.javascript)
  );

  context.subscriptions.push(
    vscode.languages.registerHoverProvider({ scheme: "file", language: "typescript" }, providers.javascript)
  );

  context.subscriptions.push(
    vscode.languages.registerHoverProvider({ scheme: "file", language: "javascriptreact" }, providers.javascript)
  );

  context.subscriptions.push(
    vscode.languages.registerHoverProvider({ scheme: "file", language: "typescriptreact" }, providers.javascript)
  );

  context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: "file", language: "vue" }, providers.javascript));

  context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: "file", language: "ruby" }, providers.ruby));

  context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: "file", language: "python" }, providers.python));

  context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: "file", language: "php" }, providers.php));

  context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: "file", language: "go" }, providers.go));

  context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: "file", language: "java" }, providers.java));

  context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: "file", language: "csharp" }, providers.csharp));

  context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: "file", language: "rust" }, providers.rust));

  context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: "doppler", language: "yaml" }, providers.doppler));
}
