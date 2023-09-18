import React from "react";
import Modal from "react-modal";
import { Button, Checkbox } from "@material-tailwind/react";
import FormInput from "#/components/common/form/FormInput";
import Input from "../form/BasicInput";
import Textarea from "../form/BasicTextarea";
interface Props {
  isOpen: boolean;
  onclickOpen: () => void;
}

const FeedbackModal: React.FC<Props> = ({ isOpen, onclickOpen }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onclickOpen}
    contentLabel="Modal"
    id="signIn"
    className={{
      base: "modal-base rounded-3xl !w-[30%] h",
      afterOpen: "modal-base_after-open",
      beforeClose: "modal-base_before-close",
    }}
    overlayClassName={{
      base: "overlay-base",
      afterOpen: "overlay-base_after-open",
      beforeClose: "overlay-base_before-close",
    }}
    shouldCloseOnOverlayClick={true}
    closeTimeoutMS={2000}
  >
    <div className="mx-auto w-full py-10 px-20">
      <div className="text-xl font-semibold text-center">Feedback</div>
      <Input
        id="serial-number"
        label="Serial Number"
        type="number"
        value="1204"
      />
      <Input id="name" label="Name" type="text" value="Ifrat Binte" />
      <Input id="email" label="Email" type="email" value="ifrat@qwixk.com" />
      <Textarea
        id="message"
        label="Message"
        value="random text text random and random rand then random and random "
      />

      <div className="pt-5 flex flex-col items-center">
        <Checkbox label="Mark as completed" className="rounded-lg flex text-base-paragraph" />
        <Button
          className="font-poppins bg-red-500 w-2/6 px-2 py-2 mx-auto mt-4"
          onClick={onclickOpen}
          fullWidth
        >
          Close
        </Button>
      </div>
    </div>
  </Modal>
);
export default FeedbackModal;
