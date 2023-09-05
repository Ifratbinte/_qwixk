import TextBlock from "#/components/common/TextBlock";
import React from "react";
import SearchSupport from "#/components/common/form/Search";
import SupportCard from "#/components/common/widgets/light-bg-card";
import support_topic_data from "#/__mocks__/support.json";
const Search = () => {
  const data = support_topic_data;
  return (
    <div className="container mx-auto section-gap-m">
      <TextBlock title="Search more topics" isCenter />
      <SearchSupport placeholder="Search Support"/>
      <div className="flex gap-10 section-gap-m">
        {/* Communities */}
        <div className="w-1/3">
          <SupportCard
            icon={data.communities.icon}
            title={data.communities.title}
            description={data.communities.desc}
            btn_text={data.communities.btn_text}
            isCenter
            isButton
          />
        </div>
        {/* Get Support */}
        <div className="w-2/3">
          <SupportCard
            icon={data.support.icon}
            title={data.support.title}
            description={data.support.desc}
            btn_text={data.support.btn_text}
            isCenter
            lgPadding
            isButton
          />
        </div>
      </div>
      {/* Safety & Security */}
      <div>
        <SupportCard
          icon={data.safety.icon}
          title={data.safety.title}
          description={data.safety.desc}
          link_span={data.safety.link.link_span}
          link_desc={data.safety.link.desc}
          isFlex
        />
      </div>
    </div>
  );
};

export default Search;
