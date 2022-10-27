import React, { lazy, ReactComponentElement, Suspense } from "react";

import Html from "../assets/icons/html5/html.svg";
import Javascript from "../assets/icons/javascript/javascript.svg";
import Css from "../assets/icons/css/css3.svg";
import ReactLogo from "../assets/icons/react/react.svg";
import Bootstrap from "../assets/icons/bootstrap/bootstrap.svg";
import Aws from "../assets/icons/aws/aws.svg";
import Java from "../assets/icons/java/java.svg";
import Typescript from "../assets/icons/typescript/typescript.svg";
import Redux from "../assets/icons/redux/redux.svg";
import Objc from "../assets/icons/objc/objc.svg";
import Xcode from "../assets/icons/xcode/xcode.svg";
import Mui from "../assets/icons/mui/material-ui.svg";
import MySql from "../assets/icons/mysql/my-sql.svg";
import Swift from "../assets/icons/swift/swift.svg";

interface IconProps {
  name: string;
}

export enum Icons {
  HTML = "html",
  JS = "javascript",
  CSS = "css",
  REACT = "react",
  BOOTSTRAP = "bootstrap",
  AWS = "aws",
  JAVA = "java",
  TYPESCRIPT = "typescript",
  REDUX = "redux",
  XCODE = "xcode",
  SWIFT = "swift",
  MUI = "mui",
  OBJC = "objc",
  MYSQL = "mysql",
}

const icons: any = {
  html: Html,
  javascript: Javascript,
  css: Css,
  react: ReactLogo,
  bootstrap: Bootstrap,
  aws: Aws,
  java: Java,
  typescript: Typescript,
  redux: Redux,
  xcode: Xcode,
  swift: Swift,
  mui: Mui,
  objc: Objc,
  mysql: MySql,
};

const Icon = ({ name }: IconProps) => {
  const IconName = icons[name];
  return <IconName />;
};

export default Icon;
