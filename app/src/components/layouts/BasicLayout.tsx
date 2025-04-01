import React from "react";
import { Page } from "../../docs/_types/PageTypes";
import { ContentMapping } from "../functions/ContentMapping";

export const BasicLayout: React.FC<{page: Page}> = ({page}) => {
  function layout() {
    switch (page.info.pageType) {
      case "channel":
        return (
          <div className="channel">
            <ContentMapping page={page} />
          </div>
        );
      case "demo":
        return (
          <ContentMapping page={page} />
        );
      default:
        return null
    }
  }

  return layout()
}


