import React from "react";
import Button from "../ui-elements/Button";

const CTA = () => {
  return (
    <div className="flex gap-3">
      <Button
        title="Sign In"
        href="/auth/signin"
        rounded="md"
        variant="bordered"
        className="px-6 py-1 lg:px-3 xl:px-6"
      />
      <Button
        title="Sign Up"
        href="/auth/signup"
        rounded="md"
        className="px-6 py-1 lg:px-3 xl:px-6"
      />
    </div>
  );
};

export default CTA;
