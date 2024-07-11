import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/githubSource.scss"

// @ts-ignore
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const GithubSource: QuartzComponent = ({ displayClass, fileData }: QuartzComponentProps) => {
return (
  <div class={classNames(displayClass, "github-source")}>
    <h3>Source code</h3>
    <ul>
      <li>
        {/* <a href={`https://github.com/fanteastick/quartz-test/blob/v4/content/${fileData.slug?.replace(/-/g, '%20')}.md`}> */}
        <a href={`https://github.com/fanteastick/quartz-test/blob/v4/${fileData.filePath!}`}>
          Source
        </a>  
      </li>
      <li>
        {/* <a href={`https://github.com/fanteastick/quartz-test/blame/v4/content/${fileData.slug}.md`}> */}
        <a href={`https://github.com/fanteastick/quartz-test/blame/v4/${fileData.filePath!}`}>
          Blame
        </a>
      </li>
      <li>
        <a href={`https://github.githistory.xyz/fanteastick/quartz-test/commits/v4/${fileData.filePath!}`} class="external">
          GitHistory 
        </a>
        <svg 
          class="external-icon"
          viewBox= "0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          fill="currentColor"
          xmlSpace="preserve"
        >
          <path 
            d= "M320 0H288V64h32 82.7L201.4 265.4 178.7 288 224 333.3l22.6-22.6L448 109.3V192v32h64V192 32 0H480 320zM32 32H0V64 480v32H32 456h32V480 352 320H424v32 96H64V96h96 32V32H160 32z"
          />
        </svg>
      </li>
    </ul>
  </div>
)
}


GithubSource.css = style
export default (() => GithubSource) satisfies QuartzComponentConstructor