import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
// components shared across all pages  
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
  Component.OnlyFor(
    { titles: ["Eilleen's (online!) Everything Notebook"] },
    Component.RecentNotes({ 
      showTags: false, 
      title: "Recently edited notes:", 
      showDate: true,
      linkToMore: "meta/All-files-chronologically-modified-graph-exclude"
      // todo make the above a slug object
    })
  ), 
  Component.OnlyFor(
    { titles: ["Eilleen's (online!) Everything Notebook"] }, 
    Component.Graph()
  ),
  Component.OnlyFor(
    { titles: ["Eilleen's (online!) Everything Notebook"] }, 
    Component.GiscusComments()
  )
],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/fanteastick/quartz-test",
    },
  }),
}

// components for pages that display a single page (e.g. a single note) 
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents())
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.TableOfContents2()),
    Component.DesktopOnly(Component.Backlinks()),
    Component.DesktopOnly(Component.GithubSource()),
  ],
  right: [
    Component.NotFor( 
      {titles: ["Eilleen's (online!) Everything Notebook", "All files chronologically modified"]}, 
      Component.DesktopOnly(Component.Graph())
    ),
    Component.Explorer(), 
    Component.MobileOnly(Component.ComponentGroup([
      Component.Backlinks(),
      Component.GithubSource(),
    ])),
  ],
}
// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
  ],
  right: [
    Component.DesktopOnly(Component.Explorer()),
  ],
}
