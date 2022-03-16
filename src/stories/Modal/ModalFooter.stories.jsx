import React, {useCallback} from "react";
import Modal from '@components/Modal'
import Button from "@components/Button";

export default {
    title: "Example/Modals/ModalFooter",
    components: Modal.Footer,
    argTypes: {
        children : {
            type: 'array'
        },
    },
};


const Template = (args) => {
    return (
        <Modal show={true}>
            <Modal.Footer>
                {args.children}
            </Modal.Footer>
        </Modal>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    children: [<Button key="modal-footer_btn-cancel">취소</Button>,<Button key="modal-footer_btn-confirm">확인</Button>]
}

