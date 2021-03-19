interface CssColor {
  css: string;
}

export default interface Palette {
  backgroundColor: CssColor;
  frameBackgroundColor: CssColor;
  frameTextColor: CssColor;
  headerBackgroundColor: CssColor;
  headerHighlightColor: CssColor;
  headerTextColor: CssColor;
  titleColor: CssColor;
  titleHighlightColor: CssColor;
  textColor: CssColor;
}
