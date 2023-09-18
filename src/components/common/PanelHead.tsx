import React from "react";
import panel_action, {
  ActionInterface,
} from "#/components/instance/icon/svgIcon-with-text";
import SvgText from "./widgets/svgIcon-with-text";

interface PanelHeadInterface {
  title: string;
}

const PanelHead: React.FC<PanelHeadInterface> = ({ title }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-xl font-semibold">{title}</div>
      <ul className="flex gap-6">
        {panel_action.map((action: ActionInterface, i:number) => (
          <SvgText key={i} title={action.content} Icon={action.Icon} />
        ))}
      </ul>
    </div>
  );
};

export default PanelHead;
