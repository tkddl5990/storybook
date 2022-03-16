import React, {useCallback} from "react";
import Modal from '@components/Modal'

export default {
    title: "Example/Modals/ModalHeader",
    components: Modal.Title,
    argTypes: {
        hasCloseButton : {
            type: "boolean"
        },
    },
};


const Template = (args) => {
    return (
        <Modal show={true}>
            <Modal.Header hasCloseButton={args.hasCloseButton}>
                <Modal.Title>모달 제목</Modal.Title>
            </Modal.Header>
        </Modal>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    hasCloseButton: true,
}

