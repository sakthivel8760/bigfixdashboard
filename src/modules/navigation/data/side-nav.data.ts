import { SideNavItems, SideNavSection } from "@modules/navigation/models";

export const sideNavSections: SideNavSection[] = [
  {
    text: "CORE",
    items: ["dashboard"]
  },
  {
    text: "INTERFACE",
    items: ["layouts", "pages"]
  },
  {
    text: "ADDONS",
    items: ["charts", "tables"]
  }
];

export const sideNavItems: SideNavItems = {
  dashboard: {
    icon: "tachometer-alt",
    text: "Dashboards",
    submenu: [
      {
        icon: "tachometer-alt",
        text: "PatchCompliance",
        link: "/PatchCompliance"
      },
      {
        icon: "tachometer-alt",
        text: "ActionStatus",
        link: "/PatchCompliance/ActionStatus"
      },
      {
        icon: "tachometer-alt",
        text: "Regional&Outlevel",
        link: "/PatchCompliance/Regional&Outlevel"
      },
      {
        icon: "tachometer-alt",
        text: "Regional&Outlevel",
        link: "/PatchCompliance/Regional&Outlevel"
      },
      {
        icon: "tachometer-alt",
        text: "RelayHealth",
        link: "/PatchCompliance/RelayHealth"
      },
      {
        icon: "tachometer-alt",
        text: "ContentWise",
        link: "/PatchCompliance/ContentWise"
      },
      {
        icon: "tachometer-alt",
        text: "PendingPatch",
        link: "/PatchCompliance/PendingPatch"
      },
      {
        icon: "tachometer-alt",
        text: "SeverityBased",
        link: "/PatchCompliance/SeverityBased"
      },
      {
        icon: "tachometer-alt",
        text: "OverallComplaince",
        link: "/PatchCompliance/OverallComplaince"
      }
    ]
  },

  layouts: {
    icon: "columns",
    text: "Layouts",
    submenu: [
      {
        text: "Static Navigation",
        link: "/PatchCompliance/static"
      },
      {
        text: "Light Sidenav",
        link: "/PatchCompliance/light"
      }
    ]
  },
  pages: {
    icon: "book-open",
    text: "Pages",
    submenu: [
      {
        text: "Authentication",
        submenu: [
          {
            text: "Login",
            link: "/auth/login"
          },
          {
            text: "Register",
            link: "/auth/register"
          },
          {
            text: "Forgot Password",
            link: "/auth/forgot-password"
          }
        ]
      },
      {
        text: "Error",
        submenu: [
          {
            text: "401 Page",
            link: "/error/401"
          },
          {
            text: "404 Page",
            link: "/error/404"
          },
          {
            text: "500 Page",
            link: "/error/500"
          }
        ]
      }
    ]
  },
  charts: {
    icon: "chart-area",
    text: "Charts",
    link: "/charts"
  },
  tables: {
    icon: "table",
    text: "Tables",
    link: "/tables"
  }
};
