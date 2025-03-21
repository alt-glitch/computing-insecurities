import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "computing insecurities",
    titleSuffix: " | sidbin",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "goatcounter",
      websiteId: "sidbin",
    },
    locale: "en-US",
    baseUrl: "sidb.in",
    ignorePatterns: ["private", "templates", ".obsidian"],
    // defaultDateType: "modified",
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        // body: "Source Sans Pro", << original
        body: "Atkinson Hyperlegible",
        code: "IBM Plex Mono",
      },
      colors: {
        // lightMode: {
        //   light: "#faf8f8",
        //   lightgray: "#e5e5e5",
        //   gray: "#b8b8b8",
        //   darkgray: "#4e4e4e",
        //   dark: "#2b2b2b",
        //   secondary: "#284b63",
        //   tertiary: "#84a59d",
        //   highlight: "rgba(143, 159, 169, 0.15)",
        // },
        //   'desert-storm': {
        //     '50': '#fafbf9',
        //     '100': '#eff2ec',
        //     '200': '#dde2d5',
        //     '300': '#bfc9b0',
        //     '400': '#9bab85',
        //     '500': '#809166',
        //     '600': '#677851',
        //     '700': '#546242',
        //     '800': '#475339',
        //     '900': '#3e4733',
        //     '950': '#292f22',
        // },
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          // secondary: "#284b63",
          secondary: "#f05a7f",
          tertiary: "#2b2b2b",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },

        // darkMode: {
        //   light: "#161618",
        //   lightgray: "#393639",
        //   gray: "#646464",
        //   darkgray: "#d4d4d4",
        //   dark: "#ebebec",
        //   secondary: "#7b97aa",
        //   tertiary: "#84a59d",
        //   highlight: "rgba(143, 159, 169, 0.15)",
        //   textHighlight: "#b3aa0288",
        // },
        darkMode: {
          light: "#24283b",
          lightgray: "#414868",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#bb9af7",
          tertiary: "#7aa2f7",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.FancyText(),
      // Plugin.StickyNotes(),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.TableOfContents2(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
