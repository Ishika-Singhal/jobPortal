import React, { useState } from "react";
import { Button } from "./ui/button";
import { DialogContent, DialogHeader, Dialog } from "./ui/dialog";
import CommonForm from "./CommonForm";
import { initialPostNewJobFormData, postNewJobFormControls } from "@/utils";

const PostNewJob = ({ profileInfo }) => {
  const [showJobDialog, setShowJobDialog] = useState(false);
  const [jobformData, setJobFormData] = useState({
    ...initialPostNewJobFormData,
    companyName: profileInfo?.recruiterInfo?.companyName,
  });

  function handlePostNewBtnValid(){
    return Object.keys(jobformData).every((control)=>jobformData[control].trim()!=="")
  }

  return (
    <div>
      <Button
        className="disabled:opacity-60 flex h-11 items-center justify-center px-5"
        onClick={() => setShowJobDialog(true)}
      >
        Post A Job
      </Button>
      <Dialog
        open={showJobDialog}
        onOpenChange={() => {
          setShowJobDialog(false);
          setJobFormData({
            ...initialPostNewJobFormData,
            companyName: profileInfo?.recruiterInfo?.companyName,
          });
        }}
      >
        <DialogContent className="sm:max-w-screen-md h-[600px] overflow-auto ">
          <DialogHeader>Post New Job</DialogHeader>
          <div className="grid gap-4 py-4">
            <CommonForm
              buttonText={"Add"}
              formData={jobformData}
              setFormData={setJobFormData}
              formControls={postNewJobFormControls}
              isBtnDisabled={!handlePostNewBtnValid()}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostNewJob;
