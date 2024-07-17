import { create } from "@storybook/theming/create";

import logo from "../public/trieve-logo.png";

const colors = {
  white: "#ffffff",
  violet: "#a33eb5",
  lightViolet: "#f6ebf7",
  grey: "#434044",
  blackGrey: "#111827",
  hoverGrey: "#f6f6f6",
  blue: "#0ea5e9",
  lightBlue: "#f7fcff",
};

export default create({
  base: "light",

  brandTitle: "Trieve-Instasearch React storybook",
  brandUrl: "https://docs.trieve.ai/introduction",
  brandImage: logo,
  brandTarget: "_self",

  appBg: colors.white,
  appContentBg: colors.white,
  appPreviewBg: colors.white,
  appBorderColor: colors.white,

  // Text colors
  textColor: colors.blackGrey,
  textInverseColor: colors.blackGrey,

  // Toolbar default and active colors
  barTextColor: colors.grey,
  barSelectedColor: colors.blackGrey,
  barHoverColor: colors.lightViolet,
  barBg: colors.white,

  // Form colors
  inputBg: colors.white,
  inputBorder: "#10162F",
  inputTextColor: "#10162F",
  inputBorderRadius: 2,
});
