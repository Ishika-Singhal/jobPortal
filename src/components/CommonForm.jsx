import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const CommonForm = ({
  action,
  formControls,
  buttonText,
  isBtnDisabled,
  btntype,
  formData,
  setFormData,
  handleFileChange,
}) => {
  function renderInputByComponentType(getCurrentControl) {
    let content = null;
    switch (getCurrentControl.componentType) {
      case "input":
        content = (
          <div className="relative flex items-center mt-8" key={getCurrentControl.name}>
            <Input
              type="text"
              disabled={getCurrentControl.disabled}
              placeholder={getCurrentControl.placeholder}
              name={getCurrentControl.name}
              id={getCurrentControl.name}
              value={formData[getCurrentControl.name]}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [event.target.name]: event.target.value,
                })
              }
              className="w-full rounded-md h-[60px] px-4 border bg-gray-100 text-lg outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg focus-visible:outline-none focus-visi ble:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        );
        break;
      case "file":
        content = (
          <Label
            key={getCurrentControl.name}
            htmlFor={getCurrentControl.name}
            className="flex bg-grey-100 items-center px-3 py-3 mx-auto mt-6 text-center border-2 border-dashed rounded-lg cursor-pointer"
          >
            <h2>{getCurrentControl.label}</h2>{" "}
            <Input
              onChange={handleFileChange}
              id={getCurrentControl.name}
              type="file"
            />
          </Label>
        );
        break;
      default:
        content = (
          <div className="relative flex items-center mt-8" key={getCurrentControl.name}>
            <Input
              type="text"
              disabled={getCurrentControl.disabled}
              placeholder={getCurrentControl.placeholder}
              name={getCurrentControl.name}
              id={getCurrentControl.name}
              value={formData[getCurrentControl.name]}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [event.target.name]: event.target.value,
                })
              }
              className="w-full rounded-md h-[60px] px-4 border bg-gray-100 text-lg outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg focus-visible:outline-none focus-visi ble:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        );
    }
    return content;
  }


  return (
    <form action={action}>
      {formControls.map((control) => renderInputByComponentType(control))}
      <div className="mt-6 w-full">
        <Button
          type={btntype || "submit"}
          className="disabled:opacity-60 flex h-11 items-center justify-center px-5"
          disabled={isBtnDisabled}
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
};

export default CommonForm;
