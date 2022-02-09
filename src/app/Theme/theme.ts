export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
    "--foreground-default": "#00498c",
    "--foreground-secondary": "#6c63ff",
    "--foreground-tertiary": "#000",
    "--foreground-quaternary": "#CCCCCC",
    "--foreground-hilight": "var(--foreground-hilight)",

    "--background-default": "#FFF",
    "--background-secondary": "#A3B9CC",
    "--background-tertiary": "#5C7D99",
    "--background-light": "#f4f4f4",

    "--primary-default": "#5DFDCB",
    "--primary-dark": "#24B286",
    "--primary-light": "#B2FFE7",

    "--error-default": "#EF3E36",
    "--error-dark": "#800600",
    "--error-light": "#FFCECC",

    "--background-shadow":
      "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
  },
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--foreground-default": "#ffb673",
    "--foreground-secondary": "#939c00",
    "--foreground-tertiary": "#FFF",
    "--foreground-quaternary": "#333333",
    "--foreground-hilight": "#f59a3d",

    "--background-default": "#000",
    "--background-secondary": "#41474D",
    "--background-tertiary": "#08090A",
    "--background-light": "#0b0b0b",

    "--primary-default": "#5DFDCB",
    "--primary-dark": "#24B286",
    "--primary-light": "#B2FFE7",

    "--error-default": "#EF3E36",
    "--error-dark": "#800600",
    "--error-light": "#FFCECC",

    "--background-shadow":
      "0 4px 8px 0 rgb(F F F / 20%), 0 6px 20px 0 rgb(F F F / 19%)",
  },
};
