import React from "react";
import BaseButton from "@/components/buttons/BaseButton";
import UserSuggestion from "../user/UserSuggestion";

export default function Suggestion() {
  return (
    <>
      <div className="flex items-center justify-between py-3">
        <h5 className="text-sm text-stone-400">See all suggestions</h5>
        <BaseButton classes="text-sm text-stone-800" title="See all" />
      </div>
      <UserSuggestion />
      {/* <UserSuggestion />
      <UserSuggestion />
      <UserSuggestion />
      <UserSuggestion />
      <UserSuggestion /> */}
    </>
  );
}
