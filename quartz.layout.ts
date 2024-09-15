import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { FileNode } from "./quartz/components/ExplorerNode"
import { SimpleSlug } from "./quartz/util/path"
import { QuartzPluginData } from "./quartz/plugins/vfile"
// Constants for config that are reused a lot
const homepageTitle = "computing insecurities"
const modifiedListTitle = "All-files-chronologically-modified"
const mapTitle = "Map"
const tagsToRemove = ["graph-exclude", "explorer-exclude", "backlinks-exclude", "recents-exclude"]
const graphConfig = {
  localGraph: {
    removeTags: tagsToRemove,
    excludeTags: ["graph-exclude"],
  },
  globalGraph: {
    removeTags: tagsToRemove,
    excludeTags: ["graph-exclude"],
  },
}
const tagListConfig = {
  excludeTags: tagsToRemove,
}
const explorerConfig = {
  filterFn: (node: FileNode) =>
    node.name !== "tags" && !(node.file?.frontmatter?.tags?.includes("explorer-exclude") === true),
}
const recentNotesConfig = {
  showTags: false,
  title: "Recently edited notes:",
  showDate: true,
  linkToMore: ("meta/" + modifiedListTitle) as SimpleSlug,
  excludeTags: ["recents-exclude"],
  filter: (f: QuartzPluginData) => !f.slug!.startsWith("tags/"),
}
const backlinksConfig = {
  excludeTags: ["backlinks-exclude"],
}
///////////////////////////////////////////////////
// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.OnlyFor(
      { titles: [homepageTitle, mapTitle] },
      Component.RecentNotes(recentNotesConfig),
    ),
    Component.Comments({
      provider: "giscus",
      options: {
        // from data-repo
        repo: "alt-glitch/computing-insecurities",
        // from data-repo-id
        repoId: "R_kgDOMx_N3g",
        // from data-category
        category: "Announcements",
        // from data-category-id
        categoryId: "DIC_kwDOMx_N3s4Cifk5",
        mapping: "url",
        strict: true,
        reactionsEnabled: true,
        inputPosition: "bottom",
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      "X/Twitter": "https://x.com/sidbing",
      LinkedIn: "https://linkedin.com/in/siddharth-balyan",
      GitHub: "https://github.com/alt-glitch",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(tagListConfig),
    Component.MobileOnly(Component.TableOfContents()),
    // Component.OnlyFor({ titles: [mapTitle] }, Component.Explorer(explorerConfig)),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Row([Component.Map(), Component.Darkmode(), Component.Search()]),
    Component.DesktopOnly(Component.TableOfContents2()),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(graphConfig),
    Component.ComponentGroup([
      Component.Backlinks(backlinksConfig),
      // Component.GithubSource(githubSourceConfig),
    ]),
  ],
}
// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Row([Component.Map(), Component.Darkmode(), Component.Search()]),
  ],
  right: [],
}
