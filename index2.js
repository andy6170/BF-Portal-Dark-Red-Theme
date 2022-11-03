(function () {
    const plugin = BF2042Portal.Plugins.getPlugin("red-variables");

    plugin.initializeWorkspace = function () {
        const theme = _Blockly.getMainWorkspace().getTheme();

        const variableStyle = theme.blockStyles["variable-block-style"];
        variableStyle.colourPrimary = "#b53e3e";
        variableStyle.colourSecondary = "#bd5704";
        variableStyle.colourTertiary = "#ff0000";

        _Blockly.getMainWorkspace().setTheme(theme);
    };
})();
