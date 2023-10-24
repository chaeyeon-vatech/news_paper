import React from "react";
import { Menu, MenuContainer } from "ui/styles/home.styles";
import HomeIcon from "ui/components/Icons/HomeIcon";
import { StackItem } from "ui/components";
import ScrapIcon from "../../../ui/components/Icons/ScrapIcon";

const MenuScreen = () => {
  return (
    <MenuContainer>
      <Menu direction={"column"}>
        <StackItem>
          <HomeIcon width={24} />
        </StackItem>
        <StackItem>홈</StackItem>
      </Menu>
      <Menu direction={"column"}>
        <StackItem>
          <ScrapIcon width={24} fill={"#00000"} />
        </StackItem>
        <StackItem>스크랩</StackItem>
      </Menu>
    </MenuContainer>
  );
};

export default MenuScreen;
