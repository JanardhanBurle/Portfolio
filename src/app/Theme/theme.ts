export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
    "--foreground-default": "#0a66c2",
    "--foreground-secondary": "#6c63ff",
    "--foreground-tertiary": "#000",
    "--foreground-quaternary": "#CCCCCC",

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
    "--border-color-primary": "#f2f2f2",
    "--border-color-secondary": "#c6c6c6",
    "--card-hover-bg": "rgba(255, 255, 255, 0.8)",
    "--background-shadow":
      "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
    "--profile-shadow-0": "0 0 0 0 rgba(0, 0, 0, 0.7)",
    "--profile-shadow-7": "0 0 0 10px rgba(0, 0, 0, 0)",
    "--profile-shadow-10": "0 0 0 0 rgba(0, 0, 0, 0)",
  },
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--foreground-default": "#f5993d",
    "--foreground-secondary": "#939c00",
    "--foreground-tertiary": "#FFF",
    "--foreground-quaternary": "#333333",

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
    "--border-color-primary": "#0d0d0d",
    "--border-color-secondary": "#393939",
    "--card-hover-bg": "rgba(0, 0, 0, 0.8)",
    "--background-shadow":
      "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)",
    "--profile-shadow-0": "0 0 0 0 rgba(F, F, F, 0.7)",
    "--profile-shadow-7": "0 0 0 10px rgba(F, F, F, 0)",
    "--profile-shadow-10": "0 0 0 0 rgba(F, F, F, 0)",
  },
};
