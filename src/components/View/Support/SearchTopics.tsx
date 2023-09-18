import TextBlock from "#/components/common/TextBlock";
import React from "react";
import SearchSupport from "#/components/common/form/Search";
import SupportCard from "#/components/common/widgets/supportSearchOpt";
import support_topic_data from "#/__mocks__/support.json";

const SearchTopic = () => {
  const data = support_topic_data;
  return (
    <div className="container mx-auto section-gap-m">
      <TextBlock title="Search more topics" isCenter />
      <SearchSupport placeholder="Search Support" />
      <div className="lg:flex gap-10 section-gap-m">
        {/* Communities */}
        <div className="xl:w-1/3 lg:w-1/2 mb-12 lg:mb-0">
          <SupportCard
            icon={data.communities.icon}
            title={data.communities.title}
            desc={data.communities.desc}
            btn_text={data.communities.btn_text}
            isBtn
            isCenter
          />
        </div>
        {/* Get Support */}
        <div className="xl:w-2/3 lg:w-1/2 w-full">
          <SupportCard
            icon={data.support.icon}
            title={data.support.title}
            desc={data.support.desc}
            btn_text={data.support.btn_text}
            lgPadding
            isBtn
            isCenter
          />
        </div>
      </div>
      {/* Safety & Security */}
      <div>
        <SupportCard
          icon={data.safety.icon}
          title={data.safety.title}
          desc={data.safety.desc}
          link_text={data.safety.link.link_span}
          link_desc={data.safety.link.desc}
          isFlex
          isLink
        />
      </div>
    </div>
  );
};

export default SearchTopic;
