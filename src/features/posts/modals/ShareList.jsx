import BaseButton from "@/components/buttons/BaseButton";
import BaseRadio from "@/components/input/BaseRadio";
import ListItem from "@/components/list/ListItem";
import ListWrapper from "@/components/list/ListWrapper";
import { BaseModal } from "@/components/modal/BaseModal";
import { ModalBody } from "@/components/modal/ModalBody";
import { ModalFooter } from "@/components/modal/ModalFooter";
import { ModalHeader } from "@/components/modal/ModalHeader";
import UserBriefInfo from "@/features/user/UserBriefInfo";
import React from "react";
import { IoMdClose } from "react-icons/io";

const ShareList = () => {
  return (
    <BaseModal>
      <ModalHeader title="Share" />
      <ModalBody>
        <ListWrapper>
          <ListItem listClasses={"justify-between px-5"}>
            <UserBriefInfo />
            <BaseRadio />
          </ListItem>
          <ListItem listClasses={"justify-between px-5"}>
            <UserBriefInfo />
            <BaseRadio />
          </ListItem>
          <ListItem listClasses={"justify-between px-5"}>
            <UserBriefInfo />
            <BaseRadio />
          </ListItem>
        </ListWrapper>
      </ModalBody>
      <ModalFooter>
        <BaseButton title="Send" classes="w-full p-3 bg-primary text-white" />
      </ModalFooter>
    </BaseModal>
  );
};

export default ShareList;
