import React, { Component } from "react";
import { FaArrowRight, FaBeer } from "react-icons/fa";
import { StoryBookButton } from "../components/common/storybook-button/storybook-button";
// import AdvancedTable from "../components/advanced_table/AdvancedTable";
// import PageWrapper from "../components/page-wrapper/PageWrapper";
// import DashboardCard from "../components/dashboard_card/DashboardCard";
// import Sidebar from "../components/sidebar/Sidebar";
// import { ArrowRight } from "@mui/icons-material";
// import AssignPage from '../pages/global_admin/manage_office/GAManageOfficeTabuler';
// import { getIframeUrl } from "./frame-url";
// import { fontFamily3 } from "../contants/ui-constants";
class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredComponent: "",
      selectedComponent: "",
      link: "",
    };
  }

  render() {
    const componentObject = [
      // {
      //   companentName: "DashboardCard",
      //   component: <DashboardCard />,
      //   companentDescription: "",
      //   componentProps: [
      //     {
      //       propName: "cardContent",
      //       descriptions: "",
      //     },
      //   ],
      // },
      // {
      //   companentName: "Dynamic Table",
      //   component: "",
      //   companentDescription: "",
      //   componentProps: [
      //     {
      //       propName: "cardContent",
      //       descriptions: "",
      //     },
      //   ],
      // },
      // {
      //   companentName: "AdancedTable",
      //   component: <AdvancedTable />,
      //   companentDescription: "",
      //   componentProps: [
      //     {
      //       propName: "",
      //       descriptions: "",
      //     },
      //   ],
      // },
      // {
      //   companentName: "PageWrapper",
      //   component: <PageWrapper />,
      //   companentDescription: "",
      //   componentProps: [
      //     {
      //       propName: "",
      //       descriptions: "",
      //     },
      //   ],
      // },
      // {
      //   companentName: "SideBar",
      //   component: <Sidebar />,
      //   companentDescription: "",
      //   componentProps: [
      //     {
      //       propName: "",
      //       descriptions: "",
      //     },
      //   ],
      // },

      {
        companentName: "StorybookButton",
        component: <StoryBookButton label="Click" />,
        companentDescription: "",
        componentProps: [
          {
            propName: "",
            descriptions: "",
          },
        ],
      },
      {
        companentName: "StorybookButton",
        component: <StoryBookButton label="Click" />,
        companentDescription: "",
        componentProps: [
          {
            propName: "",
            descriptions: "",
          },
        ],
      },
      {
        companentName: "StorybookButton",
        component: <StoryBookButton label="Click" />,
        companentDescription: "",
        componentProps: [
          {
            propName: "",
            descriptions: "",
          },
        ],
      },
      {
        companentName: "StorybookButton",
        component: <StoryBookButton label="Click" />,
        companentDescription: "",
        componentProps: [
          {
            propName: "",
            descriptions: "",
          },
        ],
      },
      {
        companentName: "StorybookButton",
        component: <StoryBookButton label="Click" />,
        companentDescription: "",
        componentProps: [
          {
            propName: "",
            descriptions: "",
          },
        ],
      },
      {
        companentName: "StorybookButton",
        component: <StoryBookButton label="Click" />,
        companentDescription: "",
        componentProps: [
          {
            propName: "",
            descriptions: "",
          },
        ],
      },
      {
        companentName: "StorybookButton",
        component: <StoryBookButton label="Click" />,
        companentDescription: "",
        componentProps: [
          {
            propName: "",
            descriptions: "",
          },
        ],
      },
      {
        companentName: "StorybookButton",
        component: <StoryBookButton label="Click" />,
        companentDescription: "",
        componentProps: [
          {
            propName: "",
            descriptions: "",
          },
        ],
      },
      {
        companentName: "StorybookButton",
        component: <StoryBookButton label="Click" />,
        companentDescription: "",
        componentProps: [
          {
            propName: "",
            descriptions: "",
          },
        ],
      },
      {
        companentName: "StorybookButton",
        component: <StoryBookButton label="Click" />,
        companentDescription: "",
        componentProps: [
          {
            propName: "",
            descriptions: "",
          },
        ],
      },
      {
        companentName: "StorybookButton",
        component: <StoryBookButton label="Click" />,
        companentDescription: "",
        componentProps: [
          {
            propName: "",
            descriptions: "",
          },
        ],
      },
    ];
    const getComponentPage = () => {
      return componentObject.map((item, index) => {
        return (
          <div
            id={`${item.name} ${index}`}
            className="w-full mb-2 h-auto bg-white shadow-blend "
          >
            <div className=" flex flex-col justify-start f-column items-center p-[20px] ">
              {item.component}
              <h3 style={{ fontFamily: "fontFamily3" }}>
                Name of Component in repo: {item.companentName}
              </h3>
            </div>
            <div className=" w-full"></div>
            <div> </div>
          </div>
        );
      });
    };
    const getComponentList = () => {
      return componentObject.map((item, index) => {
        return (
          <div className="w-full cursor-pointer hover:text-blue-600 relative text-blue-400 mb-[5px] h-auto ">
            <div className=" flex j-start f-row items-center p-[20px] ">
              <FaArrowRight className="mr-1" />{" "}
              <span>{item.companentName}</span>
            </div>
          </div>
        );
      });
    };
    return (
      <div className="w-full h-full flex j-start">
        <div className="w-300 w-[300px] overflow-y-scroll h-full shadow-blend text-blue-500 pt-2">
          <div
            style={{ fontFamily: "fontFamily3", fontSize: 30 }}
            className="w-full z-[2] sticky bg-white top-0 all-center"
          >
            <span>Component List</span>
          </div>
          {getComponentList()}
        </div>
        <div className="w-full h-full flex flex-col overflow-y-scroll  p-[30px]">
          {getComponentPage()}
        </div>
      </div>
    );
  }
}
export default Documentation;
