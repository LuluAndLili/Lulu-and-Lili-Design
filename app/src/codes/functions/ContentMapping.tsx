import React from "react"
import { Page } from "../../docs/_types/PageTypes"
import { MDBlock } from "../markdown/MDBlock"

export const ContentMapping: React.FC<{ page: Page }> = ({ page }) => {
  return (
    <>
      {page.content.map((item, i: number) => (
        <React.Fragment key={i}>
          {typeof item === "string" ? (
            <MDBlock>
              {item}
            </MDBlock>
          ) : item}
        </React.Fragment>
      ))}
    </>
  )
}